import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async (next) =>  {
  if (this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 12);
  next();
});


export const User = mongoose.model("User", userSchema);
