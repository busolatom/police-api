import express from "express";
import statementRouter from "./routes/statements.js";
// import mongoose from "mongoose";
// import 'dotenv/config';
import dbConnection from "./config/db.js";

const policeapp = express();

policeapp.use(statementRouter);

// const connectionString = process.env.Mongo_url;

// mongoose.connect(connectionString)
// .then(() => console.log('Connected to Ghana-Police Database!'));

const port = 7979;

policeapp.listen( port , () => {
    console.log(`Police App listening on port ${port}`);
});

