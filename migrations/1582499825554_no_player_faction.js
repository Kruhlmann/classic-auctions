/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.dropConstraint("player", "fk_player_faction");
    pgm.dropColumns("player", ["faction_id"]);
};

exports.down = (pgm) => {
    pgm.addColumns("player", {
        faction_id: {
            type: "uuid",
            notNull: true,
        },
    });
    pgm.createConstraint("player", "fk_player_faction", {
        foreignKeys: {
            columns: "faction_id",
            references: "faction(id)",
        },
    });
};
