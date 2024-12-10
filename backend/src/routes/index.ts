import { Application, Request, Response } from "express";
import coursesRoutes from "../../src/modules/courses/routes";
import lessonsRoutes from "../../src/modules/lessons/routes";
import roadmapRoutes from "../../src/modules/roadmap/routes";
import subjectRoutes from "../../src/modules/subject/routes";
import problemsRoutes from "../../src/modules/problem/routes";
import express from "express";
import cors from "cors";

const setupRoutes = (app: Application) => {
	app.get("/server-test", (req: Request, res: Response) => {
		res.status(200).json({ message: "Hello World!" });
	});

	app.use(
		cors(),
		express.json(),
		coursesRoutes,
		lessonsRoutes,
		roadmapRoutes,
		subjectRoutes,
		problemsRoutes
	);
};

export default setupRoutes;
