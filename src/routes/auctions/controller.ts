/**
 * @file Data controller for /auctions endpoint.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Auction } from "../../models/auction";

export async function get_all(): Promise<Auction[]> {
    return Auction.findAll();
}

export async function create(options: Auction): Promise<Auction> {
    return Auction.create(options);
}
