import Express from 'express';
import { getAllPetsWithoutOwnerController, createPetController } from '../controllers/pet.controller.js';
import { requestMiddleware } from '../middlewares/request.middleware.js';
import { validateCreatePet } from '../validator/pet.validator.js';

const PetRouter = Express.Router();

PetRouter.get( '/', getAllPetsWithoutOwnerController)
PetRouter.post( '/', validateCreatePet, requestMiddleware, createPetController );

export default PetRouter;