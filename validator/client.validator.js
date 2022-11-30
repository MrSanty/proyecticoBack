import { check } from "express-validator";

export const validateUpdateOwnerNamePet = [
  check( "name" )
    .exists()
    .withMessage( "El nombre es requerido" )
    .isLength({ min: 2 }).withMessage( "El nombre de la mascota debe tener al menos 2 caracteres" )
];