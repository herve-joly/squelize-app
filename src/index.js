const { User } = require("./Model.js");
const sequelize = require("./db");

async function main() {
  await sequelize.sync();
  //CREAT/INSERT
  //   await User.create({
  //     username: "Andy",
  //     email: "andy1@email.com",
  //     password: "test123",
  //     rating: 5,
  //   });
  //READ/SELECT
  //   const users = await User.findAll();
  //   console.log(JSON.stringify(users, null, 2));
  //UpDATE
  //   await User.update({ username: "DAVE" }, { where: { id: 2 } });
  //DELETE
  await User.destroy({ where: { username: "DAVE" } });
}
main();
