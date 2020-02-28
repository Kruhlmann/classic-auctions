/**
 * @file Server routes for /auctions endpoint.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Request, Response } from "express";
import * as controller from "./controller";

export default [
    {
        path: "/auctions",
        method: "get",
        handler: async (_req: Request, res: Response) => {
            controller.get_all().then((auctions) => {
                res.json(auctions);
            });
        },
    },
    {
        path: "/auctions",
        method: "post",
        handler: async (req: Request, res: Response) => {
            controller.create(req.body).then((auction) => {
                res.json(auction);
            });
        },
    },
];
