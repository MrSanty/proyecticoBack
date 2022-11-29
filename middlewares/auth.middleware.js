import { validationResult } from "express-validator";

export const loginMiddleware = ( req, res, next ) => {
  const errors = validationResult( req );

  if ( !errors.isEmpty() ) {
    const extractedErrors = errors.array().map( err => ({[ err.param ]: err.msg }));

    return res.status( 400 ).json({ errors: extractedErrors });
  }

  next();
}

export const verifyTokenService = async ( req, res, next ) => {
  try {
    const token = req.headers.authorization.split( " " )[ 1 ];
    const { _id, code, username } = await verifyToken( token );
    const client = await clientModel.findOne({ _id, code, username });
    if ( !client ) {
      return res.status( 403 ).json({ message: "Unauthorized" });
    }

    next();
  } catch ( error ) {
    return res.status( 403 ).json({ message: "Unauthorized" });
  }
}
   