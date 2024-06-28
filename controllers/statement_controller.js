import { StatementModel } from "../models/statement_model.js";

// Controller file takes all the function that will be used in the routes file/ end points
// function to add statement/data to the database
export const addStatement = async (req, res) => {
    try {
        console.log('request', req.body);
        const addData = await StatementModel.create(req.body);
        // res.json(`Statement Added, ${addData}`);
        res.status(200).json(`Statement with civilian id ${req.body.civilianId} added`);
    } catch (error) {
        console.log(error)
    }
}

// function to get all statements from the database
export const getStatements = async (req, res, next) => {
   try {
    const allStatement = await StatementModel.find();
    res.status(200).json(allStatement);
    //  res.json(allStatement);
   } catch (error) {
        next(error);
   }
}

// function to get statement by Id from the database
export const getStatement = async (req, res, next) => {
    try {
     const oneStatement = await StatementModel.findById(req.params.id);
     res.status(200).json(oneStatement);
     //  res.json(allStatement);
    } catch (error) {
         next(error);
    }
 }

//  function to update statement by Id in the detabase
 export const updateStatement = async (req, res, next) => {
    try {
     // update statement by id
     const newStatus = req.body.caseStatus;
     const oneStatementUpdate = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: newStatus});
     // return response
     res.status(200).json(oneStatementUpdate);
    } catch (error) {
     next(error);
    }
 }

 // function to delete statemtnt by id
export const deleteStatement = async (req, res, next) => {
    try {
     // delete statement by id
     const deletedStatement = await StatementModel.findByIdAndDelete(req.params.id);
     // return response
      res.status(200).json(`Statement ${deletedStatement} with id ${req.params.id} deleted`);
    } catch (error) {
     next(error)
    }
 }
