webpackJsonp([18,2],[function(t,e,o){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var n=o(1),r=e(n),i=o(2),a=e(i);r.default.use(a.default);var l={template:"<div>home</div>"},u={template:"<div>foo</div>"},d={template:"<div>bar</div>"},p=new a.default({mode:"history",base:t,routes:[{path:"/",component:l},{path:"/foo",component:u},{path:"/bar",component:d}]});new r.default({router:p,template:'\n    <div id="app">\n      <h1>Basic</h1>\n      <ul>\n        <li><router-link to="/">/</router-link></li>\n        <li><router-link to="/foo">/foo</router-link></li>\n        <li><router-link to="/bar">/bar</router-link></li>\n        <router-link tag="li" to="/bar" :event="[\'mousedown\', \'touchstart\']">\n          <a>/bar</a>\n        </router-link>\n      </ul>\n      <router-view class="view"></router-view>\n    </div>\n  '}).$mount("#app")}).call(e,"..\\src\\basic")}]);
//# sourceMappingURL=basic.292c4069fabbdad1dbd7.js.map