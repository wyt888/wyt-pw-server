import * as Koa from 'koa';
import * as StaticFiles from 'koa-static';
import * as BodyParser from 'koa-bodyparser';

// 接口路由
import ROUTER from './routes';

const PORT = process.env.PORT || 3010;

const CLIENT_FILES = './dev/client/';

const SERVER = new Koa();

// middlewares
// post请求的处理
SERVER.use(BodyParser());

// 静态资源处理
SERVER.use(StaticFiles(CLIENT_FILES));

// 路由
SERVER.use(ROUTER.routes());

SERVER.listen(PORT);

console.log(`the server is starting at port ${PORT}`);
