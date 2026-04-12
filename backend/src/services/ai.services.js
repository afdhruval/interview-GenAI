const { GoogleGenAI } = require("@google/genai");
import { z } from "zod"
import { zodToJsonSchema } from "zod-to-json-schema";

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
});


async function generateInterviewReport({ resume, selfDescription, jobDescription }) {
    
}

// module.exports = genaiWork;