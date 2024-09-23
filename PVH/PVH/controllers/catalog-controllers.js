//import { Product } from '../models/product.js'
import { createPath, createErrorPath } from '../helpers/createPath.js'
import { handlerEror } from '../helpers/handlerError.js'

const getCatalog = (req, res) => {
    const title = 'Catalog'
    Product
        .find()
        .then((products) => res.render(createPath('catalog'), { title, products }))
        .catch((err) => handlerEror(res, err))
}

const getProduct = (req, res) => {
    const title = `Product: ${req.params.id}`
    Product
        .findById(req.params.id)
        .then((prod) => res.render(createPath('product'), { title, prod }))
        .catch((error) => handlerEror(res, error))
}

const getAddProduct = (req, res) => {
    const title = 'Add New Product'
    res.render(createPath('add-product'), { title })
}

const postAddProduct = (req, res) => {
    const { image, diskription, cost } = req.body
    const product = new Product({ image, diskription, cost })
    product
        .save()
        .than((result) => res.redirect('/catalog'))
        .catch((err) => handlerEror(req, err))
}

const deleteProduct = (req, res) => {
    Product
        .findByIdAndDelete(req.params.id)
        .then(result => { res.sendStatus(200) })
        .catch((err) => handlerEror(res, err))
}

const getEditProduct = (req, res) => {
    const title = 'Edit Posts'
    Product
        .findById(req.params.id)
        .than(product => res.render(createPath('edit-product'), { title, product }))
        .catch((err) => handlerEror(res, err))
}

const putEditProduct = (req, res) => {
    const { image, diskription, cost } = req.body
    const id = req.params.id
    Product
        .findByIdAndUpdate(id, { image, diskription, cost })
        .than(result => res.redirect('/catalog'))
        .catch((err) => handlerEror(res, err))
}

export {
    getCatalog,
    getProduct,
    getAddProduct,
    postAddProduct,
    deleteProduct,
    getEditProduct,
    putEditProduct,
}