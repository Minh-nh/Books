import mongoose from 'mongoose';

var publishingHouseSchema = new mongoose.Schema({
    name: String,
    description: String,
    address: String,
    email: String,
    hotline: String,
    logo: String
},
{
    versionKey: false
})

const PublishingHouse = mongoose.model("PublishingHouse", publishingHouseSchema, 'publishing_houses')

export default PublishingHouse