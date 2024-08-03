

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
    GoogleGenerativeAI,
} from "@google/generative-ai";

// const apiKey = "AIzaSyCVGVPo3yR1k7RNBAW0sBGA_vjcEaP1Ed8";
const apiKey = "AIzaSyAOK1otrCmPuBmBQp78ZqzJfVSzf_iLkIA";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [],
    });

    try {
        const result = await chatSession.sendMessage(prompt);
        console.log("running");

        return result.response.text();
    } catch (error) {
        // console.log(error);
    }
}

export default run;