import * as os from "os";
import { Configuration, ResolvedConfiguration } from "./Configuration";
import { ConfigurationDiagnostic } from "./ConfigurationDiagnostic";
import { ResolveConfigurationResult } from "./ResolveConfigurationResult";

const defaultValues = {
    lineWidth: 120,
    indentWidth: 4,
    useTabs: false,
    newlineKind: "auto"
} as const;

/**
 * Changes the provided configuration to have all its properties resolved to a value.
 * @param config - Configuration to resolve.
 * @param pluginPropertyNames - Collection of plugin property names to ignore for excess property diagnostics.
 */
export function resolveConfiguration(config: Partial<Configuration>): ResolveConfigurationResult<ResolvedConfiguration> {
    config = { ...config };
    const diagnostics: ConfigurationDiagnostic[] = [];

    const resolvedConfig: ResolvedConfiguration = {
        lineWidth: getValue("lineWidth", defaultValues.lineWidth, ensureNumber),
        indentWidth: getValue("indentWidth", defaultValues.indentWidth, ensureNumber),
        useTabs: getValue("useTabs", defaultValues.useTabs, ensureBoolean),
        newlineKind: getNewLineKind()
    };

    addExcessPropertyDiagnostics();

    return {
        config: resolvedConfig,
        diagnostics
    };

    function getNewLineKind() {
        const newlineKind = config.newlineKind;
        delete config.newlineKind;
        switch (newlineKind) {
            case "auto":
                return "auto";
            case "crlf":
                return "\r\n";
            case "lf":
                return "\n";
            case null:
            case undefined:
                return defaultValues.newlineKind;
            case "system":
                return os.EOL === "\r\n" ? "\r\n" : "\n";
            default:
                const propertyName: keyof ResolvedConfiguration = "newlineKind";
                diagnostics.push({
                    propertyName,
                    message: `Unknown configuration specified for '${propertyName}': ${newlineKind}`
                });
                return defaultValues["newlineKind"];
        }
    }

    function getValue<TKey extends keyof Configuration>(
        key: TKey,
        defaultValue: NonNullable<Configuration[TKey]>,
        validateFunc: (key: TKey, value: NonNullable<Configuration[TKey]>) => boolean
    ) {
        let actualValue = config[key] as NonNullable<Configuration[TKey]>;
        if (actualValue == null || !validateFunc(key, actualValue as NonNullable<Configuration[TKey]>))
            actualValue = defaultValue;

        delete config[key];

        return actualValue;
    }

    function ensureNumber(key: keyof Configuration, value: number) {
        if (typeof value === "number")
            return true;

        diagnostics.push({
            propertyName: key,
            message: `Expected the configuration for '${key}' to be a number, but its value was: ${value}`
        });
        return false;
    }

    function ensureBoolean(key: keyof Configuration, value: boolean) {
        if (typeof value === "boolean")
            return true;

        diagnostics.push({
            propertyName: key,
            message: `Expected the configuration for '${key}' to be a boolean, but its value was: ${value}`
        });
        return false;
    }

    function addExcessPropertyDiagnostics() {
        for (const propertyName in config) {
            if (propertyName === nameof<Configuration>(c => c.projectType)
                || propertyName === nameof<Configuration>(c => c.plugins))
            {
                continue;
            }

            diagnostics.push({
                propertyName: propertyName as keyof typeof config,
                message: `Unexpected property in configuration: ${propertyName}`
            });
        }
    }
}
