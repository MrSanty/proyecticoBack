import clientModel from "../models/client.model.js";
import petSchema from "../models/pet.model.js";

export const adoptPetService = async ( userId, petId ) => {
  try {
    const owner = await clientModel.findOne({ _id: userId });
    const pet = await petSchema.findOne({ _id: petId });
    if ( !owner || !pet ) {
      throw new Error( "User or pet not found" );
    } else {
      pet.owner = owner;
      owner.pets.push( pet._id );
      await pet.save();
      return true;
    }
  } catch ( error ) {
    throw error;
  }
}