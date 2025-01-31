import express from "express";
import { createOrder, deleteOrder, getOrderByEmail, getOrders, updateOrder } from "./order.controller.js";

const router = express.Router();

// create a new order
router.post("/", createOrder )
router.get("/get-orders", getOrders)
router.get("/email/:email", getOrderByEmail)
router.put("/update-order/:id", updateOrder)
router.delete("/delete-order/:id", deleteOrder)


export default router;