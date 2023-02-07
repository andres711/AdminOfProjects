const express = require('express');

const {verify} = require('../middlewares/auth-mdw.js');

const {create,getTasks, updateTask, deleteTask}  = require('../controllers/task-controller.js');

const taskRouter = express.Router();

taskRouter.get('/:projectId',verify, getTasks)
taskRouter.post('/create',verify,create)
taskRouter.put('/edit/:taskId', verify,updateTask)
taskRouter.delete('/delete/:taskId',verify,  deleteTask)


module.exports = taskRouter;
