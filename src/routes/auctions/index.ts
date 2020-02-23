/**
 * @file Server routes for /auctions/ endpoint.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Request, Response } from "express";
import { HTTP405Error } from "../../utils/http_errors";

export default [
    {
        path: "/auctions",
        method: "get",
        handler: async (_req: Request, res: Response) => {
            res.send("Hello, Auctions!");
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
