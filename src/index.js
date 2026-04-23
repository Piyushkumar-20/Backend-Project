import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
import app from '../src/app.js';
dotenv.config({
  path: "./env",
});


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo DB Connection Failed!!", error);
  });

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
