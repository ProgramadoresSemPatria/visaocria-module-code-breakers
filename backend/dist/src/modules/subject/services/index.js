"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubjectServices {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getSubjectByTitle(title) {
        try {
            const subject = await this.prisma.subject.findFirstOrThrow({
                where: {
                    title,
                },
                include: {
                    prerequisites: true,
                    problems: true,
                },
            });
            if (!subject) {
                return null;
            }
            return subject;
        }
        catch (error) {
            console.log(error);
            throw new Error("Internal server error, failed to get all subjects");
        }
    }
    async incrementProgress(subjectId) {
        try {
            await this.prisma.subject.update({
                where: {
                    id: subjectId,
                },
                data: {
                    progress: {
                        increment: 1,
                    },
                },
            });
        }
        catch (error) {
            console.log(error);
            throw new Error("Internal server error, failed to increment progress");
        }
    }
    async decrementProgress(subjectId) {
        try {
            await this.prisma.subject.update({
                where: {
                    id: subjectId,
                },
                data: {
                    progress: {
                        decrement: 1,
                    },
                },
            });
        }
        catch (error) {
            console.log(error);
            throw new Error("Internal server error, failed to decrement progress");
        }
    }
}
exports.default = SubjectServices;
