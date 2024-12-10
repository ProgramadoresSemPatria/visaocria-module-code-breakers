import CoursesServices from "../services";
import prismaInstance from "../../../../models/prisma/db";
import { Request, Response } from "express";

const coursesServices = new CoursesServices(prismaInstance);

class CoursesController {
	async getAllCourses(req: Request, res: Response) {
		try {
			const courses = await coursesServices.getAllCourses();

			if (!courses || courses.length === 0) {
				return res.status(404).json({ message: "No courses found" });
			}

			res.status(200).json(courses);
		} catch (error) {
			console.log(error);
			res
				.status(500)
				.json({ message: "Internal server error, failed to get all courses" });
		}
	}
}

export default CoursesController;
