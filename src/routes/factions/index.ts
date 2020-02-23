/**
 * @file Server routes for /factions endpoint.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Request, Response } from "express";
import * as controller from "./controller";

export default [
    {
        path: "/factions",
        method: "get",
        handler: async (_req: Request, res: Response) => {
            controller.get_all().then((factions) => {
                res.json(factions);
            });
        },
    },
    {
        path: "/factions",
        method: "post",
        handler: async (req: Request, res: Response) => {
            controller.create(req.query.name).then((faction) => {
                res.json(faction);
            });
        },
    },
    {
        path: "/factions",
        method: "delete",
        handler: async (req: Request, res: Response) => {
            controller.destroy(req.query.id).then((faction) => {
                res.json(faction);
            });
        },
    },
];
