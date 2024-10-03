import { Router, Request, Response } from "express";

export const appRouter = (): Router => {
  const router = Router();

  router.get("/test", (req: Request, res: Response) => {
    res.send({ message: "miau" });
  });

  return router;
};
