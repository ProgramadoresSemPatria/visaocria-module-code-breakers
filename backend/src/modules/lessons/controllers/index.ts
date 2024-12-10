import LessonsServices from "../services";
import prismaInstance from "../../../../models/prisma/db";
import { Request, Response } from "express";

const lessonsServices = new LessonsServices(prismaInstance);

class LessonsController {
	async getAllLessons(req: Request, res: Response) {
		try {
			const lessons = await lessonsServices.getAllLessons();

			if (!lessons || lessons.length === 0) {
				return res.status(404).json({ message: "No lessons found" });
			}

			res.status(200).json(lessons);
		} catch (error) {
			console.log(error);
			res
				.status(500)
				.json({ message: "Internal server error, failed to get all lessons" });
		}
	}
}

export default LessonsController;
