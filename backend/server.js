import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const PORT = 9000;

app.use(cors());
app.use(express.json());
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "ShifoPath India Backend is Running!"
    });
});
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});