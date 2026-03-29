const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
});

async function genaiWork() {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Hello Gemini, what is an interview?"
        });

        console.log(response.text);
    } catch (error) {
        console.error("Error generating content:", error.message);
    }
}

// run directly (for testing)
if (require.main === module) {
    genaiWork();
}

module.exports = genaiWork;