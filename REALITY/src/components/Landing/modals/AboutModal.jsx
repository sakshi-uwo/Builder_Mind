import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Bot, X, Sparkles, MessageSquare, FileText, Cloud,
    Camera, Mic, Share2, Scan, FileDiff, Search
} from 'lucide-react';
import { name } from '../../../config/constants';
import './Modal.css';

const AboutModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const sections = [
        {
            title: "Core Intelligence",
            icon: <Bot className="w-5 h-5 privacy-theme-color" />,
            content: `${name} is powered by advanced AI systems enabling context-aware infrastructure planning, multi-modal understanding, and real-time site monitoring.`
        },
        {
            title: `Why ${name} Exists`,
            icon: <Sparkles className="w-5 h-5 cookie-theme-color" />,
            content: "Modern construction projects involve too many moving parts. AI-AUTO solves this by offering one intelligent platform for all tasks: faster workflows, smarter cost estimation, and real-world efficiency."
        }
    ];

    const features = [
        { title: "Smart Planning", icon: <MessageSquare className="w-4 h-4" />, desc: "Intelligent scheduling that adapts to project changes." },
        { title: "Cost Analysis", icon: <FileText className="w-4 h-4" />, desc: "Upload blueprints and get instant material estimates." },
        { title: "Site Vision", icon: <Camera className="w-4 h-4" />, desc: "Analyze site photos to track progress automatically." },
        { title: "Cloud Integration", icon: <Cloud className="w-4 h-4" />, desc: "Sync your project documents across all devices." },
        { title: "Live Monitoring", icon: <Scan className="w-4 h-4" />, desc: "Real-time updates from your construction site." },
        { title: "Voice Control", icon: <Mic className="w-4 h-4" />, desc: "Update project status hands-free on the field." },
        { title: "Report Generation", icon: <Share2 className="w-4 h-4" />, desc: "Create professional PDF reports in seconds." },
        { title: "Document Sync", icon: <FileDiff className="w-4 h-4" />, desc: "Keep all your site plans and versions in one place." },
        { title: "Smart Analytics", icon: <Search className="w-4 h-4" />, desc: "Deep search through your entire project history." }
    ];

    return (
        <div className="modal-overlay">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="modal-content about-modal-content"
            >
                {/* Header */}
                <div className="about-header">
                    <div className="about-header-pattern" />
                    <div className="about-header-glow" />

                    <button
                        onClick={onClose}
                        className="modal-close-btn"
                        style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }}
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="about-header-badge">
                        <Sparkles className="w-4 h-4" style={{ color: '#fbbf24' }} />
                        <span>Next-Gen Construction Platform</span>
                    </div>
                    <h2>{name} <sup>TM</sup></h2>
                    <p>Artificial Intelligence Powered Infrastructure</p>
                </div>

                {/* Scrollable Body */}
                <div className="about-body custom-scrollbar">
                    {/* Intro Section */}
                    <div className="about-intro">
                        <p>
                            A seamless, intelligent workspace designed to plan, monitor, and optimize construction projects. Experience the power of AI-driven cost estimation and real-time project management in one fluid interface.
                        </p>
                    </div>

                    {/* Core Sections Grid */}
                    <div className="about-sections-grid">
                        {sections.map((sec, i) => (
                            <div key={i} className="about-card">
                                <div className="card-icon-title">
                                    <div className="card-icon-wrapper">
                                        {sec.icon}
                                    </div>
                                    <h3 className="card-title">{sec.title}</h3>
                                </div>
                                <p className="card-content">
                                    {sec.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Features Grid */}
                    <div className="features-section">
                        <h3 className="features-header">Powerhouse Features</h3>
                        <div className="features-grid">
                            {features.map((feat, i) => (
                                <div key={i} className="feature-item">
                                    <div className="feature-icon-wrapper">
                                        {feat.icon}
                                    </div>
                                    <div className="feature-text">
                                        <h4 className="feature-title">{feat.title}</h4>
                                        <p className="feature-desc">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Efficiency Section */}
                    <div className="efficiency-section">
                        <h3 className="efficiency-title">Built for Efficiency</h3>
                        <div className="efficiency-badges">
                            {["🏗️ Builders", "👷 Project Managers", "🏠 Developers", "📐 Architects", "🌍 Infrastructure Experts"].map((label, i) => (
                                <span key={i} className="badge-item">
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer CIA */}
                <div className="modal-footer cta-footer">
                    <p className="footer-note">One Intelligent Platform. Unlimited Possibilities.</p>
                    <button
                        onClick={() => {
                            onClose();
                            navigate('/dashboard');
                        }}
                        className="modal-action-btn"
                    >
                        Explore Now
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutModal;
