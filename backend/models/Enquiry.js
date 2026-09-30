import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },

        country: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        },

        email: {
            type: String
        },

        service: {
            type: String,
            required: true
        },

        message: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: ["New", "Contacted", "In Progress", "Completed"],
            default: "New"
        }
    },
    {
        timestamps: true
    }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;