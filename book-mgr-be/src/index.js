const Koa = require('koa');

const app = new Koa();

app.use(async (context, next) => {
  const { request: req } = context;
  const { url } = req;

  if (url === '/') {
    context.response.body = '<h1>主页</h1>';
    return;
  }

  

})

// 开启一个 http 服务
// 接收 http 请求 并做处理，处理完后响应
app.listen(3000, () => {
  console.log('启动成功');
});
