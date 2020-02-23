/**
 * @file Contains a model initalization function definition.
 * @author Kruhlmann <echo "YW5kcmVhc0BrcnVobG1hbm4uZGV2Cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Faction } from "./faction";
import { Server } from "./server";
import { Region } from "./region";
import { Player } from "./player";
import { Auction } from "./auction";
import { DataTypes, Sequelize } from "sequelize";

function init_faction(s: Sequelize): void {
    Faction.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.literal("uuid_generate_v4()"),
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(512),
                allowNull: false,
            },
        },
        { sequelize: s, tableName: "faction" }
    );
}

function init_server(s: Sequelize): void {
    Server.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.literal("uuid_generate_v4()"),
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(512),
                allowNull: false,
            },
            region_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
        },
        { sequelize: s, tableName: "region" }
    );
}

function init_region(s: Sequelize): void {
    Region.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.literal("uuid_generate_v4()"),
                allowNull: false,
                primaryKey: true,
            },
            short_name: {
                type: DataTypes.STRING(2),
                allowNull: false,
            },
            long_name: {
                type: DataTypes.STRING(512),
                allowNull: false,
            },
        },
        { sequelize: s, tableName: "region" }
    );
}

function init_player(s: Sequelize): void {
    Player.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.literal("uuid_generate_v4()"),
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(2),
                allowNull: false,
            },
            server_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            faction_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
        },
        { sequelize: s, tableName: "region" }
    );
}

function init_auction(s: Sequelize): void {
    Auction.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.literal("uuid_generate_v4()"),
                allowNull: false,
                primaryKey: true,
            },
            server_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            faction_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            item_id: {
                type: DataTypes.STRING(16),
                allowNull: false,
            },
            item_count: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            bid_price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            buyout_price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            current_bid: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            seller_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            expires_on: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        { sequelize: s, tableName: "region" }
    );
}

export default function(s: Sequelize): void {
    init_faction(s);
    init_region(s);
    init_server(s);
    init_player(s);
    init_auction(s);
}
