(window.webpackJsonpplayground=window.webpackJsonpplayground||[]).push([[2],{12:function(e,n,t){"use strict";var i=t(16),r=t(21),o=t(17),a=t(18);Object.defineProperty(n,"__esModule",{value:!0});var l,s,u=t(22),c={lineWidth:120,indentWidth:4,useTabs:!1,newlineKind:"auto"};function d(e){return f("Unhandled value: ".concat(JSON.stringify(e)))}function f(e){throw function(e){return new Error("[dprint]: ".concat(e))}(e)}(l=n.PrintItemKind||(n.PrintItemKind={}))[l.RawString=0]="RawString",l[l.Condition=1]="Condition",l[l.Info=2]="Info",(s=n.Signal||(n.Signal={}))[s.NewLine=0]="NewLine",s[s.SpaceOrNewLine=1]="SpaceOrNewLine",s[s.ExpectNewLine=2]="ExpectNewLine",s[s.StartIndent=3]="StartIndent",s[s.FinishIndent=4]="FinishIndent",s[s.StartNewlineGroup=5]="StartNewlineGroup",s[s.FinishNewLineGroup=6]="FinishNewLineGroup",s[s.SingleIndent=7]="SingleIndent",s[s.StartIgnoringIndent=8]="StartIgnoringIndent",s[s.FinishIgnoringIndent=9]="FinishIgnoringIndent",function(e){e.isStartOfNewLine=function(e){return e.writerInfo.columnNumber===e.writerInfo.lineStartColumnNumber},e.isHanging=function(e,n,t){var i=e.getResolvedInfo(n);if(null!=i){var r=function(){if(null==t)return e.writerInfo;var n=e.getResolvedInfo(t);return null==n?void 0:n}();if(null!=r)return r.lineStartIndentLevel>i.lineStartIndentLevel}},e.isMultipleLines=function(e,t,i,r){var o=e.getResolvedInfo(t),a=i.kind===n.PrintItemKind.Info?e.getResolvedInfo(i):i;return null==o||null==a?r:a.lineNumber>o.lineNumber},e.areInfoEqual=function(e,n,t,i){var r=e.getResolvedInfo(n),o=e.getResolvedInfo(t);return null==r||null==o?i:r.lineNumber===o.lineNumber&&r.columnNumber===o.columnNumber}}(n.conditionResolvers||(n.conditionResolvers={}));var h=function(){function e(n){o(this,e),this.items=Array.from(n)}return a(e,[{key:Symbol.iterator,value:function(){var e=this,n=0;return{next:function(){if(n>=e.items.length)return{value:void 0,done:!0};var t={value:e.items[n],done:!1};return n++,t}}}}]),e}();function p(e){for(var n=e.length-1;n>=0;n--)if("\n"===e[n])return"\r"===e[n-1]?"\r\n":"\n";return"\r\n"===u.EOL?"\r\n":"\n"}!function(e){var t=r.mark(s),i=r.mark(u),o=r.mark(c),a=r.mark(d),l=r.mark(f);function s(e){return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.Signal.StartIndent;case 2:return t.delegateYield(e,"t0",3);case 3:return t.next=5,n.Signal.FinishIndent;case 5:case"end":return t.stop()}},t)}function u(e){return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.Signal.StartNewlineGroup;case 2:return t.delegateYield(e,"t0",3);case 3:return t.next=5,n.Signal.FinishNewLineGroup;case 5:case"end":return t.stop()}},i)}function c(e){var n,t,i,a,l,s,u,c,d,f,h=arguments;return r.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:for(n=!1,t=h.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=h[a];l=!0,s=!1,u=void 0,r.prev=5,c=e[Symbol.iterator]();case 7:if(l=(d=c.next()).done){r.next=17;break}if(f=d.value,n){r.next=12;break}return r.delegateYield(i,"t0",11);case 11:n=!0;case 12:return r.next=14,f;case 14:l=!0,r.next=7;break;case 17:r.next=23;break;case 19:r.prev=19,r.t1=r.catch(5),s=!0,u=r.t1;case 23:r.prev=23,r.prev=24,l||null==c.return||c.return();case 26:if(r.prev=26,!s){r.next=29;break}throw u;case 29:return r.finish(26);case 30:return r.finish(23);case 31:case"end":return r.stop()}},o,null,[[5,19,23,31],[24,,26,30]])}function d(e){return r.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e;case 2:case"end":return n.stop()}},a)}function f(e,n){return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.newlineKind;case 2:return t.delegateYield(e,"t0",3);case 3:return t.next=5,n.newlineKind;case 5:case"end":return t.stop()}},l)}e.withIndent=s,e.newlineGroup=u,e.prependToIterableIfHasItems=c,e.toPrintItemIterable=d,e.surroundWithNewLines=f,e.parseJsLikeCommentLine=function(e){var n=function(){for(var n=0;n<e.length;n++)if("/"!==e[n])return n;return e.length}(),t=" "===e[n]?n+1:n,i=e.substring(t).trimRight();return"//"+e.substring(0,n)+(i.length>0?" ".concat(i):"")},e.createInfo=function(e){return{kind:n.PrintItemKind.Info,name:e}}}(n.parserHelpers||(n.parserHelpers={}));var g=n.parserHelpers.withIndent;!function(e){var t=r.mark(o),i=r.mark(a);function o(e){return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=new h(e),t.next=3,{kind:n.PrintItemKind.Condition,name:"indentIfStartOfLine",condition:n.conditionResolvers.isStartOfNewLine,true:g(e),false:e};case 3:case"end":return t.stop()}},t)}function a(e){return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=new h(e),t.next=3,{kind:n.PrintItemKind.Condition,name:"withIndentIfStartOfLineIndented",condition:function(e){return e.writerInfo.lineStartIndentLevel>e.writerInfo.indentLevel},true:g(e),false:e};case 3:case"end":return t.stop()}},i)}e.newlineIfHangingSpaceOtherwise=function(e){var t=e.context,i=e.startInfo,r=e.endInfo,o=e.spaceChar,a=void 0===o?" ":o;return{kind:n.PrintItemKind.Condition,name:"newLineIfHangingSpaceOtherwise",condition:function(e){return n.conditionResolvers.isHanging(e,i,r)},true:[t.newlineKind],false:[a]}},e.newlineIfMultipleLinesSpaceOrNewlineOtherwise=function(e){var t=e.context,i=e.startInfo,r=e.endInfo;return{name:"newlineIfMultipleLinesSpaceOrNewlineOtherwise",kind:n.PrintItemKind.Condition,condition:function(e){return n.conditionResolvers.isMultipleLines(e,i,r||e.writerInfo,!1)},true:[t.newlineKind],false:[n.Signal.SpaceOrNewLine]}},e.singleIndentIfStartOfLine=function(){return{kind:n.PrintItemKind.Condition,name:"singleIndentIfStartOfLine",condition:n.conditionResolvers.isStartOfNewLine,true:[n.Signal.SingleIndent]}},e.indentIfStartOfLine=o,e.withIndentIfStartOfLineIndented=a,e.forceReevaluationOnceResolved=function(e){return{kind:n.PrintItemKind.Condition,name:"forceReevaluationOnceInfoResolved",condition:function(n){return null==n.getResolvedInfo(e)&&void 0}}}}(n.conditions||(n.conditions={}));var m=function(){function e(){o(this,e)}return a(e,[{key:"log",value:function(e){console.log(e)}},{key:"warn",value:function(e){console.warn(e)}},{key:"error",value:function(e){console.error(e)}}]),e}(),v=function(){function e(n){o(this,e),this.options=n,this.singleIndentationText=this.options.useTabs?"\t":" ".repeat(n.indentWidth),this.state={currentLineColumn:0,currentLineNumber:0,lastLineIndentLevel:0,indentLevel:0,indentText:"",expectNewLineNext:!1,items:[],indentStates:[],ignoreIndent:!1}}return a(e,[{key:"onNewLine",value:function(e){null!=this.fireOnNewLine&&f("Cannot call ".concat("onNewLine"," multiple times.")),this.fireOnNewLine=e}},{key:"getState",value:function(){return e.cloneState(this.state)}},{key:"setState",value:function(n){this.state=e.cloneState(n)}},{key:"singleIndent",value:function(){this.write(this.singleIndentationText)}},{key:"write",value:function(e){this.validateText(e),this.baseWrite(e)}},{key:"validateText",value:function(e){"\n"!==e&&"\r\n"!==e&&e.includes("\n")&&f("Printer error: The parser should write")}},{key:"baseWrite",value:function(e){var n="\n"===e[0]||"\r"===e[0]&&"\n"===e[1];if(this.expectNewLineNext&&(this.expectNewLineNext=!1,!n))return this.baseWrite(this.options.newlineKind),void this.baseWrite(e);0===this.currentLineColumn&&!n&&this.indentLevel>0&&!this.ignoreIndent&&(e=this.indentText+e);for(var t=0;t<e.length;t++)"\n"===e[t]?(this.currentLineColumn=0,this.currentLineNumber++,this.lastLineIndentLevel=this.indentLevel,this.fireOnNewLine()):(0===this.currentLineColumn&&(this.lastLineIndentLevel=this.indentLevel),this.currentLineColumn++);this.state.items.push(e)}},{key:"startIndent",value:function(){this.indentLevelStates.push(this.indentLevel),this.indentLevel++}},{key:"finishIndent",value:function(){var e=this.indentLevelStates.pop();if(null==e)return f("For some reason ".concat("finishIndent"," was called without a corresponding ","startIndent","."));this.indentLevel=e}},{key:"startIgnoringIndent",value:function(){this.ignoreIndent=!0}},{key:"finishIgnoringIndent",value:function(){this.ignoreIndent=!1}},{key:"markExpectNewLine",value:function(){this.expectNewLineNext=!0}},{key:"getLineStartIndentLevel",value:function(){return this.lastLineIndentLevel}},{key:"getIndentationLevel",value:function(){return this.indentLevel}},{key:"getLineStartColumnNumber",value:function(){return this.singleIndentationText.length*this.lastLineIndentLevel}},{key:"getLineColumn",value:function(){return 0===this.currentLineColumn?this.indentText.length:this.currentLineColumn}},{key:"getLineNumber",value:function(){return this.currentLineNumber}},{key:"toString",value:function(){return this.items.join("")}},{key:"currentLineColumn",get:function(){return this.state.currentLineColumn},set:function(e){this.state.currentLineColumn=e}},{key:"currentLineNumber",get:function(){return this.state.currentLineNumber},set:function(e){this.state.currentLineNumber=e}},{key:"lastLineIndentLevel",get:function(){return this.state.lastLineIndentLevel},set:function(e){this.state.lastLineIndentLevel=e}},{key:"expectNewLineNext",get:function(){return this.state.expectNewLineNext},set:function(e){this.state.expectNewLineNext=e}},{key:"indentLevel",get:function(){return this.state.indentLevel},set:function(e){this.indentLevel!==e&&(this.state.indentLevel=e,this.state.indentText=this.singleIndentationText.repeat(e),0===this.currentLineColumn&&(this.lastLineIndentLevel=e))}},{key:"indentText",get:function(){return this.state.indentText}},{key:"ignoreIndent",get:function(){return this.state.ignoreIndent},set:function(e){this.state.ignoreIndent=e}},{key:"indentLevelStates",get:function(){return this.state.indentStates}},{key:"items",get:function(){return this.state.items}}],[{key:"cloneState",value:function(e){return{currentLineColumn:e.currentLineColumn,currentLineNumber:e.currentLineNumber,lastLineIndentLevel:e.lastLineIndentLevel,expectNewLineNext:e.expectNewLineNext,indentLevel:e.indentLevel,indentText:e.indentText,items:i(e.items),indentStates:i(e.indentStates),ignoreIndent:e.ignoreIndent}}}]),e}(),w=Symbol("Thrown to exit when down a depth.");function b(e,t){var i,r,o=new v(t),a=new Map,l=new Map,s=new Map,u=0,c=0,f=0;return o.onNewLine(function(){i=void 0}),p(e),o.toString();function p(e){c=0;var n=!0,t=!1,i=void 0;try{for(var r,o=e[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){var a=r.value,l=c;g(a),c=l+1}}catch(s){t=!0,i=s}finally{try{n||null==o.return||o.return()}finally{if(t)throw i}}}function g(e){try{(function(e){null!=i&&l(i);var n=!0,t=!1,r=void 0;try{for(var o,a=s.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0)l(o.value)}catch(d){t=!0,r=d}finally{try{n||null==a.return||a.return()}finally{if(t)throw r}}function l(n){u>n.minDepthFound||(u<n.minDepthFound?(n.minDepthChildIndex=c,n.minDepthFound=u,n.uncomittedItems.push(e)):c>n.minDepthChildIndex&&(n.minDepthChildIndex=c,n.uncomittedItems.push(e)))}})(e),"number"===typeof e?function(e){switch(e){case n.Signal.ExpectNewLine:o.markExpectNewLine();break;case n.Signal.NewLine:m(e);break;case n.Signal.SpaceOrNewLine:if(y(1)){var r=i;null==r||r.newlineGroupDepth>=f?o.write(t.newlineKind):null!=i&&b(i)}else m(e),o.write(" ");break;case n.Signal.StartIndent:o.startIndent();break;case n.Signal.FinishIndent:o.finishIndent();break;case n.Signal.StartNewlineGroup:f++;break;case n.Signal.FinishNewLineGroup:f--;break;case n.Signal.SingleIndent:o.singleIndent();break;case n.Signal.StartIgnoringIndent:o.startIgnoringIndent();break;case n.Signal.FinishIgnoringIndent:o.finishIgnoringIndent();break;default:d(e)}}(e):"string"===typeof e?function(e){var n="\n"===e||"\r\n"===e;if(!n&&e.includes("\n"))throw new Error("Praser error: Cannot parse text that includes newlines. Newlines must be in their own string.");!n&&null!=i&&y(e.length)?b(i):o.write(e)}(e):e.kind===n.PrintItemKind.RawString?(g=e,null!=i&&y(function(){var e=g.text.indexOf("\n");return-1===e?g.text.length:"\r"===g.text[e-1]?e-1:e}())?b(i):o.baseWrite(g.text)):e.kind===n.PrintItemKind.Condition?function(e){var n=function e(n,t){if("object"===typeof n.condition){var i=a.get(n.condition);if(null==i){if(!s.has(n)){var r=x(t);r.name=n.name,s.set(n,r)}}else{var o=s.get(n);null!=o&&(s.delete(n),b(o))}return i}if(n.condition instanceof Function){var u=n.condition({getResolvedCondition:function(n,i){var r=e(n,t);return null==r?i:r},writerInfo:S(),getResolvedInfo:function(e){return function(e){var n=l.get(e);if(null==n&&!s.has(e)){var i=x(t);i.name=e.name,s.set(e,i)}return n}(e)}});return null!=u&&a.set(n,u),u}return d(n.condition)}(e,e);!function(e){var n=u;u++;try{e()}finally{u=n}}(function(){n?e.true&&(!(e.true instanceof h)&&L()&&(e.true=new h(e.true)),p(e.true)):e.false&&(!(e.false instanceof h)&&L()&&(e.false=new h(e.false)),p(e.false))})}(e):e.kind===n.PrintItemKind.Info?function(e){l.set(e,S());var n=s.get(e);null!=n&&(s.delete(e),b(n))}(e):d(e)}catch(v){if(v!==w||null==r||u!==r.minDepthFound)throw v;I(r)}var g}function m(e){null!=i&&f>i.newlineGroupDepth||(i=x(e))}function b(e){if(u!==e.minDepthFound)throw r=e,w;I(e)}function I(e){var n=i===e;o.setState(e.writerState),i=n?void 0:e.possibleNewLineSavePoint,s=e.lookAheadSavePoints,c=e.childIndex,f=e.newlineGroupDepth,n&&o.write(t.newlineKind);var r=n?1:0;c+=r;for(var a=r;a<e.uncomittedItems.length;a++){var l=c;g(e.uncomittedItems[a]),c=l+1}}function S(){return{lineStartIndentLevel:o.getLineStartIndentLevel(),lineStartColumnNumber:o.getLineStartColumnNumber(),lineNumber:o.getLineNumber(),columnNumber:o.getLineColumn(),indentLevel:o.getIndentationLevel()}}function L(){return null!=i||s.size>0}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return o.getLineColumn()+1+e>t.maxWidth}function x(e){return{childIndex:c,newlineGroupDepth:f,writerState:o.getState(),possibleNewLineSavePoint:i,uncomittedItems:[e],minDepthFound:u,minDepthChildIndex:c,lookAheadSavePoints:new Map(s)}}}n.CliLoggingEnvironment=m,n.formatFileText=function(e){var n=e.filePath,t=e.fileText,i=e.plugins,r=function(){if(0===i.length)return f("Formatter had zero plugins to format with. Did you mean to install or provide one such as dprint-plugin-typescript?");var e=!0,r=!1,o=void 0;try{for(var a,l=i[Symbol.iterator]();!(e=(a=l.next()).done);e=!0){var s=a.value;if(s.shouldParseFile(n,t))return s}}catch(u){r=!0,o=u}finally{try{e||null==l.return||l.return()}finally{if(r)throw o}}return f("Could not find a plugin that would parse the file at path: ".concat(n))}(),o=r.parseFile(n,t);if(!o)return e.fileText;var a=r.getConfiguration();return b(o,{newlineKind:"auto"===a.newlineKind?p(t):a.newlineKind,maxWidth:a.lineWidth,indentWidth:a.indentWidth,useTabs:a.useTabs})},n.getFileExtension=function(e){var n=e.lastIndexOf(".");return-1===n?"":e.substring(n)},n.makeIterableRepeatable=function(e){return e instanceof h?e:new h(e)},n.resolveConfiguration=function(e){e=Object.assign({},e);var n=[],t={lineWidth:i("lineWidth",c.lineWidth,r),indentWidth:i("indentWidth",c.indentWidth,r),useTabs:i("useTabs",c.useTabs,function(e,t){return"boolean"===typeof t||(n.push({propertyName:e,message:"Expected the configuration for '".concat(e,"' to be a boolean, but its value was: ").concat(t)}),!1)}),newlineKind:function(){var t=e.newlineKind;switch(delete e.newlineKind,t){case"auto":return"auto";case"crlf":return"\r\n";case"lf":return"\n";case null:case void 0:return c.newlineKind;case"system":return"\r\n"===u.EOL?"\r\n":"\n";default:return n.push({propertyName:"newlineKind",message:"Unknown configuration specified for '".concat("newlineKind","': ").concat(t)}),c.newlineKind}}()};return function(){for(var t in e)"projectType"!==t&&"plugins"!==t&&n.push({propertyName:t,message:"Unexpected property in configuration: ".concat(t)})}(),{config:t,diagnostics:n};function i(n,t,i){var r=e[n];return null!=r&&i(n,r)||(r=t),delete e[n],r}function r(e,t){return"number"===typeof t||(n.push({propertyName:e,message:"Expected the configuration for '".concat(e,"' to be a number, but its value was: ").concat(t)}),!1)}},n.resolveNewLineKindFromText=p,n.version="0.4.2"},28:function(e,n,t){e.exports=t(77)},33:function(e,n,t){},74:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t.n(i),o=t(25),a=t.n(o),l=(t(33),t(4)),s=t(5),u=t(9),c=t(8),d=t(6),f=t(10),h=t(15),p=t(12),g=t(13),m=t(26);function v(e){var n=e.backgroundColor;return r.a.createElement("div",{className:"verticallyCenter horizontallyCenter fillHeight",style:{backgroundColor:n}},r.a.createElement(m.BeatLoader,{color:"#fff",loading:!0,size:25}))}var w=function(e){function n(e){var i;Object(l.a)(this,n),(i=Object(u.a)(this,Object(c.a)(n).call(this,e))).editor=void 0,i.lastScrollTop=0,i.state={editorComponent:void 0},i.editorDidMount=i.editorDidMount.bind(Object(d.a)(i));var r=Promise.all([t.e(0),t.e(6)]).then(t.t.bind(null,299,7));return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,352)).then(function(e){e.languages.typescript.typescriptDefaults.setCompilerOptions({noLib:!0,target:e.languages.typescript.ScriptTarget.ESNext}),e.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSyntaxValidation:!0,noSemanticValidation:!0}),e.editor.defineTheme("dprint-theme",{base:"vs-dark",inherit:!0,rules:[],colors:{"editorRuler.foreground":"#283430"}}),r.then(function(e){i.setState({editorComponent:e.default})}).catch(function(e){console.log(e),i.setState({editorComponent:!1})})}).catch(function(e){console.log(e),i.setState({editorComponent:!1})}),i}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return this.updateScrollTop(),r.a.createElement("div",{id:"codeEditor"},this.getEditor())}},{key:"getEditor",value:function(){var e=this;return null==this.state.editorComponent?r.a.createElement(v,{backgroundColor:"#1e1e1e"}):!1===this.state.editorComponent?r.a.createElement("div",{className:"errorMessage"},"Error loading code editor. Please refresh the page to try again."):r.a.createElement(this.state.editorComponent,{width:"100%",height:"100%",value:this.props.text,theme:"dprint-theme",language:"typescript",onChange:function(n){return e.props.onChange&&e.props.onChange(n)},editorDidMount:this.editorDidMount,options:{automaticLayout:!0,renderWhitespace:"all",readOnly:this.props.readonly||!1,minimap:{enabled:!1},quickSuggestions:!1,wordBasedSuggestions:!1,rulers:[this.props.lineWidth-1]}})}},{key:"editorDidMount",value:function(e){var n=this;this.editor=e,this.editor.onDidChangeModelContent(function(){n.props.readonly&&n.editor.setPosition({column:1,lineNumber:1})}),this.editor.onDidScrollChange(function(e){e.scrollTopChanged&&n.props.onScrollTopChange&&n.props.onScrollTopChange(e.scrollTop)})}},{key:"updateScrollTop",value:function(){var e=this;null!=this.editor&&this.lastScrollTop!==this.props.scrollTop&&setTimeout(function(){e.editor.setScrollTop(e.props.scrollTop),e.lastScrollTop=e.props.scrollTop},0)}}]),n}(r.a.Component),b=t(11);t(74);function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}var S=["maintain","whenNotSingleLine","always","preferNone"],L=["maintain","sameLine","nextLine","nextLineIfHanging"],y=["maintain","sameLine","nextLine"],x=["maintain","sameLine","nextLine"],C=["never","always","onlyMultiLine"],k=["force","maintain","preferNone"],N=["newline","blankline","maintain"],T=function(e){function n(){return Object(l.a)(this,n),Object(u.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"configuration"},r.a.createElement(O,{title:"Line width"},this.getNumberConfig("lineWidth")),r.a.createElement(O,{title:"Indent width"},this.getNumberConfig("indentWidth")),r.a.createElement(O,{title:"Use tabs"},this.getBooleanConfig("useTabs")),r.a.createElement(O,{title:"Semicolons"},this.getBooleanConfig("semiColons")),r.a.createElement(O,{title:"Single quotes"},this.getBooleanConfig("singleQuotes")),r.a.createElement(O,{title:"Use braces"},this.getSelectForConfig("useBraces",S)),r.a.createElement(O,{title:"Brace position"},this.getSelectForConfig("bracePosition",L)),r.a.createElement(O,{title:"Single body position"},this.getSelectForConfig("singleBodyPosition",x)),r.a.createElement(O,{title:"Next control flow position"},this.getSelectForConfig("nextControlFlowPosition",y)),r.a.createElement(O,{title:"Trailing commas"},this.getSelectForConfig("trailingCommas",C)),r.a.createElement(O,{title:"Force multi-line arguments"},this.getBooleanConfig("forceMultiLineArguments")),r.a.createElement(O,{title:"Force multi-line parameters"},this.getBooleanConfig("forceMultiLineParameters")),r.a.createElement(O,{title:"Arrow Function - Use parentheses"},this.getSelectForConfig("arrowFunctionExpression.useParentheses",k)),r.a.createElement(O,{title:"Enum member spacing"},this.getSelectForConfig("enumDeclaration.memberSpacing",N)))}},{key:"getBooleanConfig",value:function(e){var n=this,t=this.props.config;return r.a.createElement("input",{type:"checkbox",checked:t[e],onChange:function(){return n.updateConfig(Object(b.a)({},e,!t[e]))}})}},{key:"getSelectForConfig",value:function(e,n){var t=this,i=this.props.config;return r.a.createElement("select",{value:i[e],onChange:function(n){return t.updateConfig(Object(b.a)({},e,n.target.value))}},n.map(function(e,n){return r.a.createElement("option",{key:n,value:e},e)}))}},{key:"getNumberConfig",value:function(e){var n=this,t=this.props.config;return r.a.createElement("input",{type:"number",inputMode:"numeric",value:t[e],onChange:function(t){var i=Math.max(0,Math.round(t.target.valueAsNumber));n.updateConfig(Object(b.a)({},e,i))}})}},{key:"updateConfig",value:function(e){this.props.onUpdateConfig(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(t,!0).forEach(function(n){Object(b.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},this.props.config,{},e))}}]),n}(r.a.Component),O=function(e){function n(){return Object(l.a)(this,n),Object(u.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"configurationItem"},r.a.createElement("label",null,this.props.title,":",this.props.children))}}]),n}(r.a.Component);function E(e){return r.a.createElement("a",{id:e.id,href:e.url,rel:"noopener noreferrer"},e.text)}var P=t(14),j=function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,[{key:"getUrlInfo",value:function(){var e=document.location.hash||"";return{text:function(){var n=/code\/([^\/]+)/.exec(e);if(null==n||2!==n.length)return"";try{return F(n[1])}catch(t){return console.error(t),""}}(),config:function(){var n=/config\/([^\/]+)/.exec(e);if(null==n||2!==n.length)return{lineWidth:80};try{return JSON.parse(F(n[1]))}catch(t){return console.error(t),{lineWidth:80}}}()}}},{key:"updateUrl",value:function(e){var n=e.text,t=e.config;window.history.replaceState(void 0,"","#code/".concat(Object(P.compressToEncodedURIComponent)(n),"/config/").concat(Object(P.compressToEncodedURIComponent)(JSON.stringify(t))))}}]),e}();function F(e){return Object(P.decompressFromEncodedURIComponent)(e.trim())||""}t(75),t(76);var W=new j,R={error:function(){},log:function(){},warn:function(){}},D=function(e){function n(e){var t;Object(l.a)(this,n),(t=Object(u.a)(this,Object(c.a)(n).call(this,e))).lastUpdateTimeout=void 0;var i=W.getUrlInfo(),r=i.text,o=i.config,a=t.getResolvedConfiguration(o),s={lineWidth:a.lineWidth,indentWidth:a.indentWidth,useTabs:a.useTabs,semiColons:a["breakStatement.semiColon"],singleQuotes:a.singleQuotes,trailingCommas:a["tupleType.trailingCommas"],useBraces:a["ifStatement.useBraces"],bracePosition:a["arrowFunctionExpression.bracePosition"],singleBodyPosition:a["ifStatement.singleBodyPosition"],nextControlFlowPosition:a["ifStatement.nextControlFlowPosition"],forceMultiLineArguments:a["callExpression.forceMultiLineArguments"],forceMultiLineParameters:a["functionDeclaration.forceMultiLineParameters"],"enumDeclaration.memberSpacing":a["enumDeclaration.memberSpacing"],"arrowFunctionExpression.useParentheses":a["arrowFunctionExpression.useParentheses"]};return t.state={text:r,formattedText:t.formatText(r,s),scrollTop:0,config:s},t.onConfigUpdate=t.onConfigUpdate.bind(Object(d.a)(t)),t.onTextChange=t.onTextChange.bind(Object(d.a)(t)),t.onScrollTopChange=t.onScrollTopChange.bind(Object(d.a)(t)),t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{split:"horizontal",defaultSize:50,allowResize:!1},r.a.createElement("header",{className:"appHeader"},r.a.createElement("h1",{id:"title"},"dprint - Playground"),r.a.createElement("div",{id:"headerRight"},r.a.createElement("a",{href:"/"},"Overview"),r.a.createElement("a",{href:"/playground"},"Playground"),r.a.createElement(E,{url:"https://github.com/dsherret/dprint",text:"View on GitHub"}))),r.a.createElement(h.a,{split:"vertical",minSize:50,defaultSize:200,allowResize:!1},r.a.createElement(T,{config:this.state.config,onUpdateConfig:this.onConfigUpdate}),r.a.createElement(h.a,{split:"vertical",minSize:50,defaultSize:"50%",allowResize:!1},r.a.createElement(w,{onChange:this.onTextChange,text:this.state.text,lineWidth:this.state.config.lineWidth||80,onScrollTopChange:this.onScrollTopChange,scrollTop:this.state.scrollTop}),r.a.createElement(w,{text:this.state.formattedText,readonly:!0,lineWidth:this.state.config.lineWidth||80,onScrollTopChange:this.onScrollTopChange,scrollTop:this.state.scrollTop})))))}},{key:"onConfigUpdate",value:function(e){this.setState({config:e,formattedText:this.getFormattedText(e)}),this.updateUrl({text:this.state.text,config:e})}},{key:"onTextChange",value:function(e){var n=this;null!=this.lastUpdateTimeout&&clearTimeout(this.lastUpdateTimeout),this.setState({text:e}),this.lastUpdateTimeout=setTimeout(function(){n.setState({formattedText:n.getFormattedText()}),n.updateUrl({text:e,config:n.state.config})},250)}},{key:"updateUrl",value:function(e){W.updateUrl(e)}},{key:"getFormattedText",value:function(e){return this.formatText(this.state.text,e||this.state.config)}},{key:"onScrollTopChange",value:function(e){this.setState({scrollTop:e})}},{key:"formatText",value:function(e,n){try{var t=new g.TypeScriptPlugin(n),i=Object(p.resolveConfiguration)({}).config;return t.initialize({environment:R,globalConfig:i}),Object(p.formatFileText)({filePath:"/file.ts",fileText:e,plugins:[t]})}catch(r){return r.toString()}}},{key:"getResolvedConfiguration",value:function(e){try{return new g.TypeScriptPlugin(e).getConfiguration()}catch(n){return console.error(n),new g.TypeScriptPlugin({lineWidth:80}).getConfiguration()}}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,3,5]]]);
//# sourceMappingURL=main.d18cce66.chunk.js.map