/**
 * @file Exports all server routes.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import auctions from "./auctions";
import servers from "./servers";
import factions from "./factions";
import regions from "./regions";

export default [...auctions, ...servers, ...factions, ...regions];
