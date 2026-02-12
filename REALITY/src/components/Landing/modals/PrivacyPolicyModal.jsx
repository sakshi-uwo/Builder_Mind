import React from 'react';
import { X, Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { name } from '../../../config/constants';
import './Modal.css';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const sections = [
        {
            icon: Database,
            title: "Information We Collect",
            items: [
                "Account Information: Name, email, and authentication credentials",
                "Usage Data: Interaction patterns, and preferred features used",
                "Project Data: Project details, costs, and site monitoring data processed securely",
                "Technical Information: Device info, browser type, IP address"
            ]
        },
        {
            icon: Lock,
            title: "How We Use Your Information",
            items: [
                "Service Delivery: Contextual infrastructure planning and personalized experience",
                "Product Improvement: Enhance AI models and develop new automation features",
                "Communication: Updates, security alerts, and support responses",
                "Security & Compliance: Fraud detection and legal obligations"
            ]
        },
        {
            icon: Shield,
            title: "Data Security & Protection",
            items: [
                "End-to-End Encryption: Enterprise-grade protection for all communications",
                "Isolated Environments: Each project session runs separately for privacy",
                "Secure Storage: Enterprise servers with strict access controls",
                "Data Retention: User-controlled project history deletion anytime"
            ]
        },
        {
            icon: Eye,
            title: "Data Sharing & Third Parties",
            items: [
                "No Sale of Personal Data: Your privacy is our top priority",
                "Service Partners: Structured processing with encryption when necessary",
                "Infrastructure Providers: Trusted partners with confidentiality agreements",
                "Legal Requirements: Disclosure only when required by law"
            ]
        },
        {
            icon: UserCheck,
            title: "Your Rights & Control",
            items: [
                "Access & Download: View and export your data anytime",
                "Correction & Updates: Modify your information from account settings",
                "Deletion Rights: Remove project sessions or delete entire account",
                "Opt-Out Options: Control marketing communications and analytics tracking"
            ]
        },
        {
            icon: FileText,
            title: "Cookies & Tracking",
            items: [
                "Essential Cookies: Maintain session and platform functionality",
                "Analytics Cookies: Understand usage with your consent to improve UI",
                "Local Storage: Session data stored in browser for quick access",
                "Cookie Management: Control preferences through browser settings"
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
                        <div className="policy-icon-badge privacy-theme-bg">
                            <Shield className="w-6 h-6 privacy-theme-color" />
                        </div>
                        <div>
                            <h2 className="modal-title">Privacy Policy</h2>
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
                            This Privacy Policy explains how {name} collects, uses, and protects your information. We are committed to maintaining the highest standards of privacy and security for all our users.
                        </p>
                    </div>

                    {/* Sections */}
                    {sections.map((section, index) => (
                        <div key={index} className="policy-card">
                            <div className="card-icon-title">
                                <div className="card-icon-wrapper privacy-theme-bg">
                                    <section.icon className="w-5 h-5 privacy-theme-color" />
                                </div>
                                <h3 className="card-title">{section.title}</h3>
                            </div>
                            <ul className="policy-list">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="policy-list-item">
                                        <span className="privacy-theme-color policy-bullet">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div className="policy-contact">
                        <h3 className="card-title">Questions About Privacy?</h3>
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

export default PrivacyPolicyModal;
