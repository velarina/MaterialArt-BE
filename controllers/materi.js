const materi = require("../models/materi");

module.exports = {
  data: async (_req, res) => {
    try {
      const materis = await materi.findAll();
      res.status(200).json({
        status: 200,
        message: "data succesfully sent",
        data: materis,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: error,
        data: null,
      });
    }
  },
  index: async (req, res) => {
    try {
      const materis = await materi.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (materi == null) {
        res.status(404).json({
          status: 404,
          message: "data not found",
          data: null,
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "data succesfully sent",
          data: materis,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: error.body,
        data: null,
      });
    }
  },
  store: async (req, res) => {
    try {
      var url =
        req.protocol +
        "://" +
        req.get("host") +
        "/images/" +
        req.body.imgOrganisasi;
      const materis = await materi.create({
        title: req.body.title,
        pengertian: req.body.pengertian,
        sejarah: req.body.sejarah,
        manfaat: req.body.manfaat,
        seragam: req.body.seragam,
        waktu: req.body.waktu,
        imgOrganisasi: url,
        videoTeknik: req.body.videoTeknik,
      });
      res.status(201).json({
        status: 201,
        message: "data succesfully created",
        data: materis,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 500,
        message: error.message,
        data: null,
      });
    }
  },
  update: async (req, res) => {
    var url =
      req.protocol +
      "://" +
      req.get("host") +
      "/images/" +
      req.body.imgOrganisasi;
    console.log("type of:", req.body.title);
    const materis = await materi.update(
      {
        title: req.body.title,
        pengertian: req.body.pengertian,
        sejarah: req.body.sejarah,
        manfaat: req.body.manfaat,
        seragam: req.body.seragam,
        waktu: req.body.waktu,
        imgOrganisasi: url,
        videoTeknik: req.body.videoTeknik,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (materis == null) {
      res.status(404).json({
        status: 404,
        message: "data not found",
        data: null,
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "data successfully updated",
      });
    }
  },
  delete: async (req, res) => {
    const materis = materi.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (materis == null) {
      res.status(404).json({
        status: 404,
        message: "data not found",
        data: null,
      });
    } else {
      res.status(200).json({
        status: 200,
        message: "data successfully deleted",
      });
    }
  },
};
