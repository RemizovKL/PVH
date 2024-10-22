import path from 'path';
import express from 'express';
import methodOverride from 'method-override';
import mongoose from 'mongoose';
import morgan from 'morgan';
import 'dotenv/config';
import { createPath, createErrorPath } from './helpers/createPath.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routs/auth.js';
import catalogRoutes from './routs/catalog-routes.js';

const app = express();

app.set('view engine', 'ejs');

mongoose
    .connect(process.env.MONGO_URL)
    .then(res => console.log('Connected to PVH MONGO_DB'))
    .catch((err) => console.log(err));

app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log(`connected to port 3000, we are online`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.static('product_card_page'));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use(express.json());
app.use(cookieParser());
app.use(express.static('vievs')); // Для статических файлов

app.use(authRoutes);
app.use(catalogRoutes);

app.get('/', (req, res) => {
    const title = 'Home Page';
    res.sendFile(path.resolve('.', 'product_card_page', 'index.html'));
});

app.get('/about-us', (req, res) => {
    // Логика для страницы "О нас"
});

app.get('/contacts', (req, res) => {
    // Логика для страницы "Контакты"
});

app.use((req, res) => {
    // Обработка 404 (страница не найдена)
    res.status(404).sendFile(createPath("not_found"));
});

// Обработка ошибок
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).sendFile(createPath("server_error"));
});
