import prismaInstance from "./db";
async function main() {
	// console.log("Seeding database...");
	// await seedCourses();
	// console.log("Seeding courses...");
	// await seedLessons();
	// console.log("Seeding lessons...");
	// await seedRoadmap();
	// await seedSubject();
	// await seedPrerequisites();
	// await seedProblems();

	// console.log("Seed completed");
}
main()
	.then(async () => {
		await prismaInstance.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prismaInstance.$disconnect();
		process.exit(1);
	});
