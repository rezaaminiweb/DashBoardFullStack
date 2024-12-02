import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URL;
const connect = async (): Promise<void> => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already connect");
    return;
  }
  if (connectionState === 2) {
    console.log("connection...");
    return;
  }
  try {
    await mongoose.connect(MONGODB_URL!, {
      dbName: "portfoliopagenextjs",
      bufferCommands: true,
    });
    console.log("connected");
  } catch (err) {
    if (err instanceof mongoose.Error) {
      console.error("Mongoose error:", err.message);
    } else if (err instanceof Error) {
      console.error("Unknown error:", err.message);
    } else {
      console.error("Unexpected error:", err);
    }
    throw err; // Re-throw the error for higher-level handling
  }
};
export default connect;
