import { check } from 'express-validator';

export const validateLogin = [
  check( 'code', 'El código es obligatorio' )
    .not()
    .isEmpty(),
  check( 'username', 'El nombre de usuario es obligatorio' )
    .not()
    .isEmpty(),
];