"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("../services"));
const db_1 = __importDefault(require("../../../../models/prisma/db"));
const roadmapServices = new services_1.default(db_1.default);
class RoadmapController {
    async getAllRoadmap(req, res) {
        try {
            const roadmap = await roadmapServices.getAllRoadmap();
            if (!roadmap || roadmap.length === 0) {
                return res.status(404).json({ message: "No roadmap found" });
            }
            res.status(200).json(roadmap);
        }
        catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ message: "Internal server error, failed to get all roadmaps" });
        }
    }
}
exports.default = RoadmapController;
