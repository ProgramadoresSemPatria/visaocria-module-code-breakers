import express, { NextFunction } from "express";
import { Request, Response } from "express";
import ProblemsController from "../controllers";

const router = express.Router();
const problemsController = new ProblemsController();

router.post(
	"/problem/update-is-solved",
	async (req: Request, res: Response, next: NextFunction) => {
		await problemsController.updateProblemIsSolved(req, res);
		next();
	}
);

export default router;
