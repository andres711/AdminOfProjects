const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./.env" });

module.exports = {
  generateJWT: (payload) => {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        process.env.SECRET_KEY,
        {
          expiresIn: "1h",
        },
        (err, token) => {
          if (err) {
            reject("Can not generate token");
          } else {
            resolve(token);
          }
        }
      );
    });
  },
};
