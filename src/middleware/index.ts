/**
 * @file Exports all middleware functionality.
 * @author kruhlmann <echo "yw5kcmvhc0brcnvobg1hbm4uzgv2cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { hdl_cors, hdl_compr, hdl_body_parse, hdl_log } from "./common";
import { hdl_api_docs } from "./api_docs";

export default [hdl_cors, hdl_compr, hdl_body_parse, hdl_api_docs, hdl_log];
