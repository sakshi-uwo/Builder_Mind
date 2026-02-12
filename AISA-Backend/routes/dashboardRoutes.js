import express from 'express';
import Project from '../models/Project.js';
import Lead from '../models/Lead.js';
const router = express.Router();

router.get('/stats', async (req, res) => {
    try {
        const totalLeads = await Lead.countDocuments();
        const activeProjects = await Project.countDocuments({ progress: { $lt: 100 } });

        const leads = await Lead.find();
        const distribution = {
            Hot: leads.filter(l => l.status === 'Hot').length,
            Warm: leads.filter(l => l.status === 'Warm').length,
            Cold: leads.filter(l => l.status === 'Cold').length
        };

        res.json({
            success: true,
            totalLeads,
            activeProjects,
            siteVisits: 12, // Placeholder
            projectedRevenue: "$2.4M", // Placeholder
            distribution
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;
