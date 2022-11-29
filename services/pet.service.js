import clientModel from "../models/client.model.js";
import petSchema from "../models/pet.model.js";

export const getAllPetsWithOwnerService = async () => {
  try {
    const pets = await petSchema.find({}).populate( "owner" );
    return pets;
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

export const updateNamePetService = async ( petId, name ) => {
  try {
    const pet = await petSchema.findOne({ _id: petId });
    if ( !pet ) {
      throw new Error( "Pet not found" );
    }
    pet.name = name;
    return true;
  } catch ( error ) {
    throw error;
  }
}