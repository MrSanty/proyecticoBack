import { loginController } from '../controllers/auth.controller.js';
import { loginMiddleware } from '../middlewares/auth.middleware.js';
import { validateLogin } from "../validator/auth.validator.js";
import Express from 'express';

const authRouter = Express.Router();

authRouter.post( '', validateLogin, loginMiddleware, loginController );

export default authRouter;