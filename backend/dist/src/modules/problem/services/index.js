"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProblemsServices {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async updateProblemIsSolved(subjectId, problemTitle, status) {
        try {
            const problem = await this.prisma.problem.findFirst({
                where: {
                    subject_id: subjectId,
                    title: problemTitle,
                },
            });
            if (!problem) {
                throw new Error("Problem not found for the given subject_id and title");
            }
            await this.prisma.problem.update({
                where: {
                    id: problem.id,
                },
                data: {
                    isSolved: status,
                },
            });
            return { message: "Problem updated successfully" };
        }
        catch (error) {
            console.log(error);
            throw new Error("Internal server error, failed to update problem");
        }
    }
}
exports.default = ProblemsServices;
