import mongoose, { Mongoose } from "mongoose";

if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable not set; please set it in the .env file.");
}

const uri : string = process.env.MONGODB_URI;
const clientPromise : Promise<Mongoose> = mongoose.connect(uri);

export default clientPromise;