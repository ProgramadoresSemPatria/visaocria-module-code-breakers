import prismaInstance from "../../../../models/prisma/db";
export async function seedSubject() {
	const subjects = [
		{ roadmap_id: 1, title: "Arrays & Hashing", total_problems: 9 },
		{ roadmap_id: 1, title: "Two Pointers", total_problems: 5 },
		{ roadmap_id: 1, title: "Stack", total_problems: 7 },
		{ roadmap_id: 1, title: "Binary Search", total_problems: 7 },
		{ roadmap_id: 1, title: "Sliding Window", total_problems: 6 },
		{ roadmap_id: 1, title: "Linked List", total_problems: 11 },
		{ roadmap_id: 1, title: "Trees", total_problems: 15 },
		{ roadmap_id: 1, title: "Tries", total_problems: 3 },
		{ roadmap_id: 1, title: "Heap / Priority Queue", total_problems: 7 },
		{ roadmap_id: 1, title: "Intervals", total_problems: 6 },
		{ roadmap_id: 1, title: "Greedy", total_problems: 8 },
		{ roadmap_id: 1, title: "Advanced Graphs", total_problems: 6 },
		{ roadmap_id: 1, title: "Backtracking", total_problems: 9 },
		{ roadmap_id: 1, title: "Graphs", total_problems: 13 },
		{ roadmap_id: 1, title: "1-D DP", total_problems: 12 },
		{ roadmap_id: 1, title: "2-D DP", total_problems: 11 },
		{ roadmap_id: 1, title: "Bit Manipulation", total_problems: 7 },
		{ roadmap_id: 1, title: "Math & Geometry", total_problems: 8 },
	];

	await prismaInstance.subject.createMany({
		data: subjects,
	});
}
