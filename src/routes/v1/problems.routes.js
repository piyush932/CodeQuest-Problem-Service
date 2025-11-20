const express = require("express");

const {problemController} = require("../../controllers")

const problemRouter = express.Router();

problemRouter.get('/ping',problemController.pingProblemController);

problemRouter.get('/:id',problemController.getProblem);

problemRouter.put('/:id',problemController.updateProblem);

problemRouter.get('/',problemController.getProblems);

problemRouter.post('/',problemController.addProblem);

problemRouter.delete('/',problemController.deleteProblem);


module.exports = problemRouter;



