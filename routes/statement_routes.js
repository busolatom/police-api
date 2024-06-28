import { Router } from "express";
import { StatementModel } from "../models/statement_model.js";
import { addStatement, getStatements, getStatement, updateStatement, deleteStatement  } from "../controllers/statement_controller.js";

const statementRouter = Router();

// Define routes
statementRouter.get('/statements', getStatements);

statementRouter.get('/statements/:id', getStatement);

statementRouter.post('/statements', addStatement);

statementRouter.patch('/statements/:id', updateStatement);

statementRouter.delete('/statements/:id', deleteStatement);

// Export router
export default statementRouter;