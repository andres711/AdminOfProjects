const jwt = require("jsonwebtoken");

module.exports = {
  verify: async (req, res, next) => {
    const token = req.header("x-token");
    if (!token) return res.status(401).send({ msg: "there are not token" });
    try {
      const verification = jwt.verify(token, process.env.SECRET_KEY);
      req.body.user_id = verification.id;
      next();
    } catch (error) {
      return res.status(401).send({ msg: error.message });
    }
  },
};
