/**
 * @file Logging handler
 * @author Kruhlmann <echo "YW5kcmVhc0BrcnVobG1hbm4uZGV2Cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

//import * as Sentry from "@sentry/node";
import * as fs from "fs";
import * as path from "path";
import { LoggingLevel } from "./interfaces";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

/** Used for outputting formatted logs. */
const logging_formats = {
    [LoggingLevel.DEV]: (msg: string, time: string) =>
        `[\x1b[32mDEV\x1b[0m] [\x1b[36m${time}\x1b[0m] ${msg}`,
    [LoggingLevel.INF]: (msg: string, time: string) =>
        `[\x1b[37mINF\x1b[0m] [\x1b[36m${time}\x1b[0m] ${msg}`,
    [LoggingLevel.WAR]: (msg: string, time: string) =>
        `[\x1b[33mWAR\x1b[0m] [\x1b[36m${time}\x1b[0m] ${msg}`,
    [LoggingLevel.ERR]: (msg: string, time: string) =>
        `[\x1b[1m\x1b[31mERR\x1b[0m] [\x1b[36m${time}\x1b[0m] ${msg}`,
};

/**
 * Handles errors. During production will alert sentry about the occurrence of
 * the error. Otherwise it will be appended to the log file.
 *
 * @param error - Error to report.
 */
export function handle_exception(error: Error | string): void {
    if (typeof error === "string") {
        error = new Error(error);
    }
    if (process.env.NODE_ENV === "production") {
        //sentry.captureException(error);
    }
    log(`${error.stack}`, LoggingLevel.ERR);
}

/**
 * Logs a message.
 *
 * @param msg - Message to log.
 * @param [level=LoggingLevel.INF] - Logging level to use. Defaults to info.
 */
export function log(msg: string, level: LoggingLevel = LoggingLevel.INF): void {
    const now = new Date();
    const now_locale = now.toLocaleString("en-GB", { timeZone: "UTC" });
    const formatted_message = logging_formats[level](msg, now_locale);
    const d = `${months[now.getMonth()]}_${now.getDate()}_${now.getFullYear()}`;
    const log_path = path.resolve(__dirname, `../../logs/${d}.log`);

    if (!fs.existsSync(log_path)) {
        const header = `# LOGS FOR ${process.env.NODE_ENV.toUpperCase()} #\n`;
        fs.writeFileSync(log_path, header);
    }

    if (process.env.NODE_ENV !== "production" || level !== LoggingLevel.DEV) {
        // tslint:disable-next-line: no-console
        console.log(formatted_message);
    }

    fs.appendFileSync(log_path, `${formatted_message}\n`);
}

/**
 * Initializes sentry logging if in production mode and a sentry DSN key was
 * provided in the CA_SENTRY_DSN environment variable.
 */
export function init_sentry(): void {
    if (process.env.NODE_ENV !== "production") {
        return;
    }
    if (process.env.hasOwnProperty("CA_SENTRY_DSN")) {
        //Sentry.init({ dsn: process.env.GATEKEEPER_SENTRY_DSN });
    } else {
        log(
            "No sentry DSN provided. Sentry logging is disabled.",
            LoggingLevel.WAR
        );
    }
}
