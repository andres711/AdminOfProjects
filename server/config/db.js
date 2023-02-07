const mongoose = require('mongoose');
require('dotenv').config({path:'./.env'})


mongoose.set('strictQuery', true)

const connectionDB = ()=>{
  try {
    mongoose.connect(process.env.MONGO_DB_URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
    console.log("database connected")
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectionDB