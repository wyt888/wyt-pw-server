
import * as Router from 'koa-router';
import ROUTER_API from './api/api';

const ROUTER = new Router();


// ROUTER.get(/^\/(.*)(?:\/|$)/, async (ctx, next) => {
//   if (ctx.request.url.startsWith('/api')) {
//     return next();
//   } else {
//     this.body = 'ceshi';
//   }
// });
ROUTER.get('/', async (ctx, next) => {
  // ctx.body = {
  //   test: '测试数据'
  // };
  ctx.response.body = 'Hello World';
});
ROUTER.use(ROUTER_API.routes());

export default ROUTER;