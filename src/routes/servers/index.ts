/**
 * @file Server routes for /servers endpoint.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Request, Response } from "express";
import { HTTP405Error } from "../../utils/http_errors";
import * as controller from "./controller";

export default [
    {
        path: "/servers",
        method: "get",
        handler: async (_req: Request, res: Response) => {
            controller.get_all_servers().then((servers) => {
                res.json(servers);
            });
        },
    },
    {
        path: "/auctions",
        method: "post",
        handler: async (_req: Request, _res: Response) => {
            throw new HTTP405Error();
        },
    },
];
