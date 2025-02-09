import multer from 'multer';
import { join } from 'path';

// Настройка multer для сохранения файлов с их оригинальными именами
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./product_images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+"_"+file.originalname);
    }
});

const upload = multer({ storage: storage }).single('prImage');

export default upload;