import { connectDB } from './db.config.js';
import AuthRouter from '../routers/auth.router.js';
import { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const startServer = async ( app ) => {
  const { PORT: port, MONGO_URL } = process.env;

  connectDB( MONGO_URL );

  app.use( cors() );
  app.use( json() );
  app.use( '/api/auth/', AuthRouter );

  app.listen( port, () => {
    console.log(`Server on port http://localhost:${ port }/api`);
  });
};

export default startServer;