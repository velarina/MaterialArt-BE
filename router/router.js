const express = require("express");
const router = express.Router();

const materiController = require("../controllers/materi");
const quizController = require("../controllers/quiz");
const jobsheetController = require("../controllers/jobsheet");

router.get("/materi", materiController.data);
router.get("/materi/:id", materiController.index);
router.post("/materi", materiController.store);
router.put("/materi/:id", materiController.update);
router.delete("/materi/:id", materiController.delete);

router.get("/quiz/", quizController.data);
router.get("/quiz/id/:id", quizController.index);
router.get("/quiz/:id", quizController.category);
router.post("/quiz", quizController.store);
router.put("/quiz/:id", quizController.update);
router.delete("/quiz/:id", quizController.delete);

router.post("/ansOne", jobsheetController.submitOne);
router.post("/ansMany", jobsheetController.submitMany);

module.exports = router;
