# AI Quiz Generator

AI Quiz Generator is a web application that allows users to upload a PDF, select a topic, and generate AI-powered multiple-choice quizzes. The app uses Google Gemini for quiz generation and provides an interactive interface for taking quizzes and tracking scores.


## Features

- **PDF Upload:** Upload a PDF and extract its text content.
- **Topic Selection:** Choose a topic for quiz generation.
- **AI Quiz Generation:** Generate multiple-choice questions using Gemini AI.
- **Interactive Quiz:** Answer questions and get instant feedback.
- **Score Tracking:** View your score and review answers.
- **Modern UI:** Built with React.js and TailwindCSS.

## Project Structure

```
ai-quiz-generator/
  backend/      # Node.js Express API
  frontend/     # React.js client app
```

## Backend

- **Tech:** Node.js, Express, Gemini API, Multer, pdf-parse
- **Endpoints:**
  - `POST /api/upload/pdf` — Upload PDF and extract text
  - `POST /api/quiz/generate` — Generate quiz questions
  - `GET /health` — Health check

### Setup

```sh
cd backend
npm install
cp .env.example .env   # Add your GEMINI_API_KEY in .env
npm run dev            # Start backend server (default: http://localhost:8000)
```

## Frontend

- **Tech:** React.js, TailwindCSS, Axios, Framer Motion
- **Main Components:** PDFUpload, QuizGenerator, Quiz, ScoreTracker

### Setup

```sh
cd frontend
npm install
npm start              # Start frontend (default: http://localhost:3000)
```

## Usage

1. Start both backend and frontend servers.
2. Open [http://localhost:3000](http://localhost:3000).
3. Upload a PDF, select a topic, and generate a quiz.
4. Take the quiz and view your score.
5. [Visit the live app here](https://your-hosted-link.com)

## Environment Variables

- **Backend:**  
  - `GEMINI_API_KEY` — Your Google Gemini API key

## License

MIT

---

**Made with ❤️ by AI Quiz Generator Team**