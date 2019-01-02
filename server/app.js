import Koa from "koa";

// get koa app
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

// port
app.listen(3000, () => {
  console.log(
    "[demo] route-use-middleware is starting at http://localhost:3000"
  );
});