/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("faction", {
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
        updatedAt: {
            type: "timestamp",
            default: pgm.func("NOW()"),
            notNull: true,
        },
        createdAt: {
            type: "timestamp",
            default: pgm.func("NOW()"),
            notNull: true,
        },
    });
    pgm.createIndex("faction", "id");
};

exports.down = (pgm) => {
    pgm.dropTable("faction", { ifExists: true });
};
