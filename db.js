import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "we-care" });

    console.log("Mongo connection successful");
  } catch (error) {
    throw new Error("Error in connecting to mongodb");
  }
};

export default connect;
