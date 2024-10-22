import jwt from 'jsonwebtoken';
import { createPath } from '../helpers/createPath.js';
import { verifyToken } from '../helpers/jwt.js';

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).sendFile(createPath("unauthorized"));
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).sendFile(createPath("unauthorized"));
  }
};

export { authMiddleware };
