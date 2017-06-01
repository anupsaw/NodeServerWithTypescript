"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var route_1 = require("./route");
var Middleware = (function () {
    function Middleware() {
        this.app = express();
        this.initialize();
    }
    Middleware.prototype.initialize = function () {
        var route = new route_1.AppRouter();
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(route);
    };
    return Middleware;
}());
exports.Middleware = Middleware;
//# sourceMappingURL=middelware.js.map