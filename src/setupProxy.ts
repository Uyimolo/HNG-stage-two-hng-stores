// const { createProxyMiddleware } = require("http-proxy-middleware");
// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "https://api.timbu.cloud",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api": "",
//       },
//     }),
//   );
// };

// import { createProxyMiddleware } from "http-proxy-middleware";

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "https://api.timbu.cloud",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api": "",
//       },
//     }),
//   );
// };

// import { Application, NextFunction, Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app: { app: unknown }) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.timbu.cloud",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    }),
  );
};
