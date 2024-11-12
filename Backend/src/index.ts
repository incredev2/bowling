import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { router } from "./routes";

dotenv.config();
const { PORT = 3000 } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/v1", router);

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
