import { Router } from "express";
import {createNotes} from "../controllers/note.controller.js";

const router = new Router();

router.route("/notes").post(createNotes);

export default router;
