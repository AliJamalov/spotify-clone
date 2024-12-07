import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Connected to MongoDb ${conn.connection.host}`);
  } catch (error) {
    console.log("Failed to connect MongoDb", error);
    process.exit(1);
  }
};
