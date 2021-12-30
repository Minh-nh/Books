import mongoose from 'mongoose';

var borrowedTicketSchema = new mongoose.Schema({
    librarian: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Librarian"
    },
    CMND_reader: String,
    name_reader: String,
    email_reader: String,
    phone_reader: String,
    array_books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    date_borrowing: String,
    out_of_date: String,
    state: Boolean
},
    {
        versionKey: false
    })

const BorrowedTicket = mongoose.model("BorrowedTicket", borrowedTicketSchema, 'borrowed_ticketes')

export default BorrowedTicket