# AI Quiz App

## Overview
The AI Quiz App is a beginner-level quiz application powered by AI. It generates quiz questions dynamically using an AI model and allows users to answer them. The application is built with TypeScript and follows a modular architecture.

## Features
- AI-generated quiz questions
- User-friendly interface for answering questions
- Ability to submit answers and receive feedback

## Project Structure
```
ai-quiz-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── ai
│   │   └── questionGenerator.ts # AI question generation logic
│   ├── controllers
│   │   └── quizController.ts  # Controller for quiz operations
│   ├── routes
│   │   └── quizRoutes.ts      # Route definitions for the quiz
│   └── types
│       └── index.ts           # Type definitions for questions and answers
├── package.json               # NPM package configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd ai-quiz-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Access the application in your web browser at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.