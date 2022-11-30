import { loginService } from "../services/auth.service.js";


export const loginController = async ( { body: { code, username } }, res ) => {
  try {
    const token = await loginService({ code, username });
    res.status( 200 ).json({ token });
  } catch ( error ) {
    console.log( error );
    res.status( 500 ).json({ message: 'Error en el servidor, por favor contacte al desarrollador' });
  }
}