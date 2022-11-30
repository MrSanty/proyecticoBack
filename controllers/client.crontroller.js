import { adoptPetService, deletePetOwnerService, listPetsByOwnerService, updateOwnerPetNameService } from "../services/client.service.js";

export const listPetsByOwnerController = async ( { user: { _id }, token }, res ) => {
  try {
    const pets = await listPetsByOwnerService( _id );
    res.status( 200 ).json({ pets, token });
  } catch ({ message }) {
    res.status( 500 ).json({ message: 'Error en el servidor, por favor contacte al desarrollador' });
  }
}

export const adoptPetController = async ( req, res ) => {
  try {
    const { petId } = req.params;
    const { user: { _id: userId }, token } = req;
    await adoptPetService( userId, petId );
    res.status( 200 ).json({ ok: true, token });
  } catch ({ message }) {
    if ( message === 'Mascota no encontrados' || message === 'La mascota ya pertenece al usuario' ) 
      return res.status( 404 ).json({ message });
    res.status( 500 ).json({ message: 'Error en el servidor, por favor contacte al desarrollador' });
  }
}

export const updateOwnerPetNameController = async ( req, res ) => {
  try {
    const { petId } = req.params;
    const { name } = req.body;
    const { user: { _id: userId }, token } = req;
    await updateOwnerPetNameService( userId, petId, name );
    res.status( 200 ).json({ ok: true, token });
  } catch ({ message }) {
    if ( message === 'Mascota no encontrada' ) return res.status( 404 ).json({ message });
    res.status( 500 ).json({ message: 'Error en el servidor, por favor contacte al desarrollador' });
  }
}

export const deletePetOwnerController = async ( req, res ) => {
  try {
    const { petId } = req.params;
    const { user: { _id: userId }, token } = req;
    await deletePetOwnerService( userId, petId );
    res.status( 200 ).json({ ok: true, token });
  } catch ({ message }) {
    if ( message === 'Mascota no encontrados' ) return res.status( 404 ).json({ message });
    res.status( 500 ).json({ message: 'Error en el servidor, por favor contacte al desarrollador' });
  }
}