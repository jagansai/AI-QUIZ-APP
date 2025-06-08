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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQuestions = void 0;
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
function generateQuestions(topic, level) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const prompt = `Generate 5 multiple-choice quiz questions about "${topic}" for a "${level}" learner. Format as JSON: [{questionText, options, correctAnswer}]`;
        const response = yield openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7,
        });
        let text = ((_a = response.choices[0].message) === null || _a === void 0 ? void 0 : _a.content) || '';
        // Remove Markdown code block markers if present
        text = text.replace(/```json|```/g, '').trim();
        return JSON.parse(text);
    });
}
exports.generateQuestions = generateQuestions;
