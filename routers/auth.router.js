import { requestMiddleware } from '../middlewares/request.middleware.js';
import { loginController } from '../controllers/auth.controller.js';
import { validateLogin } from "../validator/auth.validator.js";
import Express from 'express';

const authRouter = Express.Router();

authRouter.post( '', validateLogin, requestMiddleware, loginController );

export default authRouter;