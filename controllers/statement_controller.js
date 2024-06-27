import { StatementModel } from "../models/statement_model.js";

// Controller file takes all the function that will be used in the routes file/ end points
// function to add statement/data to the database
export const addStatement = async (req, res) => {
    try {
        console.log('request', req.body);
        const addData = await StatementModel.create(req.body);
        res.json('Statement Added');
    } catch (error) {
        console.log(error)
    }
}