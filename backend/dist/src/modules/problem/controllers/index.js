"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("../services"));
const db_1 = __importDefault(require("../../../../models/prisma/db"));
const problemsServices = new services_1.default(db_1.default);
class ProblemsController {
    async updateProblemIsSolved(req, res) {
        const { subjectId, problemTitle, status } = req.body;
        console.log('teste', req.body);
        try {
            await problemsServices.updateProblemIsSolved(subjectId, problemTitle, status);
            res.status(200).json({ message: "Problem status updated successfully" });
        }
        catch (error) {
            console.error("Error updating problem status:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
exports.default = ProblemsController;
