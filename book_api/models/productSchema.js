import mongoose from 'mongoose';

var productSchema = new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
    publishing_house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PublishingHouse"
    },
    publish_year: String,
    buy_year: String,
    tag: Array,
    status: String,
    number_of_borrowed: Number,
    state: Boolean,
    picture: String,
},
{
    versionKey: false
})

const Product = mongoose.model("Product", productSchema, 'books')

export default Product