/**
 * @file Express router error handling middleware.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Router, Request, Response, NextFunction } from "express";
import * as ErrorHandler from "../utils/http_errors";

/**
 * Middleware for handling 404 errors.
 *
 * @param r - Router to apply middleware to.
 */
export function hdl_404(r: Router) {
    r.use(() => {
        ErrorHandler.not_found_error();
    });
}

/**
 * Middleware for handling client errors.
 *
 * @param r - Router to apply middleware to.
 */
export function hdl_client_err(r: Router) {
    r.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
        ErrorHandler.client_error(err, res, next);
    });
}

/**
 * Middleware for handling server errors.
 *
 * @param r - Router to apply middleware to.
 */
export function hdl_server_err(r: Router) {
    r.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
        ErrorHandler.server_error(err, res, next);
    });
}

export default [hdl_404, hdl_client_err, hdl_server_err];
