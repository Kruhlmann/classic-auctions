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
    });
    pgm.createIndex("region", "id");
    pgm.sql(
        "INSERT INTO region (short_name, long_name) VALUES ('na', 'north america')"
    );
    pgm.sql(
        "INSERT INTO region (short_name, long_name) VALUES ('eu', 'europe')"
    );
};

exports.down = (pgm) => {
    pgm.dropTable("region", { ifExists: true });
};
