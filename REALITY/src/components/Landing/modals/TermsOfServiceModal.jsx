import React from 'react';
import { X, Scale, FileText, DollarSign, Shield, AlertCircle, UserX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { name } from '../../../config/constants';

const TermsOfServiceModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const sections = [
        {
            icon: Scale,
            title: "Acceptance of Terms",
            content: `By accessing or using ${name}, you agree to be bound by these Terms of Service. If you do not agree to all terms, you may not access or use our services. These terms apply to all visitors, builders, and project managers.`
        },
        {
            icon: FileText,
            title: "User Responsibilities",
            content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate project data and maintain the security of your site monitoring feeds."
        },
        {
            icon: DollarSign,
            title: "Payments & Subscriptions",
            content: "Certain features of the Platform require payment. All fees are non-refundable unless required by law. We reserve the right to change our pricing upon notice. Subscription renewals are processed automatically unless cancelled."
        },
        {
            icon: Shield,
            title: "Intellectual Property",
            content: "The Platform and its original content, features, and functionality (including AI models) are owned by AI-AUTO and are protected by international copyright, trademark, and other intellectual property laws."
        },
        {
            icon: UserX,
            title: "Account Termination",
            content: "We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms. Upon termination, your right to use the service will cease immediately."
        },
        {
            icon: AlertCircle,
            title: "Limitation of Liability",
            content: `${name} shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the service, including site delays or project estimation variances.`
        }
    ];

    return (
        <AnimatePresence>
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
                            <div className="policy-icon-badge terms-theme-bg">
                                <Scale className="w-6 h-6 terms-theme-color" />
                            </div>
                            <div>
                                <h2 className="modal-title">Terms of Service</h2>
                                <p className="footer-note">Effective Date: February 12, 2026</p>
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
                        {/* Intro */}
                        <div className="policy-intro">
                            <p>
                                Welcome to {name}. Our Terms of Service are designed to ensure a secure, efficient, and transparent environment for construction infrastructure planning and management.
                            </p>
                        </div>

                        {/* Sections */}
                        {sections.map((section, index) => (
                            <div key={index} className="policy-card">
                                <div className="card-icon-title">
                                    <div className="card-icon-wrapper terms-theme-bg">
                                        <section.icon className="w-5 h-5 terms-theme-color" />
                                    </div>
                                    <h3 className="card-title">{section.title}</h3>
                                </div>
                                <p className="card-content" style={{ paddingLeft: '0' }}>
                                    {section.content}
                                </p>
                            </div>
                        ))}

                        {/* Contact for Legal */}
                        <div className="policy-contact">
                            <h3 className="card-title">Legal Inquiries</h3>
                            <div className="contact-details">
                                <p>For any legal or compliance questions, please contact our legal team at:</p>
                                <p><strong>Email:</strong> <a href="mailto:legal@uwo24.com">legal@uwo24.com</a></p>
                                <p><strong>Address:</strong> Raipur, Chhattisgarh, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="modal-footer">
                        <button
                            onClick={onClose}
                            className="modal-action-btn"
                        >
                            Accept & Close
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default TermsOfServiceModal;
