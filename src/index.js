import dotenv from "dotenv";
import connectDB from "./db/index.js";

// load .env file from project root
dotenv.config();

connectDB();




