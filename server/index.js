// const schedule = require('node-schedule');
const serve = require('koa-static');
const Koa = require('koa');
// const conf = require('./config.js');
const router = require('./router.js');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');
const cors = require('koa-cors');
const app = new Koa();


app
  .use(bodyParser())
  .use(cors())
  .use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.body = undefined
    switch (ctx.status) {
      case 401:
        ctx.app.emit('error', err, this)
        break;
      default:
        if (err.message) {
          ctx.body = {errors:[err.message]}
        }
        ctx.app.emit('error', err, this)
    }
  }
})
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(4000);
