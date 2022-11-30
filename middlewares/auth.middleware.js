import { refreshToken, verifyToken } from "../config/jwt.config.js";
import clientModel from "../models/client.model.js";

export const verifyTokenMiddleware = async ( req, res, next ) => {
  try {
    const token = req.headers.authorization.split(" ")[ 1 ];
    const { _id, code, username } = await verifyToken( token );
    const client = await clientModel.findOne({ _id, code, username });
    if ( !client ) {
      return res.status( 403 ).json({ message: "Unauthorized" });
    }
    req.user = client;
    req.token = refreshToken({ _id, code, username });
    next();
  } catch ( error ) {
    console.log( error );
    return res.status( 403 ).json({ message: "Unauthorized" });
  }
}
   