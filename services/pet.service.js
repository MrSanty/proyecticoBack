import petSchema from "../models/pet.model.js";

export const getAllPetsWithoutOwnerService = async () => {
  try {
    return await petSchema.find({ owner: null });
  } catch ( error ) {
    throw error;
  }
};

export const createPetService = async ( pet ) => {
  try {
    const newPet = new petSchema( pet );
    return await newPet.save();
  } catch ( error ) {
    throw error;
  }
}