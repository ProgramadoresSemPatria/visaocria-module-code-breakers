import ProblemsServices from "../services";
import prismaInstance from "../../../../models/prisma/db";
import { Request, Response } from "express";

const problemsServices = new ProblemsServices(prismaInstance);

class ProblemsController {
	async updateProblemIsSolved(req: Request, res: Response): Promise<void> {
		const { subjectId, problemTitle, status } = req.body;

        console.log('teste', req.body);

		try {
			await problemsServices.updateProblemIsSolved(
				subjectId,
				problemTitle,
				status
			);
			res.status(200).json({ message: "Problem status updated successfully" });
		} catch (error) {
			console.error("Error updating problem status:", error);
			res.status(500).json({ message: "Internal server error" });
		}
	}
}

export default ProblemsController;
