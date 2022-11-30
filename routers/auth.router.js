import Express from 'express';
import { validateLogin } from "../validator/auth.validator.js";
import { requestMiddleware } from '../middlewares/request.middleware.js';
import { loginController } from '../controllers/auth.controller.js';

const authRouter = Express.Router();

authRouter.post( '', validateLogin, requestMiddleware, loginController );

export default authRouter;