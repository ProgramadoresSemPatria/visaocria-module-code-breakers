"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LessonsServices {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllLessons() {
        try {
            const lessons = await this.prisma.lessons.findMany();
            if (!lessons || lessons.length === 0) {
                return [];
            }
            return lessons;
        }
        catch (error) {
            console.log(error);
            throw new Error("Internal server error, failed to get all lessons");
        }
    }
}
exports.default = LessonsServices;
