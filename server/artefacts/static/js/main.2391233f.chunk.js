(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},123:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"test",(function(){return E})),n.d(a,"home",(function(){return N}));var i=n(0),c=n.n(i),r=n(22),o=n.n(r),l=n(16),s=n(15),u=n(57),m=n.n(u),f=n(4),d=n.n(f),h=n(2),p=n(58),v=n(13);n(32),n(59);var b={isFetching:!1,isAuthed:!1,error:""};function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n={GET_USER:function(){return Object(h.a)({},e,{isFetching:!0})},GET_USER_FAILURE:function(){return Object(h.a)({},e,{isFetching:!1,error:t.error})},GET_USER_SUCCESS:function(){return Object(h.a)({},e,{isFetching:!1,error:"",userInfo:t.response})}};return t.type&&n[t.type]?n[t.type]():e}var g=n(17);function O(e,t){return{type:"".concat(e).concat({success:"_SUCCESS",failure:"_FAILURE"}[t])}}var j={isFetching:!0,error:""};var y=function(e){var t=e.actionName,n=e.additionalActions,a=e.initialState,i=void 0===a?j:a,c=e.shouldMergeDefaultStates,r=void 0!==c&&c?Object(h.a)({},j,{},i):i;return function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,i=arguments.length>1?arguments[1]:void 0,c=n?n(a,i):{},o=Object(h.a)((e={},Object(g.a)(e,t,(function(){return Object(h.a)({},a,{isFetching:!0})})),Object(g.a)(e,O(t,"failure").type,(function(){return Object(h.a)({},a,{isFetching:!1,error:i.error})})),Object(g.a)(e,O(t,"success").type,(function(){return Object(h.a)({},a,{error:"",isFetching:!1,response:i.response})})),e),c);return i.type&&o[i.type]?o[i.type]():a}}({actionName:"file",shouldMergeDefaultStates:!0,initialState:{query:""},additionalActions:function(e,t){return{SET_QUERY_RESULTS:function(){return Object(h.a)({},e,{files:t.files})}}}});function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"SET_QUERY_RESULTS",files:e}}var N=y,w=Object(v.e)(Object(v.c)(Object(h.a)({},a)),Object(v.d)(Object(v.a)(p.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),F=n(11),k=n(5);n(103);var _=function(e){var t=e.event,n=e.returnData,a=void 0===n?{}:n,r=e.placeholder,o=void 0===r?"Enter value":r,l=Object(i.useState)(""),s=Object(k.a)(l,2),u=s[0],m=s[1],f=Object(i.useState)(!1),d=Object(k.a)(f,2),p=d[0],v=d[1],b=Object(i.useState)(!1),E=Object(k.a)(b,2),g=E[0],O=E[1];return Object(i.useEffect)((function(){return v(""!==u)}),[u]),c.a.createElement("div",{className:"input-wrapper"},c.a.createElement("input",{className:"input",type:"text",disabled:g,placeholder:o,value:u,onChange:function(e){m(e.target.value)},onKeyDown:function(e){var n=e.keyCode,i=e.target.value;i&&13===n&&(t(Object(h.a)({value:i},a)),O(!0))}}),c.a.createElement("button",{className:"input-button ".concat(p&&!g&&"visible"),onClick:function(){t(Object(h.a)({value:u},a)),O(!0)}},"ok"))},x=n(24),C=n.n(x);n(104);function I(e){var t=e.push,n=e.file,a=e.event,i=(e.pathname,e.filteredFiles),r=(e.setSelectedFile,e.isDirectory),o=void 0!==r&&r,l={js:c.a.createElement("i",{class:"fab fa-js-square"}),css:c.a.createElement("i",{class:"fab fa-css3-alt"}),tpl:c.a.createElement("i",{class:"fab fa-html5"}),html:c.a.createElement("i",{class:"fab fa-html5"}),jsx:c.a.createElement("i",{class:"fab fa-react"}),default:c.a.createElement("i",{class:"fas fa-code"}),directory:c.a.createElement("i",{class:"fas fa-folder-open"})};return i.map((function(e,i){var r,s=e.slice(e.lastIndexOf(".")+1);r=o?l.directory:l[s]||l.default;var u=o?null:function(){return function(e){var t=e.index,n=e.file;(0,e.push)("/explore/".concat(n,"/").concat(t))}({index:i,file:n,push:t})};return c.a.createElement("p",{onClick:u,className:"file-item"},r," ",c.a.createElement("span",{className:"file-name"},e),o&&c.a.createElement(_,{placeholder:"Directory Name",returnData:{fileName:e},event:a}))}))}var R=function(){var e=Object(i.useState)([]),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)("Ask something to Rudra..."),o=Object(k.a)(r,2),s=o[0],u=o[1],m=Object(l.b)(),f=Object(F.g)(),h=Object(F.f)();return Object(i.useEffect)((function(){return function(e){var t=e.history,n=e.location,a=e.dispatch,i=e.setFiles,c=e.setMessage,r=e.setSelectedFile,o={hello:function(){d.a.trigger("go home"),c("Hey Man! Let's do this thing!"),i([])},"search for file *file":function(e){d.a.trigger("go home"),c("open ".concat(e)),X.emit("openFile",{operation:"open",file:e.split(" ")})},"select :fileIndex file":function(e){c("Selected ".concat(e))},"make new directory at *path":function(e){X.emit("make directory",{path:e.split(" "),operation:"list directory"})},"make new file at *path":function(e){X.emit("make file",{path:e.split(" "),operation:"list directory"})}};X.on("openFile",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.filteredFiles,l=e.file,s=t.push,u=n.pathname;o&&o.length?(c("I found ".concat(o.length," files:")),i(I({filteredFiles:o,setSelectedFile:r,push:s,pathname:u,file:l})),a(S(o))):(c("I couldn't find any file with this name: ".concat(l,".")),i([])),console.log(e)})),X.on("list directory",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d.a.trigger("go home");var o=e.filteredDirs,l=e.path,s=e.listFor,u=t.push,m=n.pathname;o&&o.length?(c("I found ".concat(o.length," directories:")),i(I({push:u,pathname:m,setSelectedFile:r,file:l,isDirectory:!0,filteredFiles:o,event:function(e){var t=e.value,n=e.fileName;X.emit("make ".concat(s),{operation:"create ".concat(s),dirName:"".concat(n).concat(t)}),c("Making new ".concat(s," '").concat(t,"'..."))}})),a(S(o))):(c("I couldn't find any directories with this name: ".concat(l,".")),i([]))})),X.on("create directory status",(function(e){var t=e.exceptions,n=e.dirName;c(t?"Error occured: ".concat(t):"Created new directory at ".concat(n,".")),i([])})),d.a.addCommands(o)}({setMessage:u,setFiles:a,dispatch:m,location:f,history:h})}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{className:"monk App-logo",src:C.a,alt:"logo"}),c.a.createElement("p",null,s,c.a.createElement("div",{className:"t-left"},n.length>0&&n))))},D=n(61),U=n.n(D),A=(n(106),n(107),n(108),n(109),n(110),n(111),n(112),n(113),n(114),n(115),n(35)),T=n.n(A);n(121),n(122),n(123),n(124),n(125),n(126);function L(){var e=Object(i.useState)(""),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(1),o=Object(k.a)(r,2),s=o[0],u=o[1],m=Object(l.c)((function(e){return e.home})).files[Object(F.h)().index];return Object(i.useEffect)((function(){return function(e){var t=e.selectedFilePath,n=e.setCursorPosition,a=e.setRenderedContent;window.Ace=T.a;var i={"add variable at line number :line with name *name":function(e,n){X.emit("addNewItem",{line:e,name:n,type:"variable",file:t})},"import library :libraryName":function(e){X.emit("import operation",{name:e,file:t,operation:"library import"})},"import file :fileName":function(e){X.emit("import operation",{name:e,file:t,operation:"file import"})}};X.on("renderFile",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.fileContent,i=e.cursorPosition,c=void 0===i?1:i;n(c),a(t)})),X.on("addNewVariable",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.fileContent;a(t)})),d.a.addCommands(i)}({selectedFilePath:m,setCursorPosition:u,setRenderedContent:a})}),[]),Object(i.useEffect)((function(){return X.emit("renderFile",{operation:"render",fileName:m})}),[]),Object(i.useEffect)((function(){return function(){return U.a.highlightAll()}}),[n]),c.a.createElement("div",{className:"editor-cont"},c.a.createElement("header",{className:"editor-header"},c.a.createElement("img",{className:"small-monk",src:C.a,alt:"logo"}),c.a.createElement("h1",null,"Rudra")),c.a.createElement("div",{className:"editor"},n&&c.a.createElement(T.a,{tabSize:2,width:"auto",fontSize:14,theme:"monokai",mode:"javascript",name:m,value:n,height:"calc(100vh - 62px)",cursorStart:s,enableLiveAutocompletion:!0,editorProps:{$blockScrolling:!0},onChange:function(e){return a(e)}})))}var M=function(e){var t=e.children,n=Object(F.g)(),a=Object(F.f)(),r=Object(i.useState)(!0),o=Object(k.a)(r,2),l=o[0],s=(o[1],Object(i.useState)({heading:"What is your problem?",listItems:["itme 1","itme 2","itme 3","itme 4"]})),u=Object(k.a)(s,2),m=u[0];return u[1],Object(i.useEffect)((function(){return function(e){var t=e.history,n=e.location,a={"go home":function(){"/"!==n.pathname&&t.go("/")},"show context":function(){"/"!==n.pathname&&t.go("/")},"make new directory atx *path":function(e){console.log("*****************************"),console.log(e),console.log("*****************************")}};d.a.removeCommands(Object.keys(a)),d.a.addCommands(a)}({history:a,location:n})}),[n]),c.a.createElement("div",null,t,l&&c.a.createElement("div",{className:"context-menu"},c.a.createElement("h2",{className:"context-title"},m.heading),c.a.createElement("ul",{className:"context-options"},m.listItems.map((function(e){return c.a.createElement("li",{key:e},e)})),c.a.createElement("li",null,c.a.createElement("input",{type:"text",className:"context-input",placeholder:"Item 1"})))))},P=function(){return c.a.createElement("div",{className:"app grid"},c.a.createElement("div",{className:"col"},c.a.createElement(M,null,c.a.createElement(F.c,null,c.a.createElement(F.a,{exact:!0,path:"/",component:R}),c.a.createElement(F.a,{path:"/explore/:query/:index",component:L})))))};n(127),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.d(t,"socket",(function(){return X}));var X=m()();d.a.setLanguage("en-IN"),d.a.start(),o.a.render(c.a.createElement(l.a,{store:w},c.a.createElement(s.a,null,P())),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,n){e.exports=n.p+"static/media/monk.188e60c7.png"},62:function(e,t,n){e.exports=n(128)},99:function(e,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.2391233f.chunk.js.map