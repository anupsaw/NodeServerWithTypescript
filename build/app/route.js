"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var AppRouter = (function () {
    function AppRouter() {
        this.router = express.Router();
        this.initialize();
    }
    AppRouter.prototype.initialize = function () {
        this.router.route('/')
            .get(function (req, res, next) {
            res.send('sent my first response');
        });
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
//# sourceMappingURL=route.js.map