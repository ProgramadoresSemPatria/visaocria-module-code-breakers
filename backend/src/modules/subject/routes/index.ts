import express, { NextFunction } from "express";
import { Request, Response } from "express";
import SubjectController from "../controllers";

const router = express.Router();
const subjectController = new SubjectController();

router.get(
	"/subject/:title",
	async (req: Request, res: Response, next: NextFunction) => {
		await subjectController.getSubjectByTitle(req, res);
		next();
	}
);

router.post(
	"/subject/increment-progress/:subjectId",
	async (req: Request, res: Response, next: NextFunction) => {
		await subjectController.incrementProgress(req, res);
		next();
	}
);

router.post(
	"/subject/decrement-progress/:subjectId",
	async (req: Request, res: Response, next: NextFunction) => {
		await subjectController.decrementProgress(req, res);
		next();
	}
);
export default router;
