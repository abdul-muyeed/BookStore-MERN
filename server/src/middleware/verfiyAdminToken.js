import jwt from "jsonwebtoken";

export const verifyAdminToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "Access Denied, No token found" });
  }
  jwt.verify(token, "secert", (err, user) => {
    if (err) {
      return res.status(403).send({ message: "invalid token" });
    }
    req.user = user;
    next();
  });
};


