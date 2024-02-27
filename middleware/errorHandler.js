const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = req.status ? req.status : 500;

  switch (statusCode) {
    case constants.VALIDATION_ERRO:
      res.status(statusCode).send({
        title: "Validation failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.status(statusCode).send({
        title: "Not found",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.UNAUTHORIZED:
      res.status(statusCode).send({
        title: "UnAuthorized",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN:
      res.status(statusCode).send({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      res.status(statusCode).send({
        title: "Internal Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      break;
  }
};

module.exports = errorHandler;
