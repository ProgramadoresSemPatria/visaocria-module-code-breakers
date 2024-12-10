import SubjectServices from "../services";
import prismaInstance from "../../../../models/prisma/db";
import { Request, Response } from "express";

const subjectServices = new SubjectServices(prismaInstance);

class SubjectController {
	async getSubjectByTitle(req: Request, res: Response) {
		const { title } = req.params;

		if (!title) {
			return res.status(400).json({ message: "Title parameter is missing" });
		}

		try {
			const subject = await subjectServices.getSubjectByTitle(title);

			if (!subject) {
				return res.status(404).json({ message: "No subject found" });
			}

			res.status(200).json(subject);
		} catch (error) {
			console.error("Error fetching subject:", error);
			res
				.status(500)
				.json({ message: "Internal server error, failed to get subject" });
		}
	}

	async incrementProgress(req: Request, res: Response) {
		const { subjectId } = req.params;

		if (!subjectId) {
			return res
				.status(400)
				.json({ message: "Subject ID parameter is missing" });
		}

		try {
			await subjectServices.incrementProgress(Number(subjectId));
			res.status(200).json({ message: "Progress incremented successfully" });
		} catch (error) {
			console.error("Error incrementing progress:", error);
			res.status(500).json({
				message: "Internal server error, failed to increment progress",
			});
		}
	}

	async decrementProgress(req: Request, res: Response) {
		const { subjectId } = req.params;

		if (!subjectId) {
			return res
				.status(400)
				.json({ message: "Subject ID parameter is missing" });
		}

		try {
			await subjectServices.decrementProgress(Number(subjectId));
			res.status(200).json({ message: "Progress decremented successfully" });
		} catch (error) {
			console.error("Error decrementing progress:", error);
			res.status(500).json({
				message: "Internal server error, failed to decrement progress",
			});
		}
	}
}

export default SubjectController;
