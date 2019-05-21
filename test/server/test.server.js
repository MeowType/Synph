'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Koa = _interopDefault(require('koa'));
var _ = _interopDefault(require('koa-route'));
var f = _interopDefault(require('koa-static'));
var mount = _interopDefault(require('koa-mount'));
var send = _interopDefault(require('koa-send'));

const app = new Koa();
app.use(_.get('/', async (ctx) => {
    await send(ctx, `./test/server/index.html`);
}));
app.use(_.get('/parser', async (ctx) => {
    await send(ctx, `./test/server/parser.html`);
}));
app.use(mount('/test', f('./test/')));
app.use(mount('/style', f('./style/')));
app.use(mount('/src', f('./src/')));
const port = process.argv[2] == null ? null : parseInt(process.argv[2]);
const server = app.listen(port);
const address = server.address();
console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


test server run on  http://localhost:${address == null ? port : address.port}


||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`);
