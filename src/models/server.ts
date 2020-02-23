/**
 * @file Model definition for server table.
 * @author Kruhlmann <echo "YW5kcmVhc0BrcnVobG1hbm4uZGV2Cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Model } from "sequelize";

export class Server extends Model {
    public id!: string;
    public name!: string;
    public region_id: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

