/**
 * @file Model definition for faction table.
 * @author Kruhlmann <echo "YW5kcmVhc0BrcnVobG1hbm4uZGV2Cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Model } from "sequelize";

export class Auction extends Model {
    public id!: string;
    public server_id!: string;
    public faction_id!: string;
    public item_id!: string;
    public item_count!: number;
    public bid_price!: number;
    public buyout_price!: number;
    public current_bid: number;
    public seller_id!: string;
    public expires_on!: Date;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

