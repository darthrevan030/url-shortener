import mongoose from "mongoose";
import { cache } from "react";

const MONGODB_URI= process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "MONGODB_URI undefined in .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(){
  if (cached.conn) {
    return cached.conn;
  }

  try {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    });
    cached.conn = await cached.promise;
    console.log("Connected to MongoDB");
    return cached.conn;
  } catch (error) {
    console.error("MongoDB connection error", error);
    throw error;
  }
}


export default dbConnect;