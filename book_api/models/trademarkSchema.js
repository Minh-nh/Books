import mongoose from 'mongoose';

const trademarkSchema = new mongoose.Schema({
    TenTH : String,
    Logo : String,
    MoTa : String
})

const Trademark = mongoose.model("Trademark", trademarkSchema)

export default Trademark