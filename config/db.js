import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL);
    console.log("DB connected!");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

export default connectDb;
