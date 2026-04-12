const { GoogleGenAI } = require("@google/genai");
// import { z } from "zod "
const { z } = require("zod");
// import {  } from "zod-to-json-schema";
const { zodToJsonSchema } = require("zod-to-json-schema")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
});

const interviewerRepostSchema = z.object({
    matchScore: z
        .number()
        .describe(
            "A score between 0 and 100 indicating how well the candidate's profile matches the job requirements"
        ),
    technicalQuestions: z.array(z.object({
        questions: z.string().describe("the techincal question may aksed in the interview"),
        intention: z.string().describe("the intention of innterviewerr behinf asking this questions"),
        answer: z
            .string()
            .describe(
                "How to answer this question, what points to cover, what approach to take etc."
            )
    })),
    behavioralQuestions: z
        .array(
            z.object({
                question: z
                    .string()
                    .describe("The technical question can be asked in the interview"),

                intention: z
                    .string()
                    .describe("The intention of interviewer behind asking this question"),

                answer: z
                    .string()
                    .describe(
                        "How to answer this question, what points to cover, what approach to take etc."
                    ),
            })
        )
        .describe(
            "Behavioral questions that can be asked in the interview along with their intention and answers"
        ),

    skillGaps: z
        .array(
            z.object({
                skill: z
                    .string()
                    .describe("The skill which the candidate is lacking"),

                severity: z
                    .enum(["low", "medium", "high"])
                    .describe("The severity of this skill gap"),
            })
        )
        .describe(
            "List of skill gaps in the candidate's profile along with their severity"
        ),

    preparationPlan: z
        .array(
            z.object({
                day: z
                    .number()
                    .describe("The day number in the preparation plan, starting from 1"),

                focus: z
                    .string()
                    .describe(
                        "The main focus of this day in the preparation plan"
                    ),

                tasks: z
                    .array(z.string())
                    .describe("List of tasks to be done on this day"),
            })
        )
        .describe(
            "A day-wise preparation plan for the candidate to follow"
        ),
})

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {

    const response = await ai.models.generateContent({
        model: "google-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseJsonSchema: zodToJsonSchema(interviewerRepostSchema)
        }
    })

    console.log(JSON.parse(response.text));


}


module.exports = generateInterviewReport