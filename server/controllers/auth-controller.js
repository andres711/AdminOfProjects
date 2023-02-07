var bcrypt = require("bcryptjs");

const User = require("../Models/User.js");
const { generateJWT } = require("../helpers/generateJWT-helper.js");

module.exports = {
  registerUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      let user = await User.findOne({ email });

      if (user) return res.status(422).send({msg:"User already exist"});

      const hashPassword = bcrypt.hashSync(password, 8);
      user = new User({ name, email, password: hashPassword });
      await user.save();
      const token = await generateJWT({ id: user.id, name: user.name });

      res.status(200).send({ msg: "user created succesfully", token});
    } catch (error) {
      res.status(400).send({msg:error.message});
    }
  },

  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email });
      if (!user)
        return res.status(422).send({ msg: "Email or password are incorrect" });
      const match = bcrypt.compareSync(password, user.password);
      if (!match)
        return res.status(422).send({ msg: "Email or password are incorrect" });
      else {
        const token = await generateJWT({ id: user.id, name: user.name });
        return res.status(200).send({ msg: "Logged succesfully", token});
      }
    } catch (error) {
      return res.status(400).send({msg:error.message});
    }
  },
  getUser: async(req,res)=>{
   
    try {
      const {user_id} = req.body;
      const response = await User.findById(user_id).select('-password')
      return res.status(200).send(response)
    } catch (error) {
      res.status(422).send({msg:error.message})
    }
  }
};
