const Koa = require('koa')
let Router = require('@koa/router')

const app = new Koa();
const router = new Router()

app.use(async (ctx, next)=> {
  console.log('执行')
  next();
})

router.get('/', async(ctx) => {
  ctx.body = '/homepage 111'
})
router.get('/about', async(ctx) => {
  ctx.body = "/about 222"
})
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('koa start success')
})