const jwt = require("jsonwebtoken");

module.exports.verifyUser = async (req, res, next) => {
  const auth = req.cookies.Authorization;
  if (!auth) return res.status(401).json({ message: "Invalid Token :(((" });

  try {
    const verify = jwt.verify(auth, process.env.TOKEN_SECRET);
    req.name = verify;
    next();
  } catch (error) {
    res.send(error);
  }
};
