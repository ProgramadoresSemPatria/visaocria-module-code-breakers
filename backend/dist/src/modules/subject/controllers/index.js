"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("../services"));
const db_1 = __importDefault(require("../../../../models/prisma/db"));
const subjectServices = new services_1.default(db_1.default);
class SubjectController {
    async getSubjectByTitle(req, res) {
        const { title } = req.params;
        if (!title) {
            return res.status(400).json({ message: "Title parameter is missing" });
        }
        try {
            const subject = await subjectServices.getSubjectByTitle(title);
            if (!subject) {
                return res.status(404).json({ message: "No subject found" });
            }
            res.status(200).json(subject);
        }
        catch (error) {
            console.error("Error fetching subject:", error);
            res
                .status(500)
                .json({ message: "Internal server error, failed to get subject" });
        }
    }
    async incrementProgress(req, res) {
        const { subjectId } = req.params;
        if (!subjectId) {
            return res
                .status(400)
                .json({ message: "Subject ID parameter is missing" });
        }
        try {
            await subjectServices.incrementProgress(Number(subjectId));
            res.status(200).json({ message: "Progress incremented successfully" });
        }
        catch (error) {
            console.error("Error incrementing progress:", error);
            res.status(500).json({
                message: "Internal server error, failed to increment progress",
            });
        }
    }
    async decrementProgress(req, res) {
        const { subjectId } = req.params;
        if (!subjectId) {
            return res
                .status(400)
                .json({ message: "Subject ID parameter is missing" });
        }
        try {
            await subjectServices.decrementProgress(Number(subjectId));
            res.status(200).json({ message: "Progress decremented successfully" });
        }
        catch (error) {
            console.error("Error decrementing progress:", error);
            res.status(500).json({
                message: "Internal server error, failed to decrement progress",
            });
        }
    }
}
exports.default = SubjectController;
