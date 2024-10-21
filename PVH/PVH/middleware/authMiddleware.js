import jwt from 'jsonwebtoken';
import { verifyToken } from '../helpers/jwt.js';

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send({ message: 'Unauthorized' });
  }
};

export { authMiddleware };
