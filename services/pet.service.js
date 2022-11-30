import petSchema from "../models/pet.model.js";

export const getAllPetsWithoutOwnerService = async () => {
  try {
    const pets = await petSchema.find({ owner: null });
    if ( !pets.length ) throw new Error('No hay mascotas');
    const petsData = pets.map( ({ code, name, type }) => ({ code, name, type }) );
    return petsData;
  } catch ({ message }) {
    throw new Error( message );
  }
};

export const createPetService = async ( pet ) => {
  try {
    const newPet = new petSchema( pet );
    await newPet.save();
    return;
  } catch ({ message }) {
    throw new Error( message );
  }
}