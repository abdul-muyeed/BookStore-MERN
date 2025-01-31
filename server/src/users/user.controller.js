import { User } from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });
    if (!admin) return res.status(404).send({ message: "Admin not found" });

    if (!bcrypt.compareSync(password, admin.password)) {
      return res.status(404).send({ message: "Wrong Password" });
    }
    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
      "secert",
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).send({ message: "Admin Found", token, data: admin });
  } catch (e) {
    console.log(e);
    return res.status(401).send({ message: "Failed to login as admin" });
  }
};
