const Project = require("../Models/Project.js");

module.exports = {
  create: async (req, res) => {
    try {
      let project = new Project(req.body);
      project.creator = req.body.user_id;
      await project.save();
      res.status(200).send({ msg: "project created succesfully", project });
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  getProjects: async (req, res) => {
      const projects = await Project.find({ creator: req.body.user_id });
    try {
      if (!projects.length)return res.status(404).send({ msg: "you dont have projects" });
      else return res.status(200).json(projects);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  },
  getProjectsById:async (req,res)=>{
    const {id} = req.params
    try {
      const response = await Project.findById(id)
      return res.status(200).send(response)
    } catch (error) {
      return res.status(404).send({msg:error.message})
    }
  },
  deleteProject: async (req, res) => {
    try {
      const { projectId } = req.params;
      const {creator} = req.query;
      const { user_id } = req.body;
      const project = await Project.findById(projectId);
      if (!project) return res.status(404).send({ msg: "project not found" });
      if (project.creator.toString() !== user_id)
        return res
          .status(400)
          .send({ msg: "you dont be authorized to delete project" });
      await project.delete();
      const projects = await Project.find({ creator });
      return res.status(200).send({ msg: "project deleted", projects });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  },
};
