import mongoose from 'mongoose';

const librarianSchema = new mongoose.Schema(
    {
        name: String,
        CMND: String,
        phone_number: String,
        gender: Boolean,
        birthday: String,
        email: String,
        address: String,
        password: String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Librarian = mongoose.model("Librarian", librarianSchema, "librarians")

export default Librarian