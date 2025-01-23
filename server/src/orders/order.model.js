import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { 
        street: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
     },
     phone: { type: String, required: true },
    orderItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
      },
    ],
    totalPrice: { type: Number, required: true },
    paymentMethod: { type: String, required: true },


  },
  {
    timestamps: true,
  }
);


export const Order = mongoose.model("Order", orderSchema);