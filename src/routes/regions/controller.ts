/**
 * @file Data controller for /regions endpoint.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { HTTP400Error } from "../../utils/http_errors";
import { Region } from "../../models/region";

export async function get_all(): Promise<Region[]> {
    return Region.findAll();
}

export async function create(
    short_name: string,
    long_name: string
): Promise<Region> {
    if (!short_name || short_name.length < 1) {
        throw new HTTP400Error();
    }
    if (!long_name || long_name.length < 1) {
        throw new HTTP400Error();
    }
    const sn = short_name.toLowerCase();
    const ln = long_name.toLowerCase();
    return Region.create({ short_name: sn, long_name: ln });
}

/**
 * Destroys a region in the database.
 *
 * @param id - UUID of the region to destroy.
 * @returns - The destroyed region.
 */
export async function destroy(id: string): Promise<Region> {
    return Region.findByPk(id)
        .then(async (r) => {
            await r.destroy();
            return r;
        })
        .catch(() => {
            throw new HTTP400Error();
        });
}

/**
 * Truncates the regions table.
 */
export async function truncate(cascade: boolean): Promise<void> {
    return Region.truncate({ cascade });
}
