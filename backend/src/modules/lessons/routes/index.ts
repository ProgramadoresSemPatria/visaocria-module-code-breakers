import express, { NextFunction } from "express";
import { Request, Response } from "express";
import LessonsController from "../controllers";

const router = express.Router();
const lessonsController = new LessonsController();

router.get(
	"/lessons",
	async (req: Request, res: Response, next: NextFunction) => {
		await lessonsController.getAllLessons(req, res);
		next();
	}
);
export default router;
