import express from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json'
import "express-async-errors";
import cors from "cors";
import path from "path";
import { errorMiddleware } from "./middlewares/error";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use(errorMiddleware);

app.listen(3333, () => console.log("Server on-line!"));
