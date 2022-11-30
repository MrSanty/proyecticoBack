import { check } from "express-validator";
import petModel from "../models/pet.model.js";

const uniquePetCode = async ( code ) => {
  const pet = await petModel.findOne({ code });
  if ( pet ) {
    throw new Error( 'El código de la mascota ya existe' );
  }
};

export const validateCreatePet = [
  check( 'code' )
    .exists().withMessage( 'El código de la mascota es requerido' )
    .isNumeric().withMessage( 'El código de la mascota debe ser numérico' )
    .custom( uniquePetCode ),

  check( "name" )
    .exists().withMessage( "El nombre es requerido" )
    .isLength({ min: 2 }).withMessage( "El nombre de la mascota debe tener al menos 2 caracteres" ),
  
  check( "age" )
    .exists().withMessage( "La edad es requerida" )
    .isInt({ min: 0 }).withMessage( "La edad debe ser un número entero mayor o igual a 0" ),

  check( "type" )
    .exists().withMessage( "El tipo es requerido" )
    .isIn([ 'perro', 'gato' ]).withMessage( "El tipo de mascota debe ser perro o gato" ),
];