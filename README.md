# Speak-English-AI-Agent

## 🏗️ Node.js Backend for AI-Powered Language Learning

This repository contains the backend for an **AI-powered English-speaking**. The backend is built with **Node.js** and integrates an open-source **LLM (Large Language Model)** for real-time speech evaluation, pronunciation correction, and fluency feedback.

---

## 🚀 Tech Stack
- **Node.js** - Backend runtime
- **Express.js** - Server framework
- **Ollama (LLM API)** - AI model for speech and text analysis
- **Docker** - Containerized deployment

---

## 📦 Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended) → [Download Node.js](https://nodejs.org/)
- **Docker** → [Download Docker](https://www.docker.com/get-started)
- **Ollama (LLM API)** running on `localhost:11434`

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/vinodnextcoder/Speak-english-ai-agent.git
cd Speak-english-ai-agent
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
PORT=5000
OLLAMA_API_URL=http://localhost:11434/api/generate
```

### 4️⃣ Start the Server
```bash
npm start
```
The server should now be running at `http://localhost:5000`.

---

## 📌 Running Mistral 7B with Ollama in Docker

This repository provides an **easy-to-use Docker setup** for running **Mistral 7B** using **Ollama**.

### ✅ Features
✔️ Run **Mistral 7B** locally with a single command.  
✔️ Pull Ollama and the model directly from the registry.  
✔️ Lightweight & efficient setup.  

### 1️⃣ Install Docker
If you haven't installed Docker, get it here:  
🔗 [Download Docker](https://www.docker.com/get-started)

Verify installation:
```bash
docker --version
```

### 2️⃣ Pull the Ollama Docker Image
```bash
docker pull ollama/ollama
```

### 3️⃣ Run the Ollama Container
```bash
docker run -d --name ollama-container -p 11434:11434 ollama/ollama
```
- `-d` → Run in the background.
- `--name ollama-container` → Assigns a name.
- `-p 11434:11434` → Exposes Ollama API.

Check if the container is running:
```bash
docker ps
```

### 4️⃣ Pull the Mistral 7B Model
```bash
docker exec -it ollama-container ollama pull mistral
```

---

## 📡 API Endpoints
### 1️⃣ Analyze Speech/Text
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

---

## 🤝 Contributing
We welcome contributions! Feel free to open issues and submit pull requests.

---

## 📜 License
MIT License

---

This backend is designed to be **lightweight, efficient, and scalable** for real-time AI-powered language learning. 🚀

