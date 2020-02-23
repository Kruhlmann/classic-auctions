/**
 * @file Data controller for /servers endpoint.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Server } from "../../models/server";
import { HTTP400Error } from "../../utils/http_errors";
import { Region } from "../../models/region";
import { Includeable } from "sequelize/types";

const include: Includeable[] = [{ model: Region, as: "region" }];
const attributes = ["id", "name"];

export async function get_all(): Promise<Server[]> {
    return Server.findAll({ include, attributes });
}

export async function create(name: string, region_id: string): Promise<Server> {
    return Server.create({ name, region_id }).then((s) => {
        return Server.findByPk(s.id, { include, attributes });
    });
}

/**
 * Destroys a server in the database.
 *
 * @param id - UUID of the server to destroy.
 * @returns - The destroyed server.
 */
export async function destroy(id: string): Promise<Server> {
    return Server.findByPk(id, { include, attributes })
        .then(async (s) => {
            await s.destroy();
            return s;
        })
        .catch(() => {
            throw new HTTP400Error();
        });
}

/**
 * Truncates the servers table.
 */
export async function truncate(cascade: boolean): Promise<void> {
    return Server.truncate({ cascade });
}
