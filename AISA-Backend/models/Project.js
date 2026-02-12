import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    totalBudget: { type: Number, default: 0 },
    estimatedCost: { type: Number, default: 0 },
    progress: { type: Number, default: 0, min: 0, max: 100 },
    materialNeeds: [{
        item: String,
        quantity: Number,
        unit: String,
        status: { type: String, enum: ['Ordered', 'Pending', 'Delivered'], default: 'Pending' }
    }],
    units: {
        total: { type: Number, default: 0 },
        available: { type: Number, default: 0 }
    },
    category: { type: String, enum: ['Planning', 'Construction'], default: 'Planning' },
    propertyType: { type: String, default: 'Residential' },
    statusColor: { type: String, default: 'var(--charcoal)' },
    expectedCompletion: { type: Date },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;
