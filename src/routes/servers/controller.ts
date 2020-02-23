/**
 * @file Data controller for /servers endpoint.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Server } from "../../models/server";

export async function get_all_servers(): Promise<Server[]> {
    return Server.findAll();
}

//export async function create_server(): Promise<Server> {}
