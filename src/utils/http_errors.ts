/**
 * @file Custom HTTP error class definitions.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Response, Request, NextFunction } from "express";

export abstract class HTTPClientError extends Error {
    readonly statusCode!: number;
    readonly name!: string;

    constructor(message: object | string) {
        if (message instanceof Object) {
            super(JSON.stringify(message));
        } else {
            super(message);
        }
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class HTTP400Error extends HTTPClientError {
    readonly statusCode = 400;

    constructor(message: string | object = "Bad Request") {
        super(message);
    }

    public static throw(
        _e: Error,
        _req: Request,
        _res: Response,
        _next: NextFunction
    ) {
        throw new HTTP400Error("Bad Request");
    }
}

export class HTTP401Error extends HTTPClientError {
    readonly statusCode = 401;

    constructor(message: string | object = "Unauthorized") {
        super(message);
    }
}

export class HTTP404Error extends HTTPClientError {
    readonly statusCode = 404;

    constructor(message: string | object = "Not found") {
        super(message);
    }
}

export class HTTP405Error extends HTTPClientError {
    readonly statusCode = 405;

    constructor(message: string | object = "Method Not Allowed") {
        super(message);
    }
}

export function not_found_error() {
    throw new HTTP404Error("Not Found");
}

export function client_error(err: Error, res: Response, next: NextFunction) {
    if (err instanceof HTTPClientError) {
        console.error(err);
        res.status(err.statusCode).send(err.message);
    } else {
        next(err);
    }
}

export function server_error(err: Error, res: Response, _next: NextFunction) {
    console.error(err);
    if (process.env.NODE_ENV === "production") {
        res.status(500).send("Internal Server Error");
    } else {
        res.status(500).send(err.stack);
    }
}

export default [not_found_error, client_error, server_error];
