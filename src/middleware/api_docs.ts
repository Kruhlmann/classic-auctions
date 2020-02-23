/**
 * @file Swagger API docs middleware.
 * @author Kruhlmann <echo "YW5kcmVhc0BrcnVobG1hbm4uZGV2Cg==" | base64 -d>
 * @since 1.0.0
 * @packageDocumentation
 */

import { Router } from "express";
import swagger_ui from "swagger-ui-express";
import swagger_doc from "../../cnf/swagger.json";

export function hdl_api_docs(r: Router) {
    r.use("/api-docs", swagger_ui.serve, swagger_ui.setup(swagger_doc));
}
