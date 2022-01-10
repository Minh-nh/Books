import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        name: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author"
        },
        publishing_house: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PublishingHouse"
        },
        tag: [String],
        publish_year: String,
        buy_year: String,
        status: String,
        number_of_borrowed: Number,
        state: Boolean,
        picture: String,
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Book = mongoose.model("Book", bookSchema, "books");

export default Book;