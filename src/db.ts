/**
 * @file Postgres/sequelize instance wrapper.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Sequelize } from "sequelize";

let db: DBConnection;

class DBConnection {
    private _instance: Sequelize;

    constructor(usr: string, pwd: string, nam: string) {
        this._instance = new Sequelize({
            database: nam,
            username: usr,
            password: pwd,
            dialect: "postgres",
            host: "localhost",
        });
    }

    public get instance(): Sequelize {
        return this._instance;
    }
}

export function get(): Sequelize {
    if (db) {
        return db.instance;
    }
    const { CA_DB_USR, CA_DB_PWD, CA_DB_NAM } = process.env;
    db = new DBConnection(CA_DB_USR, CA_DB_PWD, CA_DB_NAM);
    return db.instance;
}
