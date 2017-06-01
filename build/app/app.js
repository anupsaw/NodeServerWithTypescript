"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var middelware_1 = require("./middelware");
var Server = (function () {
    function Server() {
    }
    Server.prototype.start = function (port) {
        if (port === void 0) { port = 3000; }
        this.app = express();
        this.app.listen(port);
        this.initialize();
    };
    Server.prototype.listen = function (port) {
        if (port === void 0) { port = 3000; }
        this.app.listen(port, function () {
            console.log('Started listening on port: ' + port);
        });
    };
    Server.prototype.initialize = function () {
        var middleware = new middelware_1.Middleware();
        this.app.use(middelware_1.Middleware);
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=app.js.map