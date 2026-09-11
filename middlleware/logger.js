const myMiddleware = (req, res, next) => {
  console.log(`Request received: ${req.method} ${req.originalUrl}`);
  next();
};

export default myMiddleware;
