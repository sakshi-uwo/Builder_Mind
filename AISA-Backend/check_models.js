
import { VertexAI } from '@google-cloud/vertexai';
import 'dotenv/config';

const projectId = process.env.GCP_PROJECT_ID || 'ai-mall-484810';
const location = 'asia-south1';

const path = await import('path');
const { fileURLToPath } = await import('url');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const keyFilePath = path.join(__dirname, 'google_cloud_credentials.json'); // Root dir

async function listModels() {
    let vertexAI;
    try {
        console.log(`Trying credentials from: ${keyFilePath}`);
        vertexAI = new VertexAI({ project: projectId, location: location, keyFilename: keyFilePath });
    } catch (e) {
        console.log('Key file not found or invalid, trying ADC...');
        vertexAI = new VertexAI({ project: projectId, location: location });
    }

    // Test older stable model
    const model = 'gemini-2.5-flash';

    try {
        console.log(`Checking ${model} in ${location}...`);
        const generativeModel = vertexAI.getGenerativeModel({ model: model });
        const resp = await generativeModel.generateContent({
            contents: [{ role: 'user', parts: [{ text: 'Hello' }] }]
        });
        console.log(`Success with ${model}:`, resp.response.candidates[0].content.parts[0].text.substring(0, 50));
    } catch (e) {
        console.error(`Failed with ${model}:`, e.message);
    }
}

listModels();
