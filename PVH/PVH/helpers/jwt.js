import jwt from 'jsonwebtoken';

const SECRET_KEY = '3517'; // Замените на ваш секретный ключ
const EXPIRATION_TIME = '30m'; // 30 минут

export const generateToken = (username) => {
    return jwt.sign({ username }, SECRET_KEY, { expiresIn: EXPIRATION_TIME });
};
  
export const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};
