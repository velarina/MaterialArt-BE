const materi = require("../materi");

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
      const materis = await materi.create({
        Title: req.body.Title,
        Definisi: req.body.Definisi,
        Lapangan: req.body.Lapangan,
        Juri: req.body.Juri,
        Seragam: req.body.Seragam,
        WaktuSkor: req.body.WaktuSkor,
        Teknik: req.body.Teknik,
        Organisasi: req.body.Organisasi,
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
        message: error.body,
        data: null,
      });
    }
  },
  update: async (req, res) => {
    const materis = await materi.update(req.body, {
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
