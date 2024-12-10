import { PrismaClient, Lessons } from "@prisma/client";

class LessonsServices {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async getAllLessons(): Promise<Lessons[]> {
		try {
			const lessons = await this.prisma.lessons.findMany();

			if (!lessons || lessons.length === 0) {
				return [];
			}

			return lessons;
		} catch (error) {
			console.log(error);
			throw new Error("Internal server error, failed to get all lessons");
		}
	}
}

export default LessonsServices;
