"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizController = void 0;
const questionGenerator_1 = require("../ai/questionGenerator");
// const DUMMY_QUESTIONS: Question[] = [
//     {
//         id: '1',
//         questionText: 'What is the capital of France?',
//         options: ['Paris', 'London', 'Berlin', 'Madrid'],
//         correctAnswer: 'Paris',
//     },
//     {
//         id: '2',
//         questionText: 'Which planet is known as the Red Planet?',
//         options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
//         correctAnswer: 'Mars',
//     },
//     {
//         id: '3',
//         questionText: 'Who wrote Hamlet?',
//         options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
//         correctAnswer: 'William Shakespeare',
//     },
//     {
//         id: '4',
//         questionText: 'What is the largest ocean on Earth?',
//         options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
//         correctAnswer: 'Pacific Ocean',
//     },
//     {
//         id: '5',
//         questionText: 'What is the chemical symbol for water?',
//         options: ['O2', 'H2O', 'CO2', 'NaCl'],
//         correctAnswer: 'H2O',
//     },
// ];
class QuizController {
    // public async getQuiz(req: Request, res: Response): Promise<void> {
    //     // Exclude correctAnswer when sending to client
    //     const questionsForUser = DUMMY_QUESTIONS.map(({ correctAnswer, ...rest }) => rest);
    //     res.status(200).json(questionsForUser);
    // }
    // public submitAnswer(req: Request, res: Response): void {
    //     const userAnswers: { questionId: string; selectedOption: string }[] = req.body.answers;
    //     let score = 0;
    //     userAnswers.forEach(({ questionId, selectedOption }) => {
    //         const question = DUMMY_QUESTIONS.find(q => q.id === questionId);
    //         if (question && question.correctAnswer === selectedOption) {
    //             score += 1;
    //         }
    //     });
    //     res.status(200).json({ message: 'Quiz submitted', score, total: DUMMY_QUESTIONS.length });
    // }
    getAIQuiz(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { topic, level } = req.body;
            try {
                const questions = yield (0, questionGenerator_1.generateQuestions)(topic, level);
                const questionsForUser = questions.map((_a) => {
                    var { correctAnswer } = _a, rest = __rest(_a, ["correctAnswer"]);
                    return rest;
                });
                res.status(200).json(questionsForUser);
            }
            catch (err) {
                console.error('AI Quiz Generation Error:', err); // Log the error to your server console
                res.status(500).json({ error: 'Failed to generate questions', details: err instanceof Error ? err.message : String(err) });
            }
        });
    }
}
exports.QuizController = QuizController;
