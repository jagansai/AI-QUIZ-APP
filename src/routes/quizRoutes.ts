import { Router } from 'express';
import { QuizController } from '../controllers/quizController';
import { Express } from 'express-serve-static-core';

const router = Router();
const quizController = new QuizController();

export function setQuizRoutes(app: Express) {
    app.use('/api/quiz', router);
    router.post('/submit', quizController.submitAnswer.bind(quizController));
    router.post('/ai', quizController.getAIQuiz.bind(quizController));
}