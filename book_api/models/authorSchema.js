import mongoose from 'mongoose';

var authorSchema = new mongoose.Schema({
    name: String,
    description: String,
    email: String,
    phone: String
},
{
    versionKey: false
})

const Author = mongoose.model("Author", authorSchema, 'authors')

export default Author