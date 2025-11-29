const {StatusCodes} = require("http-status-codes");
const BaseError = require("../errors/base.error");
const BadRequest = require("../errors/badrequest.error");
const NotImplemented = require("../errors/notImplemented.error");

function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is up" });
}

function addProblem(req, res, next) {
  try {
    throw new BadRequest('Problem Name', {missing: ["Problem Name"]});
    // nothing implemented
        // throw new NotImplemented('Add Problem');
  } catch (error) {
    next(error)
  }
}

function getProblem(req, res, next) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

function getProblems(req, res, next) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

function deleteProblem(req, res, next) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

function updateProblem(req, res, next) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
