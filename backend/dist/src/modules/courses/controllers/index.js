"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("../services"));
const db_1 = __importDefault(require("../../../../models/prisma/db"));
const coursesServices = new services_1.default(db_1.default);
class CoursesController {
    async getAllCourses(req, res) {
        try {
            const courses = await coursesServices.getAllCourses();
            if (!courses || courses.length === 0) {
                return res.status(404).json({ message: "No courses found" });
            }
            res.status(200).json(courses);
        }
        catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ message: "Internal server error, failed to get all courses" });
        }
    }
}
exports.default = CoursesController;
