import express from "express";
import { createOrder } from "./order.controller";

const router = express.Router();

// create a new order
router.post("/create-order", createOrder )

export default router;