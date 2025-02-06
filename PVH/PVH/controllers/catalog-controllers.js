import { Product } from '../models/product.js'
import { createPath, createEJSPath } from '../helpers/createPath.js'
import { handlerEror } from '../helpers/handlerError.js'
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getCatalog = (req, res) => { //+
    const title = 'Catalog'
    Product
        .find()
        .then((products) => res.render(createEJSPath('prList'), { title, products }))
        .catch((err) => handlerEror(res, err))
}

const getProduct = (req, res) => {
    const title = `Product: ${req.params.id}`
    console.log(req.params.id)
    Product
        .findById(req.params.id)
        .then((prod) => res.render(createEJSPath('prCard'), { prod }))
        .catch((error) => handlerEror(res, error))
}

const getAddProduct = (req, res) => { // +
    const title = 'Add New Product'
    res.sendFile(createPath('crProduct'), { title })
}

const postAddProduct = async(req, res) => { // +
    let { name, description, isPipe, isFilm } = req.body
    if (isPipe == "on") {
        isPipe = true
    }
    let imagePath = '';

    if (req.file) {
        // Если пользователь выбрал файл
        imagePath = join(__dirname, 'product_images', req.file.filename);
    } else if (req.body.url) {
        // Если пользователь ввел URL
        const url = req.body.url;
        const response = await fetch(url);
        if (response.ok) {
            const buffer = await response.buffer();
            imagePath = path.join(__dirname, 'product_images', 'downloaded_image.jpg');
            fs.writeFileSync(imagePath, buffer);
        }
    }

    if (imagePath) {
        console.log(`Изображение успешно загружено и сохранено как ${imagePath}`);
    } else {
        console.log('Не удалось загрузить файл или URL.');
    }
    const product = new Product({ name, imagePath, description, isPipe, isFilm })
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