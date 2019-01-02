import Koa from "koa";
import glob from "glob";

// get koa app
const app = new Koa();

// load all controllers
glob(`${__dirname}/controller/*.js`, (err, files) => {
  files.forEach(file => {
    const fileContent = require(file).default;
    app.use(fileContent.routes()).use(fileContent.allowedMethods());
  });
});

// port
app.listen(3000, () => {
  console.log(
    "[demo] route-use-middleware is starting at http://localhost:3000"
  );
});