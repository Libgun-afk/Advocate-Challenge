/** @format */

// /** @format */

// import mongoose from "mongoose";

// export const connectMongoose = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL as string);
//     console.log("connection successful");
//   } catch (error) {
//     console.log("Mongoose connection error", error);
//     console.log("connection Failed");
//   }
// };
// import mongoose from "mongoose";

// export const connectMongoose = async () => {
//   try {
//     // Баталгаажуулалт хийх: URL-ийг шалгаж үзэх
//     const mongoUrl = process.env.MONGODB_URL;
//     if (!mongoUrl) {
//       throw new Error(
//         "MONGODB_URL is not defined in the environment variables."
//       );
//     }

//     // Холболт хийх
//     await mongoose.connect(mongoUrl, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("MongoDB connection successful.");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// };
// mongoose-connection.ts
import mongoose from "mongoose";

export const connectMongoose = async () => {
  try {
    const dbURL =
      process.env.MONGODB_URL ||
      "mongodb+srv://bilguun040728:Mongo%40040728@cluster0.zpuzv.mongodb.net/";
    await mongoose.connect(dbURL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
