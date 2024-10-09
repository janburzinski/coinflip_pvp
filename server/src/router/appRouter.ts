import { Router, Request, Response } from "express";
import { me } from "../auth/authRouter";

export const appRouter = (): Router => {
  const router = Router();

  //auth routes
  router.get("/me", me);

  router.get("/test", (_req: Request, res: Response) => {
    res.send({ message: "miau" });
  });

  return router;
};
