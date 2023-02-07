const express = require('express');

const app = express()

//USER ROUTER
app.use('/api/auth',require('./auth-router.js'))

//PROJECT ROUTER
app.use('/project', require('./project-router.js'))

//TASK ROUTER
app.use('/task', require('./task-router.js'))



module.exports = app