/**
 * @file Express router middleware functionality.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Router, Request, Response, NextFunction } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";
import { log } from "util";

/**
 * Applies cors headers to a router.
 *
 * @since 1.0.0
 * @param r - Router to modify.
 */
export function hdl_cors(r: Router) {
    r.use(cors({ credentials: true, origin: true }));
}

/**
 * Allows a router to parse JSON bodies.
 *
 * @since 1.0.0
 * @param r - Router to modify.
 */
export function hdl_body_parse(r: Router) {
    r.use(parser.urlencoded({ extended: true }));
    r.use(parser.json());
}

/**
 * Applies compression to a router.
 *
 * @since 1.0.0
 * @param r - Router to modify.
 */
export function hdl_compr(r: Router) {
    r.use(compression());
}

export function hdl_log(r: Router) {
    r.use((req: Request, _res: Response, next: NextFunction) => {
        log(`Request from ${req.ip} to ${req.path}`);
        next();
    });
}
