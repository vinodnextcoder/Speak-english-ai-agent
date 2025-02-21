const axios = require("axios");

async function analyzeText(text) {
    const response = await axios.post("http://localhost:11434/api/generate", {
        model: "mistral",
        prompt: `Analyze the following English sentence for grammar, fluency, and pronunciation mistakes. Provide corrections and suggestions:\n\n"${text}"`,
        stream: false,
    });
    return response.data.response;
}

module.exports = { analyzeText };
