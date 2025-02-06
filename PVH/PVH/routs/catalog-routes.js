import express from 'express'
import multer from "multer"
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

const upload = multer({ dest: 'product_images/' });

// ������������ � �����
router.get('/catalog', getCatalog)
router.get('/catalog/:id', getProduct)

//�����
router.get('/add-product', getAddProduct)
router.post('/add-product', upload.single('file'), postAddProduct)
router.delete('/catalog/:id', deleteProduct)
router.get('/edit-product/:id', getEditProduct)
router.put('/edit-product/:id', putEditProduct)

export default router