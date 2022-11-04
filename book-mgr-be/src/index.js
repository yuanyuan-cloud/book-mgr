const Koa = require('koa');
const { koaBody } = require('koa-body')
const { connect } = require('./db')
const registerRoutes = require('./routers')
const cors = require('@koa/cors')

const app = new Koa();

connect().then(() => {
  app.use(cors())
  app.use(koaBody())

  registerRoutes(app);
  
  

// 开启一个 http 服务
// 接收 http 请求 并做处理，处理完后响应
app.listen(3000, () => {
  console.log('启动成功');
}); 
});



