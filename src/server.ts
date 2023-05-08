import express from "express";
import "express-async-errors";
import cors from "cors";
import path from "path";
import { errorMiddleware } from "./middlewares/error";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use(errorMiddleware);

app.listen(3333, () => console.log("Server on-line!"));
