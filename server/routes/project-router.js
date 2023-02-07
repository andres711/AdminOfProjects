const express = require("express");

const {schemaValidator} = require('../middlewares/schema-validator-mdw.js')

const dataProject = require('../schemas/project-schema.js')
const { verify } = require("../middlewares/auth-mdw.js");
const { create, getProjects,deleteProject,getProjectsById } = require("../controllers/project-controller.js");



const projectRouter = express.Router();

projectRouter.get('/', verify, getProjects);
projectRouter.post("/create",verify,schemaValidator(dataProject), create);
projectRouter.delete('/delete/:projectId',verify, deleteProject);
projectRouter.get('/:id',verify,getProjectsById)


module.exports = projectRouter;
