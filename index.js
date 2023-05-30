import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import MTMA from "./routes/MTMA.js";

const app = express();
dotenv.config();
connectDB();
app.use(express.json({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use("/api", MTMA);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
