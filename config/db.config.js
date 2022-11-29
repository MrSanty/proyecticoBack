import mongoose from "mongoose";

export const connectDB = async ( uri ) => {
  try {
    const conn = await mongoose.connect( uri, { family: 4 } );
    console.log(`MongoDB Connected: ${conn.connection.host} and database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};