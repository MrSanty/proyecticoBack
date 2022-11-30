import { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db.config.js';
import AuthRouter from '../routers/auth.router.js';
import clientRouter from '../routers/client.router.js';
import PetRouter from '../routers/pet.router.js';
dotenv.config();

const startServer = async ( app ) => {
  const { PORT: port, MONGO_URL } = process.env;

  connectDB( MONGO_URL );

  app.use( cors() );
  app.use( json() );
  app.use( '/api/auth/', AuthRouter );
  app.use( '/api/client/', clientRouter );
  app.use( '/api/pet/', PetRouter );
  

  app.listen( port, () => {
    console.log(`Server on port http://localhost:${ port }/api`);
  });
};

export default startServer;