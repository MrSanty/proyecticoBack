import Express from 'express';
import startServer from './config/server.config.js';

const app = Express();
startServer( app );