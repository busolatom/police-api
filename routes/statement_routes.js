import { Router } from "express";
import { StatementModel } from "../models/statement_model.js";
import { addStatement } from "../controllers/statement_controller.js";

const statementRouter = Router();

// Define routes
statementRouter.get('/statements', (req, res) => {
    res.json('Statement request processed successfully');
});

statementRouter.post('/statements', addStatement);

// Export router
export default statementRouter;