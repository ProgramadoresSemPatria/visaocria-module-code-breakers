import express, { NextFunction } from "express";
import RoadmapController from "../controllers";
import { Request, Response } from "express";

const router = express.Router();
const roadmapController = new RoadmapController();

router.get(
	"/roadmap",
	async (req: Request, res: Response, next: NextFunction) => {
		await roadmapController.getAllRoadmap(req, res);
		next();
	}
);
export default router;
