const router = require('express').Router();
const Models = require('../models');

router.get("/todos",  async (req, res, next) => {
  try {
    const todos = await Models.Todo.find({});
    return res.status(200).json(todos);
  } catch (err) {
    return res.status(500).send({ status: 500, message: "failed to get todo" });
  }
});

router.post("/todos",  async (req, res, next) => {
  try {
    const todo = await Models.Todo.create(req.body);
    return res.status(200).json(todo);
  } catch (err) {
    return res.status(500).send({ status: 500, message: "failed to create todo" });
  }
});

router.put("/todos/:id",  async (req, res, next) => {
  try {
    const todo = await Models.Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(todo);
  } catch (err) {
    return res.status(500).send({ status: 500, message: "failed to put todo" });
  }
});

router.delete("/todos/:id",  async (req, res, next) => {
  try {
    await Models.Todo.findByIdAndRemove(req.params.id);
    return res.status(200).json("todo deleted!");
  } catch (err) {
    return res.status(500).send({ status: 500, message: "failed to delete todo" });
  }
});

module.exports = router;
