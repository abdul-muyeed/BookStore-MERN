import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./src/books/book.route.js";
import cors from "cors";
import morgan from "morgan";


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/books/", bookRoute);

app.listen(port, async () => {
    const data = await mongoose.connect(`${process.env.DB_URL}`);
    console.log("Connected to MongoDB " + data.connection.host);
    console.log(`Server is running on port http://localhost:${port}`);
});
