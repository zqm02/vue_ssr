const express = require("express");
const serverRender = require("vue-server-renderer");
const Vue = require("vue");

const server = express();

server.get("*", (req, res) => {
  //1.创建vue实例
  const app = new Vue({
    data() {
      return {
        msg: "hello SSR",
      };
    },
    template: "<div>{{msg}}</div>",
  });

  //希望有一个方法，可以将vue实例转化为html字符串
  //vue-server-renderer

  //a.创建一个渲染器
  const render = serverRender.createRenderer();

  //b.调用renderToString方法(vue实例，回调函数)
  render.renderToString(app, (err, html) => {
    res.send(html);
  });
});

server.listen(12306, () => {
  console.log("server is running on port 12306");
});
