import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()

/*
import express from "express";
const app = express();

(async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("Connected to MongoDB: ", connection.connection.host);
    app.on("error", (error) => {
        console.error("ERROR: ", error);
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
  }
})();
*/