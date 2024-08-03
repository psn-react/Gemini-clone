
// const apiKey = "AIzaSyAyWRVDqiAN-ofapMogMjzXY2DTrfPAasc";
// const apiKey = "AIzaSyCVGVPo3yR1k7RNBAW0sBGA_vjcEaP1Ed8";

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import { GoogleGenerativeAI }
    // HarmCategory,
    // HarmBlockThreshold,
    from "@google/generative-ai";

const apiKey = "AIzaSyCVGVPo3yR1k7RNBAW0sBGA_vjcEaP1Ed8";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
});

const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
};

async function run(prompt) {

    const chatSession = model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());

}

export default run;