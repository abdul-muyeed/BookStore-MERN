import { Order } from "./order.model.js";


export const createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);
        return res.status(201).send(newOrder);
        
    } catch (e) {
        return res.status(500).send(e.message);
        
    }
}

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        return res.status(200).send(orders);
        
    } catch (e) {
        return res.status(500).send(e.message);
        
    }
}

export const getOrderByEmail = async (req, res) => {
    try {
        const order = await Order.find({ email: req.params.email });
        return res.status(200).send(order);
        
    } catch (e) {
        return res.status(500).send(e.message);
        
    }
}

export const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(updatedOrder);
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

export const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        return res.status(200).send("Order deleted");
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

