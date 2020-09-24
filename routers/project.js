const express = require("express");
const Project = require("../models/project");
const router = new express.Router();

router.post("/api/project", async (req, res) => {
  const project = new Project(req.body);
  console.log(project);
  try {
    await project.save();
    res.send(project);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find({ disabled: false });
    res.send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/api/projects/one/:key", async (req, res) => {
  const key = req.params.key;
  try {
    const project = await Project.findOne({ key });
    res.status(200).send(project);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/api/projects/similar/:tags", async (req, res) => {
  const tagsArr = req.params.tags.split('&');
  try {
    const projects = await Project.find({ tags: { $in: tagsArr } });
    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/api/projects/featured", async (req, res) => {
  try {
    const projects = await Project.find({ featured: true });
    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/api/projects/:id/:updateRoute?", async (req, res) => {
  const _id = req.params.id;
  const updateProperty = Object.keys(req.body);
  const updateRoute = req.params.updateRoute; // optional param for nested properties
  const updatePath = updateRoute && updateRoute.length ? updateRoute.concat(`.${updateProperty}`) : updateProperty;

  try {
    const project = await Project.findOneAndUpdate({ _id }, { [updatePath]: req.body[updateProperty] }, { new: true, upsert: true });
    res.status(200).send(project);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
