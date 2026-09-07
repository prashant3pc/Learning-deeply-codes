import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import myMiddleware from "./middlleware/logger.js";

const app = express();
app.use(express.json());

app.use(myMiddleware);
app.use(userRoutes);

connectDB();
const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
