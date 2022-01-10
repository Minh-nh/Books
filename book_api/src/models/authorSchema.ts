import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        email: String,
        phone: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Author = mongoose.model("Author", authorSchema, 'authors')

export default Author