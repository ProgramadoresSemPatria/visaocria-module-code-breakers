"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("../controllers"));
const router = express_1.default.Router();
const subjectController = new controllers_1.default();
router.get("/subject/:title", async (req, res, next) => {
    await subjectController.getSubjectByTitle(req, res);
    next();
});
router.post("/subject/increment-progress/:subjectId", async (req, res, next) => {
    await subjectController.incrementProgress(req, res);
    next();
});
router.post("/subject/decrement-progress/:subjectId", async (req, res, next) => {
    await subjectController.decrementProgress(req, res);
    next();
});
exports.default = router;
