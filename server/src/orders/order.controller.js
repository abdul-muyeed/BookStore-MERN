import { Order } from "./order.model.js";


const createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);
        return res.status(201).send(newOrder);
        
    } catch (e) {
        return res.status(500).send(e.message);
        
    }
}

export { createOrder };