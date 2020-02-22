/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("auction", {
        id: {
            type: "uuid",
            default: pgm.func("uuid_generate_v4()"),
            notNull: true,
            primaryKey: true,
        },
        server_id: {
            type: "uuid",
            notNull: true,
        },
        faction_id: {
            type: "uuid",
            notNull: true,
        },
        item_id: {
            type: "varchar(16)",
            notNull: true,
        },
        item_count: {
            type: "integer",
            notNull: true,
        },
        bid_price: {
            type: "integer",
            notNull: true,
        },
        buyout_price: {
            type: "integer",
            notNull: true,
            default: 0,
        },
        current_bid: {
            type: "integer",
            notNull: false,
            default: null,
        },
        owner: {
            type: "varchar(32)",
            notNull: true,
        },
        expires_on: {
            type: "timestamp",
            notNull: true,
        },
        updatedAt: {
            type: "timestamp",
            notNull: true,
        },
        createdAt: {
            type: "timestamp",
            notNull: true,
        },
    });
    pgm.createIndex("auction", "id");
    pgm.createConstraint("auction", "fk_auction_server", {
        foreignKeys: {
            columns: "server_id",
            references: "server(id)",
        },
    });
    pgm.createConstraint("auction", "fk_auction_faction", {
        foreignKeys: {
            columns: "faction_id",
            references: "faction(id)",
        },
    });
};

exports.down = (pgm) => {
    pgm.dropConstraint("auction", "fk_auction_server", { ifExists: true });
    pgm.dropConstraint("auction", "fk_auction_faction", { ifExists: true });
    pgm.dropTable("auction", { ifExists: true });
};
