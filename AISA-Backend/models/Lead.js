import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    status: { type: String, enum: ['Hot', 'Warm', 'Cold'], default: 'Cold' },
    projectInterest: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    lastActivity: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

const Lead = mongoose.model('Lead', leadSchema);
export default Lead;
