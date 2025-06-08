import express from 'express';
import { setQuizRoutes } from './routes/quizRoutes';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve the quiz.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'quiz.html'));
});

setQuizRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});