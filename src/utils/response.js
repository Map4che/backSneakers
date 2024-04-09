const httpStatus = require("http-status-codes");

exports.success = (res, message = "", status = httpStatus.OK) => {
  res.status(status).send({
    error: false,
    status: status,
    body: message,
  });
};

exports.error = (
  res,
  message = "Internal server error",
  status = httpStatus.INTERNAL_SERVER_ERROR
) => {
  res.status(status).send({
    error: true,
    status: status,
    body: message,
  });
};
