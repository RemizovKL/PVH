import express from 'express'
import upload from '../helpers/multer.js'
import {
    getCatalog,
    getProduct,
    getAddProduct,
    postAddProduct,
    deleteProduct,
    getEditProduct,
    putEditProduct,
} from '../controllers/catalog-controllers.js'
const router = express.Router()

// ������������ � �����
router.get('/catalog', getCatalog)
router.get('/catalog/:id', getProduct)

//�����
router.get('/add-product', getAddProduct)
router.post('/add-product', upload, postAddProduct)
router.delete('/catalog/:id', deleteProduct)
router.get('/edit-product/:id', getEditProduct)
router.post('/edit-product/:id', upload, putEditProduct)

export default router