const express = require("express");
const cors = require("cors");
const { analyzeText } = require("./ollamaUtils");

const app = express();
app.use(cors());
app.use(express.json());


app.post("/analyze", async (req, res) => {
    console.log(req.body)
    const { text } = req.body;
    const feedback = await analyzeText(text);
    res.json({ feedback });
});

app.listen(5000, () => console.log("Server running on port 5000"));
