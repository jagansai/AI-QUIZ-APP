"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setQuizRoutes = void 0;
const express_1 = require("express");
const quizController_1 = require("../controllers/quizController");
const router = (0, express_1.Router)();
const quizController = new quizController_1.QuizController();
function setQuizRoutes(app) {
    app.use('/api/quiz', router);
    router.post('/submit', quizController.submitAnswer.bind(quizController));
    router.post('/ai', quizController.getAIQuiz.bind(quizController));
}
exports.setQuizRoutes = setQuizRoutes;
