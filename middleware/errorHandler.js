const errorHandler = async (error, req, res, next) => {
  console.log(error);
  let status = 500;
  let message = "Internal Server Error";

  if (error.name === "SequelizeValidationError") {
    status = 400;
    message = error.errors[0].message;
  }

  if (error.name === "SequelizeDatabaseError") {
    status = 400;
    message = `Invalid input`;
  }

  if (error.name === "SequelizeForeignKeyConstraintError") {
    status = 400;
    message = `Invalid input`;
  }

  if (error.name === "NotFound") {
    status = 404;
    message = `Book not found`;
  }

  res.status(status).json({ message });
};

module.exports = errorHandler;
