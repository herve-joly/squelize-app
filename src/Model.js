//defining Model
//sequelize connection to have access to the database it will create
const sequalize = require("./db"); // importing my connection from db.js
const { DataTypes } = require("sequelize");

//define a model
const User = sequalize.define("User", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  rating: DataTypes.NUMBER,
}); //define method is connected to the database

module.exports = { User }; //{User: User}
