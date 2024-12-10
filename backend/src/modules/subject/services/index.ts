import { PrismaClient, Subject } from "@prisma/client";

class SubjectServices {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async getSubjectByTitle(title: string): Promise<Subject | null> {
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
		} catch (error) {
			console.log(error);
			throw new Error("Internal server error, failed to get all subjects");
		}
	}

	async incrementProgress(subjectId: number) {
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
		} catch (error) {
			console.log(error);
			throw new Error("Internal server error, failed to increment progress");
		}
	}

	async decrementProgress(subjectId: number) {
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
		} catch (error) {
			console.log(error);
			throw new Error("Internal server error, failed to decrement progress");
		}
	}
}

export default SubjectServices;
