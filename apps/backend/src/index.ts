import Koa from 'koa';

const app = new Koa();

app.use(async (ctx: any) => {
    ctx.body = 'Hello World';
});

app.listen(1027, () => {
    console.info(`Backend server has started and listening to port 1027.`)
});