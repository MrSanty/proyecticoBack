import petSchema from "../models/pet.model.js";

export const getAllPetsWithoutOwnerService = async () => {
  try {
    const pets = await petSchema.find({ owner: null });
    if ( !pets.length ) throw new Error('No hay mascotas');
    const petsData = pets.map( ({ code, age, name, type }) => ({ code, age, name, type }) );
    return petsData;
  } catch ({ message }) {
    throw new Error( message );
  }
};

const generatePetCode = async () => {
  try {
    const pets = await petSchema.find();
    if ( !pets.length ) return 1;

    const lastPet = pets[ pets.length - 1 ];
    const lastPetCode = lastPet.code;
    return lastPetCode + 1;
  } catch ({ message }) {
    throw new Error( message );
  }
};

export const createPetService = async ( pet ) => {
  try {
    const newPet = new petSchema( pet );
    newPet.code = await generatePetCode();
    await newPet.save();
    return;
  } catch ({ message }) {
    console.log(message);
    throw new Error( message );
  }
}