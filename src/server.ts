/**
 * @file Server entrypoint.
 * @author Kruhlmann <echo "YW5kcmVhc0BrcnVobG1hbm4uZGV2Cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import http from "http";
import express from "express";
import { apl_middleware, apl_routes } from "./utils";
import middleware from "./middleware";
import routes from "./routes";

const { PORT = 5000, BASEPATH = "/" } = process.env;
const router = express();
apl_middleware(middleware, router);
apl_routes(routes, router);
const server = http.createServer(router);

server.listen(PORT, () => {
    console.log(BASEPATH);
});
