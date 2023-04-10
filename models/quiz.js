const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");

const quiz = database.define("quiz", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  a: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  b: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  c: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  d: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

quiz
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", +error);
  });

module.exports = quiz;
