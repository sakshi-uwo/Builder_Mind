import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-white/10"
                >
                    <div className="p-6 border-b border-gray-200 dark:border-white/10 flex justify-between items-center bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About Reality-OS</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-4 text-gray-700 dark:text-gray-300">
                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                            <p>
                                Reality-OS is dedicated to revolutionizing construction management through artificial intelligence. We empower builders and developers to streamline their projects, enhance productivity, and unlock new possibilities with cutting-edge AI technology.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What We Offer</h3>
                            <p>
                                Our platform provides intelligent construction management solutions designed to adapt to your project needs. From simple planning to complex site monitoring, Reality-OS delivers powerful tools in an intuitive interface.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Technology</h3>
                            <p>
                                Built on advanced AI models and modern web technologies, Reality-OS combines speed, reliability, and intelligence. We continuously innovate to bring you the latest advancements in AI-powered infrastructure.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Commitment</h3>
                            <p>
                                We are committed to your privacy, security, and success. Your data is protected with enterprise-grade security, and our team is dedicated to providing exceptional support and continuous improvement.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Get in Touch</h3>
                            <p>
                                Have questions or feedback? We'd love to hear from you. Reach out to us at admin@uwo24.com or call us at +91 83589 90909.
                            </p>
                        </section>

                        <section className="text-center pt-4">
                            <p className="text-sm italic text-gray-500 dark:text-gray-400">
                                Powered by UWO24 Technologies
                            </p>
                        </section>
                    </div>

                    <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-800 text-center">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default AboutModal;
