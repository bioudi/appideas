import { Middleware } from "@nuxt/types";

const myMiddleware: Middleware = context => {
  if (context.$auth.loggedIn) context.redirect("/");
};

export default myMiddleware;
