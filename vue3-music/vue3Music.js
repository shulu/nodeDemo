/*
 * @Author: shulu
 * @Date: 2023-03-29 15:43:05
 * @LastEditors: shulu
 * @LastEditTime: 2023-03-29 16:32:37
 * @Description: file content
 * @FilePath: /nodeDemo/vue3-music/vue3Music.js
 */
var express = require("express");
var url = require("url");
//我这边使用了中间件
var cors = require("cors");
var app = express();
app.use(cors());

app.get("/banner", function (req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf8");
  // 解析 url 参数
  var params = url.parse(req.url, true).query;
  console.log(params);
  data = [
    {
      pic: "https://y.qq.com/music/common/upload/MUSIC_FOCUS/4585366.jpg?max_age=2592000",
      targetId: "1",
      targetType: "1",
      targetTitle: "linjunjie",
      bannerId: 1,
    },
    {
      pic: "https://y.qq.com/music/common/upload/MUSIC_FOCUS/4585366.jpg?max_age=2592000",
      targetId: "1",
      targetType: "1",
      targetTitle: "linjunjie",
      bannerId: 1,
    },
    {
      pic: "https://y.qq.com/music/common/upload/MUSIC_FOCUS/4585366.jpg?max_age=2592000",
      targetId: "1",
      targetType: "1",
      targetTitle: "linjunjie",
      bannerId: 1,
    },
  ];
  result = {
    code: 200,
    banners: data,
  };
  res.end(JSON.stringify(result));
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
