import { PrismaClient } from "@prisma/client";

class ProblemsServices {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async updateProblemIsSolved(
		subjectId: number,
		problemTitle: string,
		status: boolean
	) {
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
		} catch (error) {
			console.log(error);
			throw new Error("Internal server error, failed to update problem");
		}
	}
}

export default ProblemsServices;
