/**
 * @file Data controller for /factions endpoint.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Faction } from "../../models/faction";

export async function get_all(): Promise<Faction[]> {
    return Faction.findAll();
}

export async function create(name: string): Promise<Faction> {
    const f = await Faction.create({ name });
    return f;
}

export async function destroy(id: string): Promise<Faction> {
    const f = await Faction.findByPk(id);
    console.log(f);
    await f.destroy();
    return f;
}
