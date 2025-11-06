// Set up methods to sign and verify JWTs to ensure user identity after log in
import jwt from 'jsonwebtoken';
import logger from '#config/logger.js';

const JWT_SECRET = process.env.JWT_SECRET || 'please-set-up-in-production'; // secret used to sign JWTs
const JWT_EXPIRES_IN = '1d';

export const jwtToken = {
  sign: payload => {
    try {
      return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    } catch (e) {
      logger.error('Failed to authenticate JWT', e);
      throw new Error('Failed to authenticate JWT');
    }
  },
  verify: token => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (e) {
      logger.error('Failed to authenticate JWT', e);
      throw new Error('Failed to authenticate JWT');
    }
  },
};
