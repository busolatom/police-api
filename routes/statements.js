import { Router } from "express";

const statementRouter = Router();

// Define routes
statementRouter.get('/statements', (req, res) => {
    res.json('Statement request processed successfully');
});

statementRouter.post('/statements', (req, res) => {
    res.json('Statement uploaded successfully');
});

// Export router
export default statementRouter;