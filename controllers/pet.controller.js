import { createPetService, getAllPetsWithoutOwnerService } from "../services/pet.service.js";


export const getAllPetsWithoutOwnerController = async ( req, res ) => {
  try {
    const pets = await getAllPetsWithoutOwnerService();
    res.status( 200 ).json({ pets });
  } catch ({ message }) {
    if ( message === 'No hay mascotas' ) return res.status( 404 ).json({ message });
    res.status( 500 ).json({ message: 'Error en el servidor, por favor contacte al desarrollador' });
  }
};

export const createPetController = async ( { body: { code, name, age, type } }, res ) => {
  try {
    const pet = await createPetService({ code, name, age, type });
    res.status( 201 ).json({ ok: true });
  } catch ({ message }) {
    res.status( 500 ).json({ message: 'Error en el servidor, por favor contacte al desarrollador' });
  }
};