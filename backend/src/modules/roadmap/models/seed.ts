import prismaInstance from "../../../../models/prisma/db";
export async function seedRoadmap() {
	await prismaInstance.roadmap.create({
		data: {
			title: "Algorithms",
			total_problems: 150,
		},
	});
}
