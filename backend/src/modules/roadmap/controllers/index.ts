import RoadmapServices from "../services";
import prismaInstance from "../../../../models/prisma/db";
import { Request, Response } from "express";

const roadmapServices = new RoadmapServices(prismaInstance);

class RoadmapController {
	async getAllRoadmap(req: Request, res: Response) {
		try {
			const roadmap = await roadmapServices.getAllRoadmap();

			if (!roadmap || roadmap.length === 0) {
				return res.status(404).json({ message: "No roadmap found" });
			}

			res.status(200).json(roadmap);
		} catch (error) {
			console.log(error);
			res
				.status(500)
				.json({ message: "Internal server error, failed to get all roadmaps" });
		}
	}
}

export default RoadmapController;
