/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("server", {
        id: {
            type: "uuid",
            default: pgm.func("uuid_generate_v4()"),
            notNull: true,
            primaryKey: true,
        },
        name: {
            type: "varchar(512)",
            notNull: true,
        },
        region_id: {
            type: "uuid",
            notNull: true,
        },
    });
    pgm.createConstraint("server", "fk_server_region", {
        foreignKeys: {
            columns: "region_id",
            references: "region(id)",
        },
    });
};

exports.down = (pgm) => {
    pgm.dropConstraint("server", "fk_server_region", { ifExists: true });
    pgm.dropTable("server", { ifExists: true });
};
