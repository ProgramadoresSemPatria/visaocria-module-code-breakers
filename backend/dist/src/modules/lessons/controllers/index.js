"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("../services"));
const db_1 = __importDefault(require("../../../../models/prisma/db"));
const lessonsServices = new services_1.default(db_1.default);
class LessonsController {
    async getAllLessons(req, res) {
        try {
            const lessons = await lessonsServices.getAllLessons();
            if (!lessons || lessons.length === 0) {
                return res.status(404).json({ message: "No lessons found" });
            }
            res.status(200).json(lessons);
        }
        catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ message: "Internal server error, failed to get all lessons" });
        }
    }
}
exports.default = LessonsController;
