/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("region", {
        id: {
            type: "uuid",
            default: pgm.func("uuid_generate_v4()"),
            notNull: true,
            primaryKey: true,
        },
        short_name: {
            type: "varchar(2)",
            notNull: true,
        },
        long_name: {
            type: "varchar(512)",
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
    pgm.createIndex("region", "id");
};

exports.down = (pgm) => {
    pgm.dropTable("region", { ifExists: true });
};
