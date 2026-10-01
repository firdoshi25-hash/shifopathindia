import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "ShifoPath India Backend is Running!"
    });
});

app.get("/health", (req, res) => {
    const databaseConnected = mongoose.connection.readyState === 1;

    res.status(databaseConnected ? 200 : 503).json({
        status: databaseConnected ? "ok" : "database_unavailable"
    });
});

async function startServer() {
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is required");
    }

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is required");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}

startServer().catch((error) => {
    console.error("Backend startup failed:", error.message);
    process.exit(1);
});