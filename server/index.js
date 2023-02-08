const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const indexRouter = require('./routes/index.js')
const connectionDB = require('./config/db.js');

const app = express()
//ENABLED CORS
app.use(cors());
//MIDDLEWARES
app.use(express.json({extended:true}))
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin","*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use('/', indexRouter)



//CONNECTION DB
connectionDB()

//UP SERVER
app.listen(PORT, () => {
  console.log(`Server ON PORT: ${PORT}`);
});
