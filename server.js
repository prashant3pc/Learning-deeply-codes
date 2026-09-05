import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

connectDB();
const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
