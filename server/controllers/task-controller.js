const Task = require("../Models/Task.js");
const Project = require("../Models/Project.js");

module.exports = {
  create: async (req, res) => {
    try {
      const { name, projectId, user_id } = req.body;
      const project = await Project.findById(projectId);
      if (!project) return res.status(404).send("there are not project with this id");
      if (project.creator.toString() !== user_id) return res.status(401).send("Access unauthorized");
      let task = new Task({name, projectId});
      await task.save();
      return res.status(200).send({ msg: "task create succesfully", task });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  },
  getTasks: (req, res) => {
    Task.find({ projectId: req.params.projectId })
      .then((tasks) => {
        if (tasks.length > 0) return res.status(200).send(tasks);
        else throw new Error("there are not tasks");
      })
      .catch((error) => res.status(400).send(error.message));
  },
  updateTask: async (req, res) => {
    try {
      let task = await Task.findById(req.params.taskId);
      task.update({ name: req.body.name, state: req.body.state});
      task = await task.save();
      return res.status(200).send({ msg: "task upadted", task });
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  deleteTask: async (req, res) => {
    try {
      const response = await Task.deleteOne({_id:req.params.taskId});
      return res.status(200).send("task deleted",);
    } catch (error) {
      console.log(error);
      return res.status(400).send(error.message);
    }
  },
};
