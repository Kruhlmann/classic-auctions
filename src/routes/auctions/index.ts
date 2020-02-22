/**
 * @file Server routes for /auctions/ endpoint.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Request, Response } from "express";

export default [
    {
        path: "/",
        method: "get",
        handler: async (_req: Request, res: Response) => {
            res.send("Hello, World!");
        },
    },
];
