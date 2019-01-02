import { Controller, Request, RequestMethod } from "../utils/decorator";

@Controller({ prefix: "/" })
class HomeController {
  @Request({ url: "/", method: RequestMethod.GET })
  async hello(ctx) {
    return (ctx.body = "this is home");
  }
}

export default HomeController;
