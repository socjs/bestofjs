webpackJsonp([1],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t={githubProjects:e},n=d["default"](t);u.render(i["default"].createElement(s.Provider,{store:n},i["default"].createElement(l.ReduxRouter,null)),window.document.getElementById("app"))}var o=n(2),i=r(o),u=n(291),s=n(44),l=n(54),c=n(264),d=r(c);n(259);var f=n(260),p=r(f);p["default"]().then(function(e){return a(e)})},14:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},16:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=d[r.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](r.parts[o]);for(;o<r.parts.length;o++)a.parts.push(u(r.parts[o],t))}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(u(r.parts[o],t));d[r.id]={id:r.id,refs:1,parts:i}}}}function a(e){for(var t=[],n={},r=0;r<e.length;r++){var a=e[r],o=a[0],i=a[1],u=a[2],s=a[3],l={css:i,media:u,sourceMap:s};n[o]?n[o].parts.push(l):t.push(n[o]={id:o,parts:[l]})}return t}function o(){var e=document.createElement("style"),t=m();return e.type="text/css",t.appendChild(e),e}function i(){var e=document.createElement("link"),t=m();return e.rel="stylesheet",t.appendChild(e),e}function u(e,t){var n,r,a;if(t.singleton){var u=h++;n=_||(_=o()),r=s.bind(null,n,u,!1),a=s.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=i(),r=c.bind(null,n),a=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(),r=l.bind(null,n),a=function(){n.parentNode.removeChild(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}function s(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function l(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function c(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(a),o&&URL.revokeObjectURL(o)}var d={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=f(function(){return document.head||document.getElementsByTagName("head")[0]}),_=null,h=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p());var n=a(e);return r(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var u=n[i],s=d[u.id];s.refs--,o.push(s)}if(e){var l=a(e);r(l,t)}for(var i=0;i<o.length;i++){var s=o[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},32:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),o=a.createClass({displayName:"MainContent",render:function(){return a.createElement("div",r({id:"main-content"},this.props),this.props.children)}});e.exports=o},39:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),o=n(8),i=n(256),u=n(56),s=n(244),l=n(87),c=o.Link,d=a.createClass({displayName:"ProjectList",getDefaultProps:function(){return{showTags:!0,showDescription:!0,showStars:!0,showDelta:!0,showURL:!1}},onChangeText:function(e){this.props.actions.changeText(e.target.value)},render:function(){var e=this;return a.createElement("div",null,this.props.projects.map(function(t,n){return a.createElement(d.Item,r({},e.props,{project:t,maxStars:e.props.maxStars,key:t._id,index:n}))}))}});d.Item=a.createClass({displayName:"Item",render:function(){var e=this.props,t=e.project,n=e.index,r="/projects/"+t._id,o={container:{marginBottom:15,padding:0,backgroundColor:"white",verticalAlign:"top",border:"1px solid #cbcbcb",boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.16)"},starsBar:{height:3,backgroundColor:"#ffe082",width:(100*this.props.project.stars/this.props.maxStars).toFixed()+"%"},inner:{padding:"1em",position:"relative"},ranking:{position:"absolute",top:-10,left:15,color:"#ccc",fontSize:64,letterSpacing:-10},link:{fontSize:"1.2em",marginBottom:5,paddingLeft:20,zIndex:2,position:"relative",display:"block",textAlign:"center"}};return a.createElement("div",{className:"card"},a.createElement("div",{style:o.starsBar}),a.createElement("div",{style:o.inner},a.createElement("div",{style:o.ranking},n+1),a.createElement("div",{style:{"float":"right"}},this.props.showStars&&a.createElement("div",{style:{fontSize:"1.2em"}},a.createElement(l,{value:this.props.project.stars,icon:!0})),this.props.showDelta&&t.deltas.length>0&&a.createElement("div",{style:{fontSize:16}},a.createElement(u,{value:this.props.project.delta1,big:!0,icon:!0}))),a.createElement(c,{to:r,style:o.link},this.props.project.name),this.props.showURL&&this.props.project.url&&a.createElement("a",{style:{display:"block",marginTop:"1em"},href:this.props.project.url},this.props.project.url),this.props.showDescription&&a.createElement("p",{style:{zIndex:2,position:"relative"}},a.createElement(c,{to:r,className:"description"},this.props.project.description)),this.props.showTags&&a.createElement("div",{style:{marginBottom:5}},this.props.project.tags.map(function(e,t){return a.createElement(i,{tag:e,key:t})}))),a.createElement("div",null,t.deltas.length>0&&a.createElement(s,{data:t.deltas.slice(0,7)}),!1))}}),e.exports=d},56:function(e,t,n){"use strict";var r=n(2),a=r.createClass({displayName:"Delta",lightenDarkenColor:function(e,t){var n=!1;"#"==e[0]&&(e=e.slice(1),n=!0);var r=parseInt(e,16),a=(r>>16)+t;a>255?a=255:0>a&&(a=0);var o=(r>>8&255)+t;o>255?o=255:0>o&&(o=0);var i=(255&r)+t;return i>255?i=255:0>i&&(i=0),(n?"#":"")+(i|o<<8|a<<16).toString(16)},render:function(){var e=this.props,t=e.value,n=e.big,a=function(e){return 0===e?"=":0>e?"- "+Math.abs(e):"+ "+e},o=function(e){var t=["#f6faaa","#FEE08B","#FDAE61","#F46D43","#D53E4F","#9E0142"],r=["#555555","#555555","#555555","rgba(255, 255, 255, 0.7)","rgba(255, 255, 255, 0.8)","rgba(255, 255, 255, 0.9)"],a=Math.floor(e/10);return a=Math.min(a,r.length-1),{backgroundColor:t[a],borderTopColor:t[a],color:r[a],fontSize:n?"inherited":13,textAlign:"center"}},i=o(t);return 0>t&&(i.color="#cc0000"),i.padding="2px 5px",r.createElement("div",{style:i},a(t),this.props.icon&&0!==t&&r.createElement("i",{className:"fa fa-star-o",style:{fontSize:14,marginLeft:4}}))}});e.exports=a},85:function(e,t,n){"use strict";var r=n(2),a=r.createClass({displayName:"StarMeButton",render:function(){return r.createElement("a",{className:"btn",id:"star-button",href:this.props.url},r.createElement("i",{className:"fa fa-github-alt"})," ","Star on Github")}});e.exports=a},86:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var a=e,o=t,i=n;u=l=s=void 0,r=!1,null===a&&(a=Function.prototype);var u=Object.getOwnPropertyDescriptor(a,o);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(i)}var l=Object.getPrototypeOf(a);if(null===l)return void 0;e=l,t=o,n=i,r=!0}},s=n(2),l=r(s),c=function(e){function t(){a(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),i(t,[{key:"render",value:function(){return l["default"].createElement("div",{style:{margin:"1em 0",padding:"1em",backgroundColor:"#fff6f6",color:"#9f3a38",border:"1px solid #e0b4b4"}},this.props.text)}}]),t}(s.Component);t["default"]=c,e.exports=t["default"]},87:function(e,t,n){"use strict";var r=n(2),a=n(181),o=r.createClass({displayName:"Stars",render:function(){var e=this.props.value,t=e>1e3&&1e4>e?"0.0":"0";return r.createElement("span",null,a(e).format(t+" a"),this.props.icon&&r.createElement("i",{className:"fa fa-star-o",style:{fontSizeX:18,marginLeft:2}}))}});e.exports=o},242:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(){return{type:f}}function o(e){return{type:p,data:e}}function i(e){return function(t){t(a());var n="https://webtask.it.auth0.com/api/run/wt-mikeair-gmail_com-0/85801138b3a9d89112d0a04eef536d1f?webtask_no_cache=1";return s["default"].get(n+"&url="+e.repository).then(function(e){return t(o(e.data))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchReadme=i;var u=n(55),s=r(u),l="GET_ALL_PROJECTS_REQUEST";t.GET_ALL_PROJECTS_REQUEST=l;var c="GET_ALL_PROJECTS_SUCCESS";t.GET_ALL_PROJECTS_SUCCESS=c;var d="GET_ALL_PROJECTS_FAILURE";t.GET_ALL_PROJECTS_FAILURE=d;var f="GET_README_REQUEST";t.GET_README_REQUEST=f;var p="GET_README_SUCCESS";t.GET_README_SUCCESS=p;var m="GET_README_FAILURE";t.GET_README_FAILURE=m},243:function(e,t,n){"use strict";var r=n(2),a=n(32),o=n(85),i=n(39),u=n(56),s=n(87),l=r.createClass({displayName:"About",render:function(){var e=this.props.githubProjects,t=e.popularProjects.slice(0,1),n=this.props.staticContent,i=n.repo,u=n.projectName;return r.createElement(a,null,r.createElement(o,{url:i}),r.createElement("h1",null,"About"),r.createElement("h2",null,"Why ",u," ?"),r.createElement("p",null,"Javascript, HTML and CSS are advancing faster than ever, we are going fullspeed on innovation.",r.createElement("br",null),"Amazing open-source projects are released almost everyday."),r.createElement("ul",null,r.createElement("li",null,"How to stay up-to-date about the latest tendencies ?"),r.createElement("li",null,"How to check quickly the projects that really matter, ",r.createElement("i",{className:"special"},"now")," and not 6 months ago ?")),r.createElement("p",null,u," was creaded to address these questions."),r.createElement("h2",null,"Concept"),r.createElement("p",null,"Checking the number of stars on Github is a good way to check project popularity but it does not tell you when the stars have been added. "),r.createElement("p",null,u,' takes "snapshot" of Github stars every day, for more than 300 projects, to detect the trends over the last weeks.'),t.length>0&&r.createElement(c,{project:t[0]}),r.createElement("h2",null,"How it works"),r.createElement("p",null,"First, a list of projects related to the web platform (JavaScript of course but also HTML and CSS) is stored in a database."),r.createElement("p",null,"Everytime we find a new project, we add it to the database."),r.createElement("p",null,"Then everyday, an automatic task checks project data from Github, for every project stored and generates data consumed by the web application."),r.createElement("p",null,"The web application displays the total number of stars and their variation over the last days."),r.createElement("h2",null,"Do you want more projects ?"),r.createElement("p",null,'Rather than scanning all existing projects on Github, We decided to focus on a curated list of projets we find "interesting", based on our experience and on things we read on the internet.',r.createElement("br",null),r.createElement("p",null,"As a result, some great projects must be missing!"),r.createElement("p",null,"Do not hesitate to contact us (by creating an issue in the ",r.createElement("a",{href:i},"Github repository"),", for example) if you want to suggest projects to add.")),r.createElement("h2",null,"Show your support!"),r.createElement("p",null,"If you like the application, please star the project on ",r.createElement("a",{href:i},"Github"),"..."),r.createElement("p",null,"...we are all made of stars ",r.createElement("img",{src:"images/star.png",width:"16",height:"16",alt:"star"})," !"),r.createElement("p",null,"Thank you for your support!"))}}),c=r.createClass({displayName:"Example",render:function(){var e=this.props,t=e.project,n=e.maxStars;return r.createElement("div",null,r.createElement("h2",null,"An example"),r.createElement("p",null,"Here is the most popular project of the application (",t.name,")."),r.createElement(i,{projects:[t],maxStars:n,showStars:!0,showDelta:!0}),r.createElement("p",null,"At the top right corner:"),r.createElement("ul",null,r.createElement("li",null,r.createElement(s,{value:t.stars,icon:!0})," ","is the total number of stars on Github."),r.createElement("li",null,r.createElement("div",{style:{width:80,display:"inline-block"}},r.createElement(u,{value:t.delta1,icon:!0}))," ","is the number of stars added yesterday.")),r.createElement("p",null,"At the bottom:"),r.createElement("p",null,"The colored bar shows the stars added on Github over the last days, day by day."))}});e.exports=l},244:function(e,t,n){"use strict";var r=n(2),a=n(56),o=r.createClass({displayName:"DeltaBar",render:function(){var e=this.props.data;return r.createElement("div",null,r.createElement("p",{style:{margin:"0 1em 0.5em",fontSize:13}},1===e.length?"Stars added yesterday:":"Stars added during the last "+e.length+" days:"),r.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"}},e.map(function(e,t){return r.createElement(o.Item,{value:e,key:t})})))}});o.Item=r.createClass({displayName:"Item",render:function(){var e={width:"auto",display:"block",flex:"1"};return r.createElement("div",{style:e},r.createElement(a,{value:this.props.value}))}}),e.exports=o},245:function(e,t,n){"use strict";var r=n(2),a=r.createClass({displayName:"SearchText",render:function(){var e={color:"#bbb"};return r.createElement("span",null,r.createElement("i",{className:"fa fa-quote-left",style:e}),r.createElement("span",{style:{padding:"0 4px 0 2px",fontStyle:"italic"}},this.props.children),r.createElement("i",{className:"fa fa-quote-right",style:e}))}});e.exports=a},246:function(e,t,n){"use strict";var r=n(2),a=n(8),o=a.Link,i=n(32),u=n(39),s=n(86),l=n(85);n(415),n(414);var c=r.createClass({displayName:"Home",render:function(){var e=this.props.staticContent||"?",t=e.repo,n=this.props.githubProjects;return r.createElement(i,null,this.props.errorMessage&&r.createElement(s,{text:this.props.errorMessage}),r.createElement("h2",{style:{marginTop:0}},"Find the ",r.createElement("i",{className:"special"},"best")," components to build amazing web applications!"),r.createElement("p",{style:{marginBottom:"1em"}},r.createElement(l,{url:t}),"Check out the most popular open-source projects and the latest trends:"," ",r.createElement(o,{to:"/tags/framework"},"frameworks"),","," ",r.createElement(o,{to:"/tags/react"},"react tools"),","," ",r.createElement(o,{to:"/tags/cms-api"},"node.js CMS")," and many more... the best of JavaScript!"),n&&n.allProjects&&r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"box"},r.createElement("h3",{className:"with-comment"},"Most popular projects"),r.createElement("p",{className:"explanation"},"By total number of stars on Github"),r.createElement(u,{projects:n.popularProjects.slice(0,20),maxStars:n.maxStars,showStars:!0,showDelta:!1,showIndex:!0}))),r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"box"},r.createElement("h3",{className:"with-comment"},"Hot projects since yesterday"),r.createElement("p",{className:"explanation"},"By number of stars added yesterday on Github"),r.createElement(u,{projects:n.hotProjects.slice(0,20),maxStars:n.maxStars,showDelta:!0,showStars:!1,showIndex:!0})))))}});e.exports=c},247:function(e,t,n){"use strict";var r=n(2),a=n(8),o=a.History,i=r.createClass({displayName:"SearchForm",mixins:[o],getInitialState:function(){return{text:this.props.searchText}},componentWillReceivePropsX:function(e){this.loadData();var t=this.props.routes,n=t&&"search"==t[1].name;n||""!==e.searchText||this.setState({text:""})},componentDidMount:function(){this.emitChangeDelayed=_.debounce(this.emitChange,300)},loadData:function(){var e=this.props.params&&this.props.params.text;e&&this.props.searchText!==e&&this.setState({text:e})},handleChange:function(e){var t=e.target.value;this.setState({text:t}),this.emitChangeDelayed(t)},emitChange:function(e){e?this.history.pushState(null,"/search/"+e):this.history.pushState(null,"/")},render:function(){var e={boxSizing:"border-box",padding:"0.5em 1em",border:"3px solid #ddd",borderRadius:6,fontSize:"1em"};return r.createElement("div",{className:"ui input icon"},r.createElement("input",{type:"text",style:e,valueX:this.state.text,onChange:this.handleChange}),r.createElement("i",{className:"fa fa-search ui icon",style:{color:"#dddddd"}}))}});e.exports=i},248:function(e,t,n){"use strict";var r=n(2),a=(r.PropTypes,n(32)),o=n(39),i=n(257),u=r.createClass({displayName:"TagFilter",render:function(){var e=this.props.githubProjects.tagFilter,t=this.props.githubProjects.allProjects,n=t.filter(function(t){var n=_.pluck(t.tags,"code");return t.tags.length>0&&n.indexOf(e.code)>-1});return r.createElement(a,{className:"small"},e.name&&r.createElement("div",{style:{fontSize:18,marginBottom:20}},r.createElement(i,{tag:e}),r.createElement("span",{style:{marginLeft:10}},1===n.length?"Only one project for now":n.length+" projects")),n.length>0&&r.createElement(o,{projects:n,maxStars:n[0].stars,showDescription:!0,showURL:!0}))}});e.exports=u},249:function(e,t,n){"use strict";var r=n(2),a=n(32),o=n(39),i=n(245),u=r.createClass({displayName:"TextFilter",filterProject:function(e,t){var n=t.length>1?t:"^"+t,r=new RegExp(n,"i");if(r.test(e.name))return!0;if(t.length>2){if(r.test(e.description))return!0;if(r.test(e.repository))return!0;if(r.test(e.url))return!0}return!1},render:function(){var e=this,t=this.props.githubProjects.textFilter,n=this.props.githubProjects.allProjects,u=n.filter(function(n){return e.filterProject(n,t)}).slice(0,50);return r.createElement(a,{className:"small"},u.length>0?r.createElement("h3",null,"Results for ",r.createElement(i,null,t),":"," ",u.length," projects found."):r.createElement("div",null,"No project found for ",r.createElement(i,null,t)),u.length>0&&r.createElement(o,{projects:u,maxStars:u[0].stars,showDescription:!0,showURL:!0}))}});e.exports=u},250:function(e,t,n){"use strict";var r=n(2),a=n(1);n(410);var o=r.createClass({displayName:"Footer",render:function(){var e=this.props.staticContent,t=e.repo,n=e.projectName,o=this.props.lastUpdate;return r.createElement("div",{id:"footer"},r.createElement("p",null,n," is a project by ",r.createElement("a",{href:"http://michaelrambeau.com"},"Michael Rambeau")," made in Osaka."),r.createElement("p",null,"View on ",r.createElement("a",{href:t},"Github")),r.createElement("p",null,"Data updated from Github everyday. Last update: ",a(o).fromNow()),r.createElement("a",{href:"https://js.org",target:"_blank",title:"JS.ORG | JavaScript Community"},r.createElement("img",{src:"https://logo.js.org/dark_horz.png",width:"102",alt:"JS.ORG Logo"})))}});e.exports=o},251:function(e,t,n){"use strict";var r=n(2),a=n(8),o=a.IndexLink,i=n(247),u=n(253);n(411);var s=r.createClass({displayName:"Header",render:function(){return r.createElement("div",{id:"header"},r.createElement("div",{className:"container"},r.createElement("div",{id:"big-header",className:"header-row"},r.createElement("div",{className:"col-1"},r.createElement(u,null),r.createElement(o,{to:"/",className:"link-logo"},r.createElement("img",{src:"images/logo.png",alt:"bestof.js.org",width:"150"}))),r.createElement("div",{className:"col-2"},r.createElement(i,{searchText:this.props.searchText}))),r.createElement("div",{id:"small-header"},r.createElement(u,null),r.createElement(i,{searchText:this.props.searchText}))))}});e.exports=s},252:function(e,t,n){"use strict";var r=n(2),a=n(8),o=a.Link,i=a.IndexLink;n(416);var u=r.createClass({displayName:"Sidebar",render:function(){var e=this.props.tags;return r.createElement("div",{id:"menu"},r.createElement("div",{className:"ui vertical menu",style:{minHeight:28*e.length,marginBottom:20}},r.createElement(i,{to:"/",className:"item"},"HOME"),r.createElement(o,{to:"/about",className:"item"},"ABOUT"),r.createElement("div",{className:"item"},r.createElement("div",{className:"header"},"TAGS"),r.createElement(s,{tags:e,selectedTag:this.props.selectedTag}))))}});e.exports=u;var s=r.createClass({displayName:"TagMenu",render:function(){var e=this;return r.createElement("div",{className:"tag-menu"},this.props.tags.map(function(t){return r.createElement(o,{to:"/tags/"+t.code,key:t.code,tag:t,active:t.code===e.props.selectedTag.code,className:"tag-menu-item"+(e.props.active?" active":"")},t.name,r.createElement("span",{className:"counter"},t.counter))}))}})},253:function(e,t,n){"use strict";var r=n(2),a=r.createClass({displayName:"ToggleMenuButton",handleClick:function(e){e.preventDefault(),this.props.actions.toggleMenu()},render:function(){return r.createElement("a",{href:"#menu",id:"menuLink",className:"menu-link",onClick:this.handleClick},r.createElement("i",{className:"fa fa-bars"}))}});e.exports=a},254:function(e,t,n){"use strict";function r(e){var t=e.githubProjects.project;e.actions.fetchReadme(t)}var a=n(2),o=n(32),i=n(255);n(417);var u=a.createClass({displayName:"ProjectPage",componentWillMount:function(){r(this.props)},componentWillReceiveProps:function(e){e.id!==this.props.id&&r(e)},render:function(){var e=this.props.githubProjects.project;return a.createElement(o,{className:"project-page"},e._id&&a.createElement("div",null,e.tags.map(function(e){return a.createElement(i,{key:e.code,tag:e})}),a.createElement("h1",{style:{margin:"1rem 0"}},e.name),a.createElement("p",null,a.createElement("i",{className:"fa fa-quote-left icon"})," ",e.description," ",a.createElement("i",{className:"fa fa-quote-right icon"})),e.url&&a.createElement("p",null,"Website: ",a.createElement("a",{href:e.url},e.url)),a.createElement("p",null,"Github: ",a.createElement("a",{href:e.repository},e.repository)," ",e.stars," ",a.createElement("i",{className:"fa fa-star-o"})),a.createElement("div",{className:"readme",style:{margin:"1em 0"}},a.createElement("div",null,a.createElement("div",{className:"header"},a.createElement("i",{className:"fa fa-book icon"})," ","README"),a.createElement("div",{className:"body"},e.readme?a.createElement("div",null,a.createElement("div",{dangerouslySetInnerHTML:{__html:e.readme}})):a.createElement("div",{style:{textAlign:"center"}},a.createElement("p",{style:{color:"#aaa"}},"Loading README from Github..."),a.createElement("i",{className:"fa fa-book",style:{margin:"1em 0",fontSize:80,color:"#bbb"}}))),a.createElement("div",{className:"footer",style:{textAlign:"center"}},a.createElement("a",{className:"btn",href:e.repository},"View on Github"))))))}});e.exports=u},255:function(e,t,n){"use strict";var r=n(2),a=n(8),o=a.Link,i=r.createClass({displayName:"TagLabel",render:function(){var e=this.props.tag,t={counter:{marginLeft:10,padding:"0 5px",color:"#ccc",borderRadius:4,fontSize:14}};return r.createElement(o,{to:"tags",params:{id:e.code},key:e._id,className:"tag tag-compact"},r.createElement("span",null,e.name),r.createElement("span",{style:t.counter},e.counter))}});e.exports=i},256:function(e,t,n){"use strict";var r=n(2),a=n(8),o=a.Link,i=r.createClass({displayName:"TagLabel",render:function(){var e=this.props.tag;return r.createElement(o,{to:"/tags/"+e.code,key:e._id,className:"tag tag-compact"},r.createElement("span",null,e.name))}});e.exports=i},257:function(e,t,n){"use strict";var r=n(2),a=n(8),o=a.IndexLink;n(419);var i=r.createClass({displayName:"TagTitle",render:function(){var e=this.props.tag;return r.createElement(o,{className:"tag tag-title",to:"/"},r.createElement("span",{style:{display:"inline-block"}},e.name),!1,r.createElement("span",{className:"close-icon",style:{fontSize:22,marginLeft:5,display:"inline-block"}},"×"))}});e.exports=i},258:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=document.querySelectorAll(".nojs");Array.prototype.forEach.call(e,function(e){return e.classList.remove("nojs")}),n(412),n(413),n(418)}function i(e){return{githubProjects:e.githubProjects,staticContent:e.staticContent}}function u(e){return{actions:g.bindActionCreators(v,e)}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),l=a(s),c=n(252),d=a(c),f=n(251),p=a(f),m=n(250),_=a(m),h=n(44),y=n(242),v=r(y),g=n(22),M=l["default"].createClass({displayName:"App",componentWillMount:function(){o()},render:function(){var e=this.props,t=e.githubProjects,n=e.staticContent,r=e.actions;return l["default"].createElement("div",{id:"layout"},l["default"].createElement(d["default"],{tags:t.allTags,selectedTag:t.tagFilter}),l["default"].createElement("div",{id:"main"},l["default"].createElement(p["default"],{searchText:t.textFilter}),this.props.children&&l["default"].cloneElement(this.props.children,{githubProjects:t,staticContent:n,actions:r})),l["default"].createElement(_["default"],{staticContent:this.props.staticContent,lastUpdate:this.props.githubProjects.lastUpdate}))}});M.propTypes={children:l["default"].PropTypes.node},t["default"]=h.connect(i,u)(M),e.exports=t["default"]},259:function(e,t){"use strict";Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(void 0!==r&&null!==r){r=Object(r);for(var a=Object.keys(r),o=0,i=a.length;i>o;o++){var u=a[o],s=Object.getOwnPropertyDescriptor(r,u);void 0!==s&&s.enumerable&&(t[u]=r[u])}}}return t}})},260:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return e&&e.__esModule?e:{"default":e}}function o(){return l["default"].get("http://bestofjs-api-v1.divshot.io/projects.json").then(function(e){return new Promise(function(t){return t(i(e.data))})})}function i(e){var t={},n=e.projects,r=u(n),a=e.tags.map(function(e){return Object.assign({},e,{counter:r[e.code]})});a.forEach(function(e){return t[e.code]=e});var o=d.populateTagData(n,t),i=d.sortBy(o,"stars"),s={allProjects:o,allTags:a,tagsById:t,lastUpdate:e.date,popularProjects:i,hotProjects:d.sortBy(o.slice(0),"delta1"),maxStars:i.length>0?i[0].stars:0},l=Object.assign({},f,s);return l}function u(e){var t={};return e.forEach(function(e){e.tags.forEach(function(e){t[e]?t[e]++:t[e]=1})}),t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var s=n(55),l=a(s),c=n(262),d=r(c),f={loading:!0,allProjects:[],allTags:[],tagsById:null,popularProjects:[],hotProjects:[],lastUpdate:new Date,tagFilter:{code:"*"},textFilter:"",project:null};e.exports=t["default"]},261:function(e,t,n){"use strict";function r(){return{projectName:"bestof.js.org",repo:"https://github.com/michaelrambeau/bestofjs-webui"}}function a(e,t){if(!e)return u;switch(t.type){case"GET_README_SUCCESS":var n=e.project;return n.readme=t.data.readme,Object.assign({},e,{project:n});case"@@reduxReactRouter/routerDidChange":window.scrollTo(0,0);var r=t.payload.routes,a=r[r.length-1];if("tags/:id"===a.path){var o=t.payload.params.id;return Object.assign({},e,{tagFilter:e.tagsById[o]})}if("search/:text"===a.path){var i=t.payload.params.text;return Object.assign({},e,{textFilter:i})}if("projects/:id"===a.path){var s=function(){if(0===e.allProjects.length)return{v:e};var n=t.payload.params.id,r=e.allProjects.filter(function(e){return e._id===n});return{v:Object.assign({},e,{project:r.length?r[0]:null})}}();if("object"==typeof s)return s.v}return e;default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(54),i=n(22),u={loading:!0,allProjects:[],allTags:[],tagsById:null,popularProjects:[],hotProjects:[],lastUpdate:new Date,tagFilter:{code:"*"},textFilter:"",project:null},s=i.combineReducers({githubProjects:a,staticContent:r,router:o.routerStateReducer});t["default"]=s,e.exports=t["default"]},262:function(e,t){"use strict";function n(e,t){var n=arguments.length<=2||void 0===arguments[2]?"DESC":arguments[2];return e.sort(function(e,r){var a;return a=_.get(e,t)-_.get(r,t),a*((n="DESC")?-1:1)})}function r(e,t){var n=e.map(function(e){var n=e.tags.map(function(e){return t[e]});return Object.assign({},e,{tags:n})});return n}Object.defineProperty(t,"__esModule",{value:!0}),t.sortBy=n,t.populateTagData=r},263:function(e,t,n){"use strict";var r=n(2),a=n(8),o=a.Router,i=a.Route,u=a.IndexRoute,s=n(258),l=n(246),c=n(243),d=n(254),f=n(248),p=n(249),m=(n(86),r.createElement(o,null,r.createElement(i,{path:"/",component:s},r.createElement(u,{component:l}),r.createElement(i,{path:"home",component:l}),r.createElement(i,{path:"about",component:c}),r.createElement(i,{path:"projects/:id",component:d}),r.createElement(i,{path:"tags/:id",component:f}),r.createElement(i,{path:"search/:text",component:p}))));e.exports=m},264:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=v(h["default"],e);return t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=n(22),i=n(54),u=n(90),s=r(u),l=n(263),c=r(l),d=n(227),f=r(d),p=n(225),m=r(p),_=n(261),h=r(_),y=s["default"]({queryKey:!1}),v=o.compose(o.applyMiddleware(f["default"]),i.reduxReactRouter({routes:c["default"],history:y}),o.applyMiddleware(m["default"]()))(o.createStore);e.exports=t["default"]},265:function(e,t,n){t=e.exports=n(14)(),t.push([e.id,"#footer{margin:4em 0 2em;font-size:13px;text-align:center}#footer p{margin-bottom:1em}",""])},266:function(e,t,n){t=e.exports=n(14)(),t.push([e.id,"#menuLink{background-color:#e65100}#big-header{display:none}@media (min-width:450px){#big-header{display:flex;flex-direction:row}#big-header .col-1{display:flex;align-items:center}#big-header .link-logo{display:block}}#small-header{display:block}#small-header .ui.input{margin-left:55px}@media (min-width:450px){#small-header{display:none}}#header .container{max-width:800px;margin:0 auto;padding-top:8px}@media (max-width:1280px){#header .container{padding-left:10px;padding-right:20px}}.header-row{display:flex;flex-direction:row}.header-row .col-1{width:220px}.header-row .col-2{width:calc(100% - 220px)}@media screen and (min-width:660px){.header-row .col-1,.header-row .col-2{width:50%}}.ui.input{position:relative;display:flex}.ui.input input{outline:0;width:0;max-width:100%;flex:1 0 auto}.ui.input .ui.icon{flex:1 0 auto;font-size:24px;cursor:default;position:absolute;line-height:1.5;text-align:center;top:0;right:0;margin:0;height:100%;width:2.67142857em}",""]);
},267:function(e,t,n){t=e.exports=n(14)(),t.push([e.id,"#layout,#main{position:relative}.menu-link,.menu-link:focus,.menu-link:hover{color:#fff}#layout{padding-left:0}#menu{margin-left:-280px;width:280px;position:fixed;top:0;left:0;bottom:0;z-index:1000;overflow-y:auto;-webkit-overflow-scrolling:touch}@media screen and (min-width:900px){#layout{padding-left:280px;left:0}#menu{left:280px}#menuLink{display:none}}@media screen and (max-width:899px){#layout.active{position:relative;left:280px}}#header,.menu-link{position:fixed;top:0;z-index:10}#header{width:100%;background-color:#fff;height:55px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);padding:0 10px}.link-logo{margin-left:55px}@media screen and (min-width:900px){#header{width:calc(100% - 280px);padding:0}.link-logo{margin-left:0}.link-logo img{width:200px}}#content{padding:30px}#content h1{margin:0 0 20px;font-size:230%;font-weight:400}#layout.active #menu{left:280px;width:280px}#layout.active .menu-link{left:280px}#layout,#menu,.menu-link{-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;-ms-transition:all .2s ease-out;-o-transition:all .2s ease-out;transition:all .2s ease-out}.menu-link{display:block;left:0;font-size:24px;width:55px;line-height:55px;text-align:center;height:auto;padding:0;background-color:#e65100}",""])},268:function(e,t,n){t=e.exports=n(14)(),t.push([e.id,"body{font-size:16px;line-height:1.3333;color:#444;background-color:#ececec}a{color:#cc4700;text-decoration:none;transition:all .3s}a:hover{text-decoration:underline;color:#9e0142}html{font-family:Roboto,sans-serif}body,h1,h2,h3,h4,h5,h6{margin:0}h1,h2,h3{font-weight:400}h1{font-size:48px}h2{margin:1em 0 .8em}h3{font-size:22px;margin-bottom:.8em}h3.with-comment{margin-bottom:0}.explanation{margin:0 0 10px}.container{max-width:1000px;margin:0 auto;padding-top:80px}#main-content{padding:80px 8px 0;max-width:800px;margin:0 auto}#main-content.small{max-width:600px}ul{margin-top:0;padding-left:1.2em}p{margin:0 0 .5em}i.special{color:#d53e4f;font-weight:700}.divider{margin:1.5em 0;width:100%;height:1px;background-color:#ccc}",""])},269:function(e,t,n){t=e.exports=n(14)(),t.push([e.id,"#star-button{float:right}.btn{margin-left:10px;color:#fff;background-color:#e65100;padding:5px 10px;border-radius:6px;transition:all .3s}.btn:hover{text-decoration:none;color:#fff;background-color:#9e0142}",""])},270:function(e,t,n){t=e.exports=n(14)(),t.push([e.id,".row{display:flex;flex-direction:column}@media (min-width:600px){.row{flex-direction:row;margin:0 -.5em}.row .col-sm-6{width:50%;padding-right:.5rem;padding-left:.5rem}}",""])},271:function(e,t,n){t=e.exports=n(14)(),t.push([e.id,"#menu{background-color:#4d464e}.ui.vertical.menu a.item{display:block;position:relative;padding:.8em 1em;color:rgba(255,255,255,.95)}.ui.vertical.menu a.item.active,.ui.vertical.menu a.item:hover{background:rgba(255,255,255,.08);color:#fff;text-decoration:none}.ui.vertical.menu .item{padding:.8em 1em;border-bottom:1px solid rgba(255,255,255,.08)}.ui.vertical.menu .item,.ui.vertical.menu .ui.inverted.menu .item>a:not(.ui){background:0 0;color:rgba(255,255,255,.9)}.ui.vertical.menu .item>.header:not(.ui){margin:0 0 .5em;font-size:1em}.tag-menu{background-color:#4d464e}.tag-menu-item{display:block;padding:.2em 0;color:rgba(255,255,255,.7)}.tag-menu-item:hover{color:#fff;text-decoration:none}.tag-menu-item.active{color:#fff}.tag-menu-item .counter{float:right;color:#ccc}",""])},272:function(e,t,n){t=e.exports=n(14)(),t.push([e.id,".card,.readme{background-color:#fff}.card{margin-bottom:15px;padding:0;vertical-align:top;border:1px solid #cbcbcb;box-shadow:0 2px 5px 0 rgba(0,0,0,.16)}.description{display:block;margin:1em 0;color:#555}.description:hover{text-decoration:none;color:inherited}.project-page .icon{color:#999}.readme{border:1px solid #ccc}.readme .header{padding:.5em 1.5em;border-bottom:1px solid #ccc}.readme .body{padding:1.5em}.readme .footer{padding:1.5em;border-top:1px solid #ccc}.readme pre code{word-break:break-all}.readme h1{font-size:36px}.readme h2{font-size:28px}.readme h3{font-size:22px}.readme ol,.readme ul{padding-left:20px;font-size:13px}.readme img{max-width:100%}",""])},273:function(e,t,n){t=e.exports=n(14)(),t.push([e.id,".pure-table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #cbcbcb}.pure-table caption{color:#000;font:italic 85%/1 arial,sans-serif;padding:1em 0;text-align:center}.pure-table td,.pure-table th{border-left:1px solid #cbcbcb;border-width:0 0 0 1px;font-size:inherit;margin:0;overflow:visible;padding:.5em 1em}.pure-table td:first-child,.pure-table th:first-child{border-left-width:0}.pure-table thead{background-color:#e0e0e0;color:#000;text-align:left;vertical-align:bottom}.pure-table td{background-color:#fff}.pure-table-odd td,.pure-table-striped tr:nth-child(2n-1) td{background-color:#f2f2f2}.pure-table-bordered td{border-bottom:1px solid #cbcbcb}.pure-table-bordered tbody>tr:last-child>td{border-bottom-width:0}.pure-table-horizontal td,.pure-table-horizontal th{border-width:0 0 1px;border-bottom:1px solid #cbcbcb}.pure-table-horizontal tbody>tr:last-child>td{border-bottom-width:0}.pure-form input[type=text],.pure-form input[type=number],.pure-form input[type=search],.pure-form input[type=tel],.pure-form input[type=color],.pure-form input[type=password],.pure-form input[type=email],.pure-form input[type=url],.pure-form input[type=date],.pure-form input[type=month],.pure-form input[type=time],.pure-form input[type=datetime],.pure-form input[type=datetime-local],.pure-form input[type=week],.pure-form select,.pure-form textarea{padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px;vertical-align:middle;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}",""])},274:function(e,t,n){t=e.exports=n(14)(),t.push([e.id,".tag{background-color:#838383;color:#fff}.tag:hover{text-decoration:none;color:#fff;background-color:#555}.tag-title{display:inline-block;white-space:nowrap;line-height:1;vertical-align:baseline;margin:0 .14285714em;border-color:#e8e8e8;padding:.5833em .833em;border-radius:.28571429rem}.tag-compact{margin-right:5px;padding:5px 10px;border-radius:4px;background-color:#888}",""])},291:function(e,t,n){"use strict";e.exports=n(197)},410:function(e,t,n){var r=n(265);"string"==typeof r&&(r=[[e.id,r,""]]);n(16)(r,{});r.locals&&(e.exports=r.locals)},411:function(e,t,n){var r=n(266);"string"==typeof r&&(r=[[e.id,r,""]]);n(16)(r,{});r.locals&&(e.exports=r.locals)},412:function(e,t,n){var r=n(267);"string"==typeof r&&(r=[[e.id,r,""]]);n(16)(r,{});r.locals&&(e.exports=r.locals)},413:function(e,t,n){var r=n(268);"string"==typeof r&&(r=[[e.id,r,""]]);n(16)(r,{});r.locals&&(e.exports=r.locals)},414:function(e,t,n){var r=n(269);"string"==typeof r&&(r=[[e.id,r,""]]);n(16)(r,{});r.locals&&(e.exports=r.locals)},415:function(e,t,n){var r=n(270);"string"==typeof r&&(r=[[e.id,r,""]]);n(16)(r,{});r.locals&&(e.exports=r.locals)},416:function(e,t,n){var r=n(271);"string"==typeof r&&(r=[[e.id,r,""]]);n(16)(r,{});r.locals&&(e.exports=r.locals)},417:function(e,t,n){var r=n(272);"string"==typeof r&&(r=[[e.id,r,""]]);n(16)(r,{});r.locals&&(e.exports=r.locals)},418:function(e,t,n){var r=n(273);"string"==typeof r&&(r=[[e.id,r,""]]);n(16)(r,{});r.locals&&(e.exports=r.locals)},419:function(e,t,n){var r=n(274);"string"==typeof r&&(r=[[e.id,r,""]]);n(16)(r,{});r.locals&&(e.exports=r.locals)}});