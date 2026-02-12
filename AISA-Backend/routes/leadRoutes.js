import express from 'express';
import Lead from '../models/Lead.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const leads = await Lead.find();
        res.json({ success: true, data: leads });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const lead = new Lead(req.body);
        await lead.save();
        res.status(201).json({ success: true, data: lead });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

export default router;
