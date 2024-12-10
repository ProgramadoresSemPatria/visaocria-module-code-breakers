import { PrismaClient, Courses } from "@prisma/client";

class CoursesServices {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async getAllCourses(): Promise<Courses[]> {
		try {
			const courses = await this.prisma.courses.findMany();

			if (!courses || courses.length === 0) {
				return [];
			}

			return courses;
		} catch (error) {
			console.log(error);
			throw new Error("Internal server error, failed to get all courses");
		}
	}
}

export default CoursesServices;
