import { Product } from '../models/product.js'
import { createPath, createEJSPath } from '../helpers/createPath.js'
import { handlerEror } from '../helpers/handlerError.js'


const getCatalog = (req, res) => { //+
    const title = 'Catalog'
    Product
        .find()
        .then((products) => res.render(createEJSPath('prList'), { title, products }))
        .catch((err) => handlerEror(res, err))
}

const getProduct = (req, res) => {
    console.log(`Product ID: ${req.params.id}`);
    const title = `Product: ${req.params.id}`
    Product
        .findById(req.params.id)
        .then((prod) => {res.render(createEJSPath('prCard'), { title, prod })})
        .catch((error) => handlerEror(res, error))
}

const getAddProduct = (req, res) => { // +
    const title = 'Add New Product'
    res.sendFile(createPath('crProduct'), { title })
}

const postAddProduct = async(req, res) => { // +
    let { name, description, isPipe, isFilm } = req.body
    if (isPipe == 'on'){
        isPipe = true;
    } else {
        isPipe = false;
    }
    if (isFilm == 'on'){
        isFilm = true;
    } else {
        isFilm = false;
    }
    const product = new Product({ name, 
        imagePath: req.file.filename, 
        description, 
        isPipe, 
        isFilm })
    product
        .save()
        .then((result) => res.redirect('/catalog'))
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
        .then(product => res.render(createPath('edit-product'), { title, product }))
        .catch((err) => handlerEror(res, err))
}

const putEditProduct = (req, res) => {
    const { image, diskription, cost } = req.body
    const id = req.params.id
    Product
        .findByIdAndUpdate(id, { image, diskription, cost })
        .then(result => res.redirect('/catalog'))
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