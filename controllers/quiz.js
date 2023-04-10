const quiz = require("../models/quiz");
const Quiz = quiz.tryuskk4;

module.exports = {
  data: async (_req, res) => {
    try {
      const quizes = await quiz.findAll();
      res.status(200).json({
        status: 200,
        message: "data succesfully sent",
        data: quizes,
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
      const quizes = await quiz.findOne({
        where: {
          category: req.params.id,
        },
      });
      if (quiz == null) {
        res.status(404).json({
          status: 404,
          message: "data not found",
          data: null,
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "data succesfully sent",
          data: quizes,
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
  category: async (req, res) => {
    try {
      const quizes = await quiz.findAll({
        where: {
          category: req.params.id,
        },
      });
      console.log("quizes:", quizes);
      if (quiz == null) {
        res.status(404).json({
          status: 404,
          message: "data not found",
          data: null,
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "data succesfully sent",
          data: quizes,
        });
      }
    } catch (error) {
      console.error(error);
      console.log("category:", req.params.category);
      res.status(500).json({
        status: 500,
        message: error.message,
        data: null,
      });
    }
  },
  //CREATE: untuk menambahkan data ke dalam tabel quiz
  store: async (req, res) => {
    try {
      console.log(req.body);
      const quizes = await quiz.create({
        question: req.body.question,
        a: req.body.a,
        b: req.body.b,
        c: req.body.c,
        d: req.body.d,
        key: req.body.key,
        category: req.body.category,
      });
      res.status(201).json({
        status: 201,
        message: "data succesfully created",
        data: quizes,
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
    const quizes = await quiz.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (quizes == null) {
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
    const quizes = quiz.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (quizes == null) {
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
