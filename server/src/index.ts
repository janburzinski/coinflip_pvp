import express from "express";
import morgan from "morgan";
import { appRouter } from "./router/appRouter";
import dotenv from "dotenv";
import path from "path";

const startServer = () => {
  const app = express();

  dotenv.config({ path: path.resolve(__dirname, "..", ".env") });
  const requiredEnvVars = ["SERVER_PORT", "DATABASE_URL"];
  requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      throw new Error(`Missing environment variable: ${varName}`);
    }
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("tiny"));
  app.use("/api/v1", appRouter());

  app.listen(8080, () => {
    console.log("Server listening on port 8080");
  });
};

startServer();
