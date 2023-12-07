console.log("enjfdn started");
import dotenv from 'dotenv';
import connectDB from './db/index.js';



dotenv.config({ path: './.env' }); // Adjust the path to your .env file

connectDB();
