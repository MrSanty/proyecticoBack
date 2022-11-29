import { createPetService, getAllPetsWithOwnerService } from "../services/pet.service";


export const getAllPetsWithOwnerController = async ( req, res ) => {
  try {
    const pets = await getAllPetsWithOwnerService();
    res.status( 200 ).json({ pets });
  } catch ( error ) {
    console.log( error );
    res.status( 500 ).json({ message: "Hubo un error, por favor contacte al desarrollador" });
  }
};

export const createPetController = async ( { body: { name, type, breed, age, owner } }, res ) => {
  try {
    const pet = await createPetService({ name, type, breed, age, owner });
    res.status( 201 ).json({ pet });
  } catch ( error ) {
    console.log( error );
    res.status( 500 ).json({ message: "Hubo un error, por favor contacte al desarrollador" });
  }
};