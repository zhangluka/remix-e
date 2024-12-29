import { createRequestHandler } from "@remix-run/express";
import express from "express"

const viteDevServer = process.env.NODE_ENV === 'production' ? null : await import('vite').then((vite) => {
  vite.createServer({ server: { middlewareMode: true } })
})

const app = express();

app.use(viteDevServer ? viteDevServer.middlewares : express.static("build/client"));

const build = viteDevServer ? () => viteDevServer.ssrLoadModule("vitual:remix/server-build") : await import("./build/server/index.js")

app.all('*', createRequestHandler({ build }));

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
})

