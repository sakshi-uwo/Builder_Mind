import express from 'express';
import Project from '../models/Project.js';
const router = express.Router();

// Get all projects
import { generativeModel } from '../config/vertex.js';

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json({ success: true, data: projects });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Create new project
router.post('/', async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json({ success: true, data: project });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

// AI Cost Estimation Placeholder
router.post('/estimate', async (req, res) => {
    try {
        const { area, workers, materials, type, quality } = req.body;

        const prompt = `As a construction cost estimator, provide a detailed cost breakdown and total estimate for a ${type} project.
        Details:
        - Area: ${area} sq ft
        - Workers: ${workers}
        - Key Materials: ${materials}
        - Quality: ${quality} (Standard/Premium/Luxury)
        
        Provide the response in JSON format with fields:
        {
          "totalEstimate": "amount in USD/INR",
          "breakdown": {
            "labor": "cost",
            "materials": "cost",
            "logistics": "cost",
            "permits": "cost"
          },
          "timeline": "estimated duration",
          "recommendations": ["list of tips"]
        }`;

        const result = await generativeModel.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Find JSON in response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        const estimationData = jsonMatch ? JSON.parse(jsonMatch[0]) : { error: "Could not parse AI response", raw: text };

        res.json({ success: true, data: estimationData });
    } catch (error) {
        console.error("AI Estimation Error:", error);
        res.status(500).json({ success: false, message: "AI Estimation failed", detail: error.message });
    }
});

export default router;
