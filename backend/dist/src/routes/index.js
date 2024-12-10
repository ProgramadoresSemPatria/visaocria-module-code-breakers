"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("../../src/modules/courses/routes"));
const routes_2 = __importDefault(require("../../src/modules/lessons/routes"));
const routes_3 = __importDefault(require("../../src/modules/roadmap/routes"));
const routes_4 = __importDefault(require("../../src/modules/subject/routes"));
const routes_5 = __importDefault(require("../../src/modules/problem/routes"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const setupRoutes = (app) => {
    app.get("/server-test", (req, res) => {
        res.status(200).json({ message: "Hello World!" });
    });
    app.use((0, cors_1.default)(), express_1.default.json(), routes_1.default, routes_2.default, routes_3.default, routes_4.default, routes_5.default);
};
exports.default = setupRoutes;
