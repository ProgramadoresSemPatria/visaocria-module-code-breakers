"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CoursesServices {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllCourses() {
        try {
            const courses = await this.prisma.courses.findMany();
            if (!courses || courses.length === 0) {
                return [];
            }
            return courses;
        }
        catch (error) {
            console.log(error);
            throw new Error("Internal server error, failed to get all courses");
        }
    }
}
exports.default = CoursesServices;
