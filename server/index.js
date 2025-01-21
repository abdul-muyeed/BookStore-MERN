import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
    const data = await mongoose.connect(`${process.env.DB_URL}`);
    console.log("Connected to MongoDB " + data.connection.host);
    console.log(`Server is running on port http://localhost:${port}`);
});
