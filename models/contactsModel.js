import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        about: {
            type: String,
            require: true,
        },
        rating: {
            type: Number,
            require: true,
        },
        projects: {
            type: Number,
            require: true,
        },
        experience: {
            type: Number,
            require: true,
        },
        price: {
            type: String,
            require: true,
        },
        contacts: {
            type: [],
            require: true,
        },
    },
    { timestamps: true }
)
export default mongoose.model("contacts", contactSchema);