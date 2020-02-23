/**
 * @file Server routes for /region endpoint.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Request, Response } from "express";
import * as controller from "./controller";

export default [
    {
        path: "/regions",
        method: "get",
        handler: async (_req: Request, res: Response) => {
            controller.get_all().then((regions) => {
                res.json(regions);
            });
        },
    },
    {
        path: "/regions",
        method: "post",
        handler: async (req: Request, res: Response) => {
            controller
                .create(req.query.short_name, req.query.long_name)
                .then((region) => {
                    res.json(region);
                });
        },
    },
    {
        path: "/regions",
        method: "delete",
        handler: async (req: Request, res: Response) => {
            controller.destroy(req.query.id).then((region) => {
                res.json(region);
            });
        },
    },
];
