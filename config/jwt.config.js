import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const { JWT_SECRET } = process.env;

export const generateToken = ( payload ) => {
  return Jwt.sign( payload, JWT_SECRET, { expiresIn: '1h' } );
};

export const verifyToken = ( token ) => {
  return Jwt.verify( token, JWT_SECRET );
};

export const refreshToken = ( payload ) => {
  return generateToken( payload );
}