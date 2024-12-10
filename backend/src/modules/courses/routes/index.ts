import express, { NextFunction } from "express";
import CoursesController from "../controllers";
import { Request, Response } from "express";

const router = express.Router();
const coursesController = new CoursesController();

router.get("/courses", async (req: Request, res: Response, next: NextFunction) => {
	await coursesController.getAllCourses(req, res);
	next();
  });
export default router;
