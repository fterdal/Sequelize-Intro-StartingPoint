require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DATABASE_URL || "postgres://localhost:5432/todo_list",
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false, // comment this line to enable logging
  }
);

module.exports = db;
