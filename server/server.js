const express = require("express")
const axios = require("axios")
const app = express()


/*
  请求地址： http://localhost:3000/search/users?q=aa

  后台路由
    key： /search/users
    value： function () {}
*/
// 请求github真实数据
app.get("/search/users", function (req, res) {
  const {q} = req.query
  axios({
    url: 'https://api.github.com/search/users',
    params: {q}
  }).then(response => {
    res.json(response.data)
  })
})

// 请求本地模拟数据
app.get("/search/users2", function (req, res) {
  res.json({
    items: [
      {
        login: "gyy1129",
        html_url: "https://github.com/gyy1129",
        avatar_url:
          "https://avatars.githubusercontent.com/u/67217725?v=4",
        id: 1,
      },
      {
        login: "gyy1129",
        html_url: "https://github.com/gyy1129",
        avatar_url: "https://avatars.githubusercontent.com/u/67217725?v=4",
        id: 2,
      },
      {
        login: "gyy1129",
        html_url: "https://github.com/gyy1129",
        avatar_url:
          "https://avatars.githubusercontent.com/u/67217725?v=4",
        id: 3,
      },
      {
        login: "gyy1129",
        html_url: "https://github.com/gyy1129",
        avatar_url: "https://avatars.githubusercontent.com/u/67217725?v=4",
        id: 4,
      },
      {
        login: "gyy1129",
        html_url: "https://github.com/gyy1129",
        avatar_url:
          "https://avatars.githubusercontent.com/u/67217725?v=4",
        id: 5,
      },
      {
        login: "gyy1129",
        html_url: "https://github.com/gyy1129",
        avatar_url: "https://avatars.githubusercontent.com/u/67217725?v=4",
        id: 6,
      },
      {
        login: "gyy1129",
        html_url: "https://github.com/gyy1129",
        avatar_url:
          "https://avatars.githubusercontent.com/u/67217725?v=4",
        id: 7,
      },
      {
        login: "gyy1129",
        html_url: "https://github.com/gyy1129",
        avatar_url: "https://avatars.githubusercontent.com/u/67217725?v=4",
        id: 8,
      },
      {
        login: "gyy1129",
        html_url: "https://github.com/gyy1129",
        avatar_url:
          "https://avatars.githubusercontent.com/u/67217725?v=4",
        id: 9,
      },
    ],
  });
});



app.listen(5000, "localhost", (err) => {
  if (!err){
  	console.log("服务器启动成功")
  	console.log("请求github真实数据请访问：http://localhost:5000/search/users")
  	console.log("请求本地模拟数据请访问：http://localhost:5000/search/users2")
  } 
  else console.log(err);
})
