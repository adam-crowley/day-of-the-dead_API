"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('Listening on port', port);
});
server.use(express_1.default.json());
server.get('/', (req, res) => {
    res.send('Hello world!');
});
server.get('/bubble', (req, res) => {
    res.send('Hello bubble!');
});
server.use(express_1.default.static('./public'));
server.use((0, cors_1.default)('*'));
exports.default = server;
