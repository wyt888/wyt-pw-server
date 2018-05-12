import * as Router from 'koa-router';
import * as fs from 'fs';

const ROUTER = new Router();


ROUTER.get('/test', async (ctx, next) => {
  // ctx.response.body = 'test';
  const url = ctx.url;
  // 从上下文的request对象中获取
  const request = ctx.request;
  const req_query = request.query;
  const req_querystring = request.querystring;

  // 从上下文中直接获取
  const ctx_query = ctx.query;
  const ctx_querystring = ctx.querystring;

  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  };
});

export default ROUTER;