import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/user.route.js";
import notesRouter from "./routes/note.route.js"

app.use("/api/v1/users", userRouter);
app.use("/api/v1/users/notes",notesRouter)

// http://localhost:8000/api/v1/users/+ defined routes
export { app };
