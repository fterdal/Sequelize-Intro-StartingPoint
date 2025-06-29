const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");

// TASK 4: Add the necessary routes here
// This time, use your newly created Sequelize models instead of the dummy database

// GET all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// GET a single task by id
router.get("/:id", async (req, res) =>
{
  try
  {
  const id = Number(req.params.id);
  const task = await Task.findByPk(req.params.id);
  res.json(task);
  }
  catch(error)
  {
   res.status(501).json({message: "Server Error", error: error.message})
  }
}
)


// Patch a task by id
router.patch("/:id", async (req, res) =>
{
  try
  {
    const id = Number(req.params.id);
    const {task, complete} = req.body;
    const updateTask = await Task.update(id, {task, complete});
    res.json(updateTask)
  }
  catch(error)
  {
    res.status(501).json({message: "Server Error", error: error.message})
  }
}
)


// Delete a task by id
router.delete("/:id", async (req, res) =>
{
  try
  {
  const id = Number(req.params.id);
  const deleteTask = await Task.delete(id);
  res.json(deleteTask)
  }
  catch(error)
  {
    res.status(501).json({message: "Server Error", error: error.message})
  }

}
)

// Create a new task
router.post("/", async (req,res) =>
{
  try
  {
    const createTask = await Task.create(createTask);
  }
    catch(error)
  {
    res.status(501).json({message: "Server Error", error: error.message})
  }
}
)

router.delete("/reset-table", async (req, res) => {
  try {
    await Task.sync({ force: true });
    res.status(200).json({ message: "Task table dropped and recreated." });
  } catch (err) {
    res.status(500).json({ message: "Failed to reset Task table", error: err.message });
  }
});


module.exports = router;

// TASK 5: Create a new routes file for users, and add as many routes as you see fit
// Don't forget to export the router, and import it into api/index.js
