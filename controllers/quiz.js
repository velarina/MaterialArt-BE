const db = require("../models");
const Quiz = db.tryuskk4;

//CREATE: untuk menambahkan data ke dalam tabel quiz
exports.create = async (req, res) => {
  try {
    const data = await Quiz.create(req.body);
    res.json({
      message: "asik, data berhasil ditambahkan",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

//READ: menampilkan atau mengambil semua data quiz sesuai model dari darabase
exports.getAll = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    res.json({
      message: "Quizzes retrivied successfully",
      data: quizzes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

// Mengubah data sesuai id yang dikirimkan
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    quiz.update(req.body, {
      where: { id },
    });
    res.json({
      message: "Quizzes updated seccessfully",
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

// Menghapus data sesuai id yang dikirimkan
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejecyOnEmpty: true });
    quiz.destroy();
    res.json({
      message: "Quiz deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

//Mengambil data sesuai id yang dikirimkan
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    res.json({
      message: `Quizzes retrieved successfully with id=${id}`,
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

//Menampilkan atau mengambil semua data quiz berdasarkan category tertentu
exports.getByCategoryId = async (req, res) => {
  const id = req.params.id;
  const quizzes = await Quiz.findAll({
    where: {
      categoryId: id,
    },
  });
  res.json({
    message: `Quizzes retrieved successfully with categoryId=${id}`,
    data: quizzes,
  });
};

//Menampilkan atau mengambil semua data quiz berdasarkan level tertentu
exports.getByLevelId = async (req, res) => {
  const id = req.params.id;
  const quizzes = await Quiz.findAll({
    where: {
      levelID: id,
    },
  });
  res.json({
    message: `Quizzes retrieved successfully with levelId=${id}`,
    data: quizzes,
  });
};
