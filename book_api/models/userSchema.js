import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    TenTK: String,
    MK: String,
    HoTen: String,
    SDT: String,
    Email: String,
    Address: String
})

const User = mongoose.model("User", userSchema, "users")

export default User