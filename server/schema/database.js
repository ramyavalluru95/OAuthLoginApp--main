import mongoose from "mongoose";
export async function run_database() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    mongoose
      .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("Mongoose connected to MongoDB!"))
      .catch((err) => console.error("Mongoose connection error:", err));
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
    throw e; // Re-throw the error to handle it in the calling function
  }
}
