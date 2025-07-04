const db = require("./db");
const Task = require("./task");
const User = require("./user");

// TASK 3: Set up associations here
// What kind of relationship is there between a user and a task?
User.hasMany(Task);
Task.belongsTo(User);

// Export everything needed
module.exports = {
  db,
  Task,
  User,
};
