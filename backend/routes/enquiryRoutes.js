import express from "express";
import Enquiry from "../models/Enquiry.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const enquiry = new Enquiry(req.body);

        const savedEnquiry = await enquiry.save();

        res.status(201).json({
            message: "Enquiry submitted successfully",
            enquiry: savedEnquiry
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to submit enquiry",
            error: error.message
        });
    }
});
router.get("/", async (req, res) => {
    try {
        const enquiries = await Enquiry.find().sort({ createdAt: -1 });

        res.status(200).json(enquiries);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch enquiries",
            error: error.message
        });
    }
});
router.patch("/:id/status", async (req, res) => {
    try {
        const { status } = req.body;

        const updatedEnquiry = await Enquiry.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );

        if (!updatedEnquiry) {
            return res.status(404).json({
                message: "Enquiry not found"
            });
        }

        res.status(200).json({
            message: "Enquiry status updated successfully",
            enquiry: updatedEnquiry
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update enquiry status",
            error: error.message
        });
    }
});
export default router;