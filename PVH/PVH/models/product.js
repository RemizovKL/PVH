import mongoose from 'mongoose'
const Schema = Mongoose.Schema

const productSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    diskription: {
        type: String,
        required: true,
    },
    cost: {
        type: Int8Array,
        required: true
    },
})

const Product = mongoose.model('Product', productSchema)

export {
    Product,
}