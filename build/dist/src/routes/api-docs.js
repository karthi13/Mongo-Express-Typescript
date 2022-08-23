"use strict";
var express = require('express');
var router = express.Router();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Money Manager API",
            version: "1.0.0",
            description: "A simple Express Library API",
        },
        servers: [
            {
                url: "http://localhost:4000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};
const specs = swaggerJsDoc(options);
router.use('/', swaggerUI.serve);
router.get('/', swaggerUI.setup(specs));
module.exports = router;
//# sourceMappingURL=api-docs.js.map