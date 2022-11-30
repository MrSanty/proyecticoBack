import mongoose from "mongoose";

export const connectDB = async ( uri ) => {
  try {
    const { connection: { host, name } } = await mongoose.connect( uri, { family: 4 } );
    console.log(`MongoDB Connected: ${ host } and database: ${ name }`);
  } catch ({ message }) {
    console.error(`Error: ${ message }`);
    process.exit(1);
  }
};