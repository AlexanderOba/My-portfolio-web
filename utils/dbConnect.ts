import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path: './config.env'});

const MONGO_URI = process.env.DATABASE && process.env.DATABASE_PASSWORD 
  ? process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD) 
  : '';

if (!MONGO_URI) {
  throw new Error('Please define the DATABASE environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI)
      .then((mongoose) => mongoose.connection); // Cast to `mongoose.connection` (Connection)
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
