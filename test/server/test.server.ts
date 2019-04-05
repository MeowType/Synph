import Koa from 'koa'
import { AddressInfo } from 'net';
import _ from 'koa-route'
import f from 'koa-static'
import mount from 'koa-mount'
import send from 'koa-send'
const app = new Koa()

app.use(_.get('/', async (ctx) => {
    await send(ctx, `./test/server/index.html`)
}))
app.use(mount('/test', f('./test/')))
app.use(mount('/style', f('./style/')))

const port = process.argv[2] == null ? null : parseInt(process.argv[2])
const server = app.listen(port)
const address: AddressInfo = server.address() as AddressInfo
console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


test server run on  http://localhost:${address == null ? port : address.port}


||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||`)