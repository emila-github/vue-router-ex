webpackJsonp([14,2],[function(e,t,r){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var n=r(1),i=t(n),o=r(2),a=t(o);i.default.use(a.default);var u={template:"<div>foo</div>"},l={template:"<div>bar</div>"},d={template:"<div>baz</div>"},v=new a.default({mode:"history",base:e,routes:[{path:"/",components:{default:u,a:l,b:d}},{path:"/other",components:{default:d,a:l,b:u}}]});new i.default({router:v,template:'\n    <div id="app">\n      <h1>Named Views</h1>\n      <ul>\n        <li><router-link to="/">/</router-link></li>\n        <li><router-link to="/other">/other</router-link></li>\n      </ul>\n      <router-view class="view one"></router-view>\n      <router-view class="view two" name="a"></router-view>\n      <router-view class="view three" name="b"></router-view>\n    </div>\n  '}).$mount("#app")}).call(t,"..\\src\\named-views")}]);
//# sourceMappingURL=named-views.0af0fbd8462bac0c42ff.js.map