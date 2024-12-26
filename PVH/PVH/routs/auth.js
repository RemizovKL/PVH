import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createPath } from '../helpers/createPath.js';
import User from '../models/user.js';
import { generateToken } from '../helpers/jwt.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(express.static('styles'))

router.get("/login-admin", (req, res) => {
    res.sendFile(createPath("login"));
});

router.post('/login-admin', (req, res) => {
  const { username, password } = req.body;
  const user = User.findByUsername(username);

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = generateToken(user.username);
    res.cookie('token', token, { httpOnly: true });
    res.status(200).redirect("/admin-catalog");
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

// Доступ к этим маршрутам только после авторизации
router.get("/admin-catalog", authMiddleware, (req, res) => {
    // Логика для отображения каталога администратора
    res.send({message: "Catalog is empty"})
    // Здесь будет добавлен функционал позже
});

router.get("/admin-catalog/:id", authMiddleware, (req, res) => {
    // Логика для отображения конкретного элемента каталога администратора
    // Здесь будет добавлен функционал позже
});

export default router;
