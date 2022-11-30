import clientModel from "../models/client.model.js";
import petSchema from "../models/pet.model.js";

export const listPetsByOwnerService = async ( userId ) => {
  try {
    const owner = await clientModel.findOne({ _id: userId }).populate('pets');
    if ( !owner ) {
      throw new Error('User not found');
    }
    return owner.pets;
  } catch ( error ) {
    throw error;
  }
}

const ifPetBelongsToOwner = ( pet, userId ) => { 
  return pet.owner?.toString() === userId.toString();
}

export const adoptPetService = async ( userId, petId ) => {
  try {
    const owner = await clientModel.findOne({ _id: userId });
    const pet = await petSchema.findOne({ code: petId });
    console.log(userId, petId);
    if ( !owner || !pet ) {
      throw new Error('User or pet not found');
    }
    if ( ifPetBelongsToOwner( pet, userId ) ) {
      throw new Error('Pet already belongs to user');
    }
    pet.owner = owner;
    owner.pets.push( pet._id );
    await pet.save();
    await owner.save();
    return true;
  } catch ( error ) {
    throw error;
  }
}

export const updateOwnerPetNameService = async ( petId, name ) => {
  try {
    const pet = await petSchema.findOne({ code: petId });
    if ( !pet ) {
      throw new Error('Pet not found');
    }
    pet.name = name;
    await pet.save();
    return true;
  } catch ( error ) {
    throw error;
  }
}

export const deletePetOwnerService = async ( userId, petId ) => {
  try {
    const owner = await clientModel.findOne({ _id: userId });
    const pet = await petSchema.findOne({ code: petId });
    if ( !owner || !pet ) {
      throw new Error('User or pet not found');
    }
    pet.owner = null;
    owner.pets = owner.pets.filter( pet => pet._id !== pet );
    await pet.save();
    await owner.save();
    return true;
  } catch ( error ) {
    throw error;
  }
}