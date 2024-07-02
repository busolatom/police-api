import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import statementRouter from "./routes/statement_routes.js";
import dbConnection from "./config/db.js";

// Express app creation
const policeapp = express();
expressOasGenerator.handleResponses(policeapp, {
    alwaysServeDocs: true,
    tags: ['statement'],
    mongooseModels: mongoose.modelNames(),
});

//Middleware application to unwrap data from frontend
policeapp.use(express.json());
expressOasGenerator.handleRequests();
policeapp.use((req, res) => res.redirect('/api-docs/'));

// Using routes to have access to the endpoints
policeapp.use(statementRouter);

// Listen for incoming requests
const port = process.env.PORT || 7979;

policeapp.listen( port , () => {
    console.log(`Police App listening on port ${port}`);
});

