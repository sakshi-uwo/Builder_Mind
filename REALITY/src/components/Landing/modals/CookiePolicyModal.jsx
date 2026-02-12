import React from 'react';
import { X, Cookie, Settings2, BarChart3, Shield, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { name } from '../../../config/constants';
import './Modal.css';

const CookiePolicyModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const sections = [
        {
            icon: Cookie,
            title: "What are Cookies?",
            items: [
                "Small text files stored on your device to enhance platform performance",
                "Cookies help us remember your preferences and construction site settings",
                "They allow us to provide a seamless transition between project sessions"
            ]
        },
        {
            icon: Settings2,
            title: "Types of Cookies We Use",
            items: [
                "Essential: Required for secure login and platform navigation",
                "Preference: Remember your interface language and dark mode settings",
                "Performance: Help us understand how builders interact with AI features",
                "Functionality: Store temporary site data for real-time cost analysis"
            ]
        },
        {
            icon: Smartphone,
            title: "Local Storage Usage",
            items: [
                "We use browser local storage for faster data retrieval of active projects",
                "Persistent session tokens to keep you logged in safely",
                "Temporary caching of blueprint metadata for offline viewing",
                "User interface state preservation (e.g., collapsed sidebar state)"
            ]
        },
        {
            icon: BarChart3,
            title: "Third-Party Analytics",
            items: [
                "Anonymous usage tracking to improve our infrastructure AI models",
                "Error reporting tools to ensure high availability of site monitoring",
                "Aggregated data to understand regional construction trends",
                "No third-party advertising cookies are used on our platform"
            ]
        },
        {
            icon: Shield,
            title: "Your Choices & Control",
            items: [
                "You can disable cookies through your browser privacy settings",
                "Managing preferences specifically for AI-AUTO via account dashboard",
                "Note: Disabling essential cookies may affect planning accuracy",
                "Clear your browser cache anytime to remove all local site data"
            ]
        }
    ];

    return (
        <div className="modal-overlay">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="modal-content"
            >
                {/* Header */}
                <div className="modal-header policy-header">
                    <div className="flex items-center gap-3">
                        <div className="policy-icon-badge cookie-theme-bg">
                            <Cookie className="w-6 h-6 cookie-theme-color" />
                        </div>
                        <div>
                            <h2 className="modal-title">Cookie Policy</h2>
                            <p className="footer-note">Last Updated: February 12, 2026</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="modal-close-btn"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="modal-body custom-scrollbar">
                    {/* Introduction */}
                    <div className="policy-intro">
                        <p>
                            {name} uses cookies and similar technologies to enhance your experience. This policy explains what these technologies are and why we use them to power our construction management platform.
                        </p>
                    </div>

                    {/* Sections */}
                    {sections.map((section, index) => (
                        <div key={index} className="policy-card">
                            <div className="card-icon-title">
                                <div className="card-icon-wrapper cookie-theme-bg">
                                    <section.icon className="w-5 h-5 cookie-theme-color" />
                                </div>
                                <h3 className="card-title">{section.title}</h3>
                            </div>
                            <ul className="policy-list">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="policy-list-item">
                                        <span className="cookie-theme-color policy-bullet">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div className="policy-contact">
                        <h3 className="card-title">Cookie Preferences?</h3>
                        <div className="contact-details">
                            <p><strong>Email:</strong> <a href="mailto:admin@uwo24.com">admin@uwo24.com</a></p>
                            <p><strong>Phone:</strong> <a href="tel:+918358990909">+91 83589 90909</a></p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="modal-footer">
                    <button
                        onClick={onClose}
                        className="modal-action-btn"
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default CookiePolicyModal;
