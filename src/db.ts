/**
 * @file Postgres/sequelize instance wrapper.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Sequelize } from "sequelize";
import init_models from "./models";
import { log } from "./log";
import { LoggingLevel } from "./interfaces";

let instance: Sequelize;

export default function get(): Sequelize {
    if (instance) {
        return instance;
    }
    initdb();
    return instance;
}

export function initdb(test: boolean = false): void | Sequelize {
    if (test) {
        const i = new Sequelize({
            username: "postgres",
            password: "postgres",
            database: "classic_auctions_test",
            dialect: "postgres",
            host: "localhost",
            logging: () => {},
        });
        init_models(i);
        return i;
    }
    const { CA_DB_USR, CA_DB_PWD, CA_DB_NAM } = process.env;
    instance = new Sequelize({
        database: CA_DB_NAM,
        username: CA_DB_USR,
        password: CA_DB_PWD,
        dialect: "postgres",
        host: "localhost",
        logging: (msg) => log(msg, LoggingLevel.DEV),
    });
    init_models(instance);
}
