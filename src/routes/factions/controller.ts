/**
 * @file Data controller for /factions endpoint.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Faction } from "../../models/faction";
import { HTTP400Error } from "../../utils/http_errors";

export async function get_all(): Promise<Faction[]> {
    return Faction.findAll();
}

export async function create(name: string): Promise<Faction> {
    if (!name || name.length < 1) {
        throw new HTTP400Error();
    }
    return Faction.create({ name });
}

/**
 * Destroys a faction in the database.
 *
 * @param id - UUID of the faction to destroy.
 * @returns - The destroyed faction.
 */
export async function destroy(id: string): Promise<Faction> {
    return Faction.findByPk(id)
        .then(async (f) => {
            await f.destroy();
            return f;
        })
        .catch(() => {
            throw new HTTP400Error();
        });
}

/**
 * Truncates the faction table.
 */
export async function truncate(cascade: boolean): Promise<void> {
    return Faction.truncate({ cascade });
}

