/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("player", {
        id: {
            type: "uuid",
            default: pgm.func("uuid_generate_v4()"),
            notNull: true,
            primaryKey: true,
        },
        name: {
            type: "varchar(32)",
            notNull: true,
        },
        server_id: {
            type: "uuid",
            notNull: true,
        },
        faction_id: {
            type: "uuid",
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
    pgm.createConstraint("player", "fk_player_server", {
        foreignKeys: {
            columns: "server_id",
            references: "server(id)",
        },
    });
    pgm.createConstraint("player", "fk_player_faction", {
        foreignKeys: {
            columns: "faction_id",
            references: "faction(id)",
        },
    });

    pgm.createIndex("player", "id");
};

exports.down = (pgm) => {
    pgm.dropConstraint("player", "fk_player_server", { ifExists: true });
    pgm.dropConstraint("player", "fk_player_faction", { ifExists: true });
    pgm.dropTable("player", { ifExists: true });
};
