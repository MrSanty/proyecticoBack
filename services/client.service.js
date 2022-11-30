import clientModel from "../models/client.model.js";
import petSchema from "../models/pet.model.js";

export const listPetsByOwnerService = async ( userId ) => {
  try {
    const owner = await clientModel.findOne({ _id: userId }).populate('pets');
    const pets = owner.pets.map( ({ code, age, name, type }) => ({ code, age, name, type }) ); 
    return pets;
  } catch ({ message }) {
    throw new Error( message );
  }
}

const ifPetBelongsToOwner = ( pet, userId ) => { 
  return pet.owner?.toString() === userId.toString();
}

export const adoptPetService = async ( userId, petId ) => {
  try {
    const owner = await clientModel.findOne({ _id: userId });
    const pet = await petSchema.findOne({ code: petId });

    if ( !pet ) throw new Error('Mascota no encontrados');
    if ( ifPetBelongsToOwner( pet, userId ) ) throw new Error('La mascota ya pertenece al usuario');

    pet.owner = owner;
    owner.pets.push( pet._id );
    await pet.save();
    await owner.save();
    return true;
  } catch ({ message }) {
    throw new Error( message );
  }
}

export const updateOwnerPetNameService = async ( userId, petId, name ) => {
try {
    const pet = await petSchema.findOne({ code: petId, owner: userId })

    if ( !pet ) throw new Error('Mascota no encontrada');

    pet.name = name;
    await pet.save();
    return true;
  } catch ({ message }) {
    throw new Error( message );
  }
}

export const deletePetOwnerService = async ( userId, petId ) => {
  try {
    const owner = await clientModel.findOne({ _id: userId });
    const pet = await petSchema.findOne({ code: petId, owner: userId });

    if ( !pet ) throw new Error('Mascota no encontrados');

    pet.owner = null;
    owner.pets = owner.pets.filter( p => p.toString() !== pet._id.toString() );
    await pet.save();
    await owner.save();
    return true;
  } catch ({ message }) {
    throw new Error( message );
  }
}