"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("../controllers"));
const router = express_1.default.Router();
const roadmapController = new controllers_1.default();
router.get("/roadmap", async (req, res, next) => {
    await roadmapController.getAllRoadmap(req, res);
    next();
});
exports.default = router;
