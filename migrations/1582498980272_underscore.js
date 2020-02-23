/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.renameColumn("auction", "createdAt", "created_at");
    pgm.renameColumn("server", "createdAt", "created_at");
    pgm.renameColumn("region", "createdAt", "created_at");
    pgm.renameColumn("faction", "createdAt", "created_at");
    pgm.renameColumn("player", "createdAt", "created_at");
    pgm.renameColumn("auction", "updatedAt", "updated_at");
    pgm.renameColumn("server", "updatedAt", "updated_at");
    pgm.renameColumn("region", "updatedAt", "updated_at");
    pgm.renameColumn("player", "updatedAt", "updated_at");
};

exports.down = (pgm) => {
    pgm.renameColumn("auction", "created_at", "createdAt");
    pgm.renameColumn("server", "created_at", "createdAt");
    pgm.renameColumn("region", "created_at", "createdAt");
    pgm.renameColumn("faction", "created_at", "createdAt");
    pgm.renameColumn("player", "created_at", "createdAt");
    pgm.renameColumn("auction", "updated_at", "updatedAt");
    pgm.renameColumn("server", "updated_at", "updatedAt");
    pgm.renameColumn("region", "updated_at", "updatedAt");
    pgm.renameColumn("player", "updated_at", "updatedAt");
};
