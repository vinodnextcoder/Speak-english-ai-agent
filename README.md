# Speak-english-aI-agent
Speak English with ease using AI
# Node.js Backend for AI-Powered Language Learning

This is the backend for an AI-powered English-speaking coach. The backend is built using **Node.js** and integrates an open-source **LLM (Large Language Model)** for real-time speech evaluation, pronunciation correction, and fluency feedback.


## Tech Stack
- **Node.js** - Backend runtime
- **Express.js** - Server framework

- **Ollama (LLM API)** - AI model for speech and text analysis

## Installation
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **Ollama** (LLM service running on `localhost:11434`)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/ai-speaking-coach-backend.git
   cd ai-speaking-coach-backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ai-speaking-coach
   OLAMA_API_URL=http://localhost:11434/api/generate
   ```

4. **Start the Server**
   ```bash
   npm start
   ```
   The server should be running at `http://localhost:5000`.

## API Endpoints
### 1. **Analyze Speech/Text**
- **Endpoint:** `POST /api/analyze`
- **Description:** Processes user speech or text and returns AI feedback.
- **Request Body:**
  ```json
  {
    "text": "I goes to school."
  }
  ```
- **Response:**
  ```json
  {
    "correctedText": "I go to school.",
    "feedback": "Verb conjugation corrected."
  }
  ```


## Contributing
Feel free to open issues and PRs. Contributions are welcome!

## License
MIT License

---
This backend is designed to be lightweight, efficient, and scalable for real-time AI-powered language learning.

