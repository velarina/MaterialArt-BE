const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");

const materi = database.define("materi", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pengertian: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sejarah: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manfaat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seragam: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  waktu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgOrganisasi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  videoTeknik: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

materi
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", +error);
  });

module.exports = materi;
