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
    });
    pgm.createIndex("faction", "id");
    pgm.sql("INSERT INTO faction (name) VALUES ('horde')");
    pgm.sql("INSERT INTO faction (name) VALUES ('alliance')");
    pgm.sql("INSERT INTO faction (name) VALUES ('neutral')");
};

exports.down = (pgm) => {
    pgm.dropTable("faction", { ifExists: true });
};
