const express = require("express");

const {problemController} = require("../../controllers")

const problemRouter = express.Router();

problemRouter.get('/ping',problemController.pingProblemController);

problemRouter.get('/:id',problemController.getProblem);

problemRouter.patch('/:id',problemController.updateProblem);

problemRouter.get('/',problemController.getProblems);

problemRouter.post('/',problemController.addProblem);

problemRouter.delete('/:id',problemController.deleteProblem);


module.exports = problemRouter;



