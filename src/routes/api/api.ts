import * as Router from 'koa-router';

import test from './test/test';

const ROUTER_API = new Router({
  prefix: '/api'
});

// ROUTER_API.use('/', test.routes(), test.allowedMethods());
ROUTER_API.use(test.routes());
// ROUTER_API.use('/test', test.routes(), test.allowedMethods());

ROUTER_API.get('/', async (ctx, next) => {
  // ctx.body = {
  //   test: '测试数据'
  // };
  ctx.response.body = 'api';
});

// console.log(ROUTER.routes());
// ROUTER.get(/^\/(.*)(?:\/|$)/, async (ctx, next) => {
//   if (ctx.request.url.startsWith('/api')) {
//     return next();
//   } else {
//     this.body = await LOAD_HTML();
//   }
// });

export default ROUTER_API;
