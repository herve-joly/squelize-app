// const sequelize = require("sequelize"); //importing an entire library
// const sequelize = require("./index"); // importing from a file

const { Sequelize } = require("Sequelize"); //creating a connection; require the sequalize library; Object destructuring
const path = require("path"); //importing path module from a library

//create a link to the database
const sequalize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
});

module.exports = sequalize; //exporting the database connection
