webpackJsonp([5,2],{0:function(t,e,i){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var n=i(1),o=e(n),r=i(2),s=e(r),u=i(20),a=e(u);o.default.use(s.default);var l={template:"<div>home</div>"},d=new s.default({mode:"history",base:t,routes:[{path:"/",component:l},{path:"/post/:id",component:a.default}]});new o.default({router:d,template:'\n    <div id="app">\n      <h1>Data Fetching</h1>\n      <ul>\n        <li><router-link to="/">/</router-link></li>\n        <li><router-link to="/post/1">/post/1</router-link></li>\n        <li><router-link to="/post/2">/post/2</router-link></li>\n        <li><router-link to="/post/3">/post/3</router-link></li>\n      </ul>\n      <router-view class="view"></router-view>\n    </div>\n  '}).$mount("#app")}).call(e,"..\\src\\data-fetching")},4:function(t,e){"use strict";function i(t,e){setTimeout(function(){n[t]?e(null,n[t]):e(new Error("Post not found."))},100)}Object.defineProperty(e,"__esModule",{value:!0}),e.getPost=i;var n={1:{id:1,title:"sunt aut facere",body:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"},2:{id:2,title:"qui est esse",body:"est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"}}},7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(4);e.default={data:function(){return{loading:!1,post:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error=this.post=null,this.loading=!0,(0,n.getPost)(this.$route.params.id,function(e,i){t.loading=!1,e?t.error=e.toString():t.post=i})}}}},13:function(t,e){},20:function(t,e,i){var n,o;i(13),n=i(7);var r=i(32);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=n},32:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"post"},[t.loading?e("div",{staticClass:"loading"},[t._v("Loading...")]):t._e(),t._v(" "),t.error?e("div",{staticClass:"error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),e("transition",{attrs:{name:"slide"}},[t.post?e("div",{key:t.post.id,staticClass:"content"},[e("h2",[t._v(t._s(t.post.title))]),t._v(" "),e("p",[t._v(t._s(t.post.body))])]):t._e()])])},staticRenderFns:[]}}});
//# sourceMappingURL=data-fetching.02a01c7c3f00c130712b.js.map