import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    NgayBan: String,
    DanhSachSanPham:[{
        SanPham:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        SoLuong: Number
    }],
    DiaChi: String,
    TrangThai: String
})

const Order = mongoose.model("Order", orderSchema, "orders")

export default Order