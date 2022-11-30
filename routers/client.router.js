import Express from 'express';
import { validateUpdateOwnerNamePet } from '../validator/client.validator.js';
import { verifyTokenMiddleware } from '../middlewares/auth.middleware.js';
import { requestMiddleware } from '../middlewares/request.middleware.js';
import { adoptPetController, listPetsByOwnerController, updateOwnerPetNameController, deletePetOwnerController } from '../controllers/client.crontroller.js';

const clientRouter = Express.Router();

clientRouter.get( '/', verifyTokenMiddleware, listPetsByOwnerController );
clientRouter.post( '/:petId', verifyTokenMiddleware, adoptPetController );
clientRouter.put( '/:petId', validateUpdateOwnerNamePet, requestMiddleware, verifyTokenMiddleware, updateOwnerPetNameController );
clientRouter.delete( '/:petId', verifyTokenMiddleware, deletePetOwnerController );

export default clientRouter;