import { PrismaClient } from "@prisma/client";

class RoadmapServices {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async getAllRoadmap() {
		try {
			const roadmap = await this.prisma.roadmap.findMany({
				include: {
					subjects: {
						include: {
							prerequisites: true,
							problems: true,
						},
					},
				},
			});

			if (!roadmap || roadmap.length === 0) {
				return [];
			}

			return roadmap;
		} catch (error) {
			console.log(error);
			throw new Error("Internal server error, failed to get all roadmaps");
		}
	}
}

export default RoadmapServices;
