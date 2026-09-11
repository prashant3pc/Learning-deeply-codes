const errorHandler = (err, req, res, next) => {
  if (err.name === "CastError") {
    res.status(400).json({
      success: false,
      message: "Invalid ID",
    });
  } else {
    res.status(err.status || 500).json({
      success: false,
      message: err.message || "something went wrong",
    });
  }
};
export default errorHandler;
