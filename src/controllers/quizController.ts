import { Request, Response } from 'express';
import { Question, Answer } from '../types';
import { generateQuestions } from '../ai/questionGenerator';

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

export class QuizController {
    // public async getQuiz(req: Request, res: Response): Promise<void> {
    //     // Exclude correctAnswer when sending to client
    //     const questionsForUser = DUMMY_QUESTIONS.map(({ correctAnswer, ...rest }) => rest);
    //     res.status(200).json(questionsForUser);
    // }

    public submitAnswer(req: Request, res: Response): void {
        const answers: { questionId: string; userAnswer: string, correctAnswer: string }[] = req.body.answers;
        let score = 0;
        answers.forEach(({ questionId, userAnswer, correctAnswer }) => {
            
            if (correctAnswer.trim().toLowerCase() === userAnswer.trim().toLowerCase()) {
                score += 1;
            }
        });
        res.status(200).json({ message: 'Quiz submitted', score });
    }

    public async getAIQuiz(req: Request, res: Response): Promise<void> {
        const { topic, level } = req.body;
        try {
            const questions = await generateQuestions(topic, level);
            // For AI quiz, send correctAnswer to frontend for client-side validation
            res.status(200).json(questions);
        } catch (err) {
            console.error('AI Quiz Generation Error:', err); // Log the error to your server console
            res.status(500).json({ error: 'Failed to generate questions', details: err instanceof Error ? err.message : String(err) });
        }
    }
}