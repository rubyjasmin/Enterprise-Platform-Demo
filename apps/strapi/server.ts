import http from "serverless-http";
import path from "path";
import strapi from "@strapi/strapi";

const appDir =
  process.env.LAMBDA_TASK_ROOT && !process.env.IS_OFFLINE
    ? process.env.LAMBDA_TASK_ROOT
    : process.cwd();

const app = strapi({ appDir, distDir: path.join(appDir, "dist") });

async function loadStrapi() {
  try {
    if (!app.isLoaded) {
      await app.load();
    }

    await app.postListen();
    app.server.mount();
  } catch (error) {
    console.log("🚀 ~ file: server.js ~ line 29 ~ loadStrapi ~ error", error);
    app.stopWithError(error);
  }
}

export const handler = async function (event, context) {
  if (!app.isLoaded) {
    await loadStrapi();
  }

  const h = http(app.server.app);
  return h(event, context);
};
