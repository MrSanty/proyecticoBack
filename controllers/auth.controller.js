import { loginService } from "../services/auth.service.js";


export const loginController = async ( { body: { code, username } }, res ) => {
  try {
    const token = await loginService({ code, username });
    res.status( 200 ).json({ token });
  } catch ( error ) {
    console.log( error );
    res.status( 500 ).json({ message: 'Hubo un error, por favor contacte al desarrollador' });
  }
}