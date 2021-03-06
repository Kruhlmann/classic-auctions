/**
 * @file Server routes for /servers endpoint.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Request, Response } from "express";
import * as controller from "./controller";

export default [
    {
        path: "/servers",
        method: "get",
        handler: async (_req: Request, res: Response) => {
            controller.get_all().then((servers) => {
                res.json(servers);
            });
        },
    },
    {
        path: "/servers",
        method: "post",
        handler: async (req: Request, res: Response) => {
            controller.create(req.query.name, req.query.region_id).then((s) => {
                res.json(s);
            });
        },
    },
    {
        path: "/servers",
        method: "delete",
        handler: async (req: Request, res: Response) => {
            controller.destroy(req.query.id).then((s) => {
                res.json(s);
            });
        },
    },
];
