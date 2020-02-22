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
 * @since 1.0.0
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
 * @since 1.0.0
 * @param routes - List of routing objects to apply to the router.
 * @param router - Router to apply routing objects to
 */
export function apl_routes(routes: Route[], router: Router) {
    for (const r of routes) {
        (router as any)[r.method](r.path, r.handler);
    }
}
