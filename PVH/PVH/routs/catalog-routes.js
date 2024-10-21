import express from 'express'
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
router.post('/add-product', postAddProduct)
router.delete('/catalog/:id', deleteProduct)
router.get('/edit-product/:id', getEditProduct)
router.put('/edit-product/:id', putEditProduct)

export default router