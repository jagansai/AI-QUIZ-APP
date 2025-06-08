export interface Question {
    id: string;
    questionText: string;
    options: string[];
    correctAnswer: string;
}

export interface Answer {
    questionId: string;
    selectedOption: string;
}