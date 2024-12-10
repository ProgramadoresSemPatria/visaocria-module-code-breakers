"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("../controllers"));
const router = express_1.default.Router();
const coursesController = new controllers_1.default();
router.get("/courses", async (req, res, next) => {
    await coursesController.getAllCourses(req, res);
    next();
});
exports.default = router;
