import mongoose from "mongoose";
import 'dotenv/config';

const mongoLink = process.env.Mongo_url;

const dbConnection = await mongoose.connect(process.env.Mongo_url);
console.log ("Connected to Ghana-Police Database!");
    // mongoose.connect(mongoLink)
    //     .then(() => console.log('Connected to Ghana-Police Database!'));

// Alternatively 
// mongoose.connect(process.env.Mongo_url)  
// .then(() => console.log('Connected!'));

export default dbConnection;
