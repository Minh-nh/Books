import mongoose from 'mongoose';

var productSchema = new mongoose.Schema({
    name: String,
    author: String,
    publishing_house: String,
    publish_year: Date,
    buy_year: Date,
    tags: Array,
    status: String,
    number_of_borrowed: Number,
    state: Boolean,
    picture: String,
},
{
    versionKey: false
})

const Product = mongoose.model("Product", productSchema)

export default Product