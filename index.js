import express from "express";
import statementRouter from "./routes/statement_routes.js";
import dbConnection from "./config/db.js";

// Express app creation
const policeapp = express();

//Middleware application to unwrap data from frontend
policeapp.use(express.json());

// Using routes to have access to the endpoints
policeapp.use(statementRouter);

const port = 7979;

policeapp.listen( port , () => {
    console.log(`Police App listening on port ${port}`);
});

