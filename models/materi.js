const { Sql, DataTypes } = require("sequelize");
const database = require("./config/database");

const materi = database.define("materi", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Pengertian: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Sejarah: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Manfaat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Seragam: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Waktu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ImgOrganisasi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  VideoTeknik: {
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
