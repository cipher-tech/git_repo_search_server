"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var search_1 = __importDefault(require("./routes/search"));
var cors_1 = __importDefault(require("cors"));
var http_1 = require("http");
(0, dotenv_1.config)();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(search_1.default);
var httpServer = (0, http_1.createServer)(app);
httpServer.listen(process.env.PORT || 5000, function () {
    console.log('Listening on port 5000');
});
