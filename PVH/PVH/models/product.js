import mongoose from 'mongoose'
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    imagePath: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    isPipe: {
        type: Boolean,
        required: false,
    },
    isFilm: { 
        type: Boolean,
        required: false,
    },
})

const Product = mongoose.model('Product', productSchema)

export {
    Product,
}