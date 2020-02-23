/**
 * @file Model definition for region table.
 * @author Kruhlmann <echo "YW5kcmVhc0BrcnVobG1hbm4uZGV2Cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Model } from "sequelize";

export class Region extends Model {
    public id!: string;
    public short_name!: string;
    public long_name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
