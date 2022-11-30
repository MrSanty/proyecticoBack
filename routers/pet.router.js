import Express from 'express';
import { validateCreatePet } from '../validator/pet.validator.js';
import { requestMiddleware } from '../middlewares/request.middleware.js';
import { getAllPetsWithoutOwnerController, createPetController } from '../controllers/pet.controller.js';

const PetRouter = Express.Router();

PetRouter.get( '/', getAllPetsWithoutOwnerController )
PetRouter.post( '/', validateCreatePet, requestMiddleware, createPetController );

export default PetRouter;