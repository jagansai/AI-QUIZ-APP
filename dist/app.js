"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quizRoutes_1 = require("./routes/quizRoutes");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// Serve the quiz.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'quiz.html'));
});
(0, quizRoutes_1.setQuizRoutes)(app);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
