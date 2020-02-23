/**
 * @file Postgres/sequelize instance wrapper.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Sequelize } from "sequelize";
import init_models from "./models";

let instance: Sequelize;

export default function get(): Sequelize {
    if (instance) {
        return instance;
    }
    initdb();
    return instance;
}

export function initdb(): void {
    const { CA_DB_USR, CA_DB_PWD, CA_DB_NAM } = process.env;
    instance = new Sequelize({
        database: CA_DB_NAM,
        username: CA_DB_USR,
        password: CA_DB_PWD,
        dialect: "postgres",
        host: "localhost",
    });
    init_models(instance);
}
