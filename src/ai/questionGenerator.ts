import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateQuestions(topic: string, level: string) {
    const prompt = `Generate 5 multiple-choice quiz questions about "${topic}" for a "${level}" learner. Format as JSON: [{questionText, options, correctAnswer}]`;
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
    });
    let text = response.choices[0].message?.content || '';
    // Remove Markdown code block markers if present
    text = text.replace(/```json|```/g, '').trim();
    return JSON.parse(text);
}