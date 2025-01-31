import express from "express";
import { createAdmin } from "./user.controller.js";

const router = express.Router();

router.post("/admin",createAdmin)

export default router;