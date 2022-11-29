import { generateToken, verifyToken } from "../config/jwt.config.js";
import clientModel from "../models/client.model.js";


export const loginService = async ( user ) => {
  try {
    const client = await clientModel.findOne( user );
    if ( !client ) {
      const newClient = new clientModel( user );
      const { _id, code, username } = await newClient.save();
      return generateToken({ _id, code, username });
    } else {
      return generateToken({ _id: client._id, code: client.code, username: client.username });
    }
  } catch ( error ) {
    throw error;
  }
}; 