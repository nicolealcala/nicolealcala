import mongoose from "mongoose";

const connectToDB = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected successfully");
    return true;
  } catch (error) {
    console.error("Connection failed: ", error);
    return false;
  }
};

export default connectToDB;
