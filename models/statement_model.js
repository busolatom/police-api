import { Schema, model } from "mongoose";

const statementSchema = new Schema({
    statementId: { type: String },
    incidentType: {
        type: String,
        enum: ['Criminal', 'Non-criminal'],
        default: 'Criminal'
    },
    civilianStatus: {
        type: String,
        enum: ['Suspect', 'Complainant', 'Witness'],
        default: 'Complainant'
    },
    statement: { type: String },
    caseStatus: {
        type: String,
        enum: ['Closed', 'Open'],
        default: 'Open'
    },
    civilianId: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

// Middleware to update `updatedAt` field on update
// statementSchema.pre('save', function (next) {
//     this.updatedAt = new Date();
//     next();
// });

export const StatementModel = model('statements', statementSchema);