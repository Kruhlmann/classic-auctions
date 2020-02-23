/**
 * @file Global type and interface declarations.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Router, Request, Response, NextFunction } from "express";

export type MiddleWareFunction = (r: Router) => void;

export type RequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void> | void;

export type Route = {
    path: string;
    method: string;
    handler: RequestHandler | RequestHandler[];
};

