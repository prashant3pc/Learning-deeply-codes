const myMiddleware = (req, res, next) => {
  console.log(`Request received: ${req.method} ${req.originalUrl}`);
  res.status(401).json("Invalid request");
  next();
};

export default myMiddleware;
