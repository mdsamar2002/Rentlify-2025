import { Router } from "express";
import {logIn, signUp, logOut}  from "../controllers/user.controller.js";

const router = new Router();

router.route("/signup").get(signUp);
router.route("/login").get(logIn);
router.route("/logout").get(logOut);

export default router;
