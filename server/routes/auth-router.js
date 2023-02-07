const express = require("express");
const { registerUser, loginUser,getUser } = require("../controllers/auth-controller.js");
const { schemaValidator } = require("../middlewares/schema-validator-mdw.js");
const { register,login} = require("../schemas/user-schema.js");
const {verify} = require('../middlewares/auth-mdw.js')

const userRouter = express.Router();

userRouter.post("/register", schemaValidator(register), registerUser);
userRouter.post("/login", schemaValidator(login), loginUser);
userRouter.get('/',verify,getUser)

module.exports = userRouter;
