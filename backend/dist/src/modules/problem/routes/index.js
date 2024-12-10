"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("../controllers"));
const router = express_1.default.Router();
const problemsController = new controllers_1.default();
router.post("/problem/update-is-solved", async (req, res, next) => {
    await problemsController.updateProblemIsSolved(req, res);
    next();
});
exports.default = router;
