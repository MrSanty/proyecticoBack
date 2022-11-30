import { adoptPetService, deletePetOwnerService, listPetsByOwnerService, updateOwnerPetNameService } from "../services/client.service.js";


export const listPetsByOwnerController = async ( req, res ) => {
  try {
    const pets = await listPetsByOwnerService( req.user._id );
    const { token } = req;
    res.status( 200 ).json({ pets, token });
  } catch ( error ) {
    console.log( error );
    res.status( 500 ).json({ message: 'Hubo un error, por favor contacte al desarrollador' });
  }
}

export const adoptPetController = async ( req, res ) => {
  try {
    const { petId } = req.params;
    const { user: { _id: userId }, token } = req;
    const pet = await adoptPetService( userId, petId );
    res.status( 200 ).json({ ok: true, token });
  } catch ( error ) {
    console.log( error );
    res.status( 500 ).json({ message: 'Hubo un error, por favor contacte al desarrollador' });
  }
}

export const updateOwnerPetNameController = async ( req, res ) => {
  try {
    const { petId } = req.params;
    const { name } = req.body;
    const { token } = req;
    const pet = await updateOwnerPetNameService( petId, name );
    res.status( 200 ).json({ ok: true, token });
  } catch ( error ) {
    console.log( error );
    res.status( 500 ).json({ message: 'Hubo un error, por favor contacte al desarrollador' });
  }
}

export const deletePetOwnerController = async ( req, res ) => {
  try {
    const { petId } = req.params;
    const { user: { _id: userId }, token } = req;
    const pet = await deletePetOwnerService( userId, petId );
    res.status( 200 ).json({ ok: true, token });
  } catch ( error ) {
    console.log( error );
    res.status( 500 ).json({ message: 'Hubo un error, por favor contacte al desarrollador' });
  }
}