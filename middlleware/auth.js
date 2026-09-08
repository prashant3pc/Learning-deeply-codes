const myMiddleware = (req, res, next) => {
  console.log(`Request Received: ${req.method} ${req.originalUrl}`);
  const apiKey = req.headers["x-api-key"];
  if (apiKey === "12345") {
    next();
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};
export default myMiddleware;
