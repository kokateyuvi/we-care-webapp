import mongoose from "mongoose";

const connectDb = async () => {
  console.log(process.env.MONGODB_URI);
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "we-care",
    });

    if (connection) {
      console.log("Connected to MongoDB");
      console.log("Database Name:", connection.connection.host);
    } else {
      console.log("Failed to connect with database");
    }
  } catch (error) {
    console.error("Failed to connect with database:", error);
  }
};

export default connectDb;
