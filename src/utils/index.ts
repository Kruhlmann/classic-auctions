/**
 * @file Assorted utilities.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Router } from "express";
import { MiddleWareFunction, Route } from "../interfaces";

/**
 * Applies a list of middleware functions to an express router.
 *
 * @param mdw - List of middleware functions
 * @param router - Router to apply middleware functions to
 */
export function apl_middleware(mdw: MiddleWareFunction[], router: Router) {
    for (const m of mdw) {
        m(router);
    }
}

/**
 * Applies a list of routing objects to an express router.
 *
 * @param routes - List of routing objects to apply to the router
 * @param router - Router to apply routing objects to
 * @param base - Base path to serve routes on
 */
export function apl_routes(rs: Route[], router: Router, base: string): void {
    for (const r of rs) {
        (router as any)[r.method](`${base}${r.path}`, r.handler);
    }
}

