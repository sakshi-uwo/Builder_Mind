import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleUser, Menu, X } from 'lucide-react';
import { logo, name } from '../../config/constants';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="navbar-header">
            <div className="navbar-container">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="navbar-brand"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <img src={logo} alt={`${name} Logo`} className="navbar-logo" />
                    <span className="navbar-brand-name">{name}</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="navbar-actions"
                >
                    <ThemeToggle />

                    <div className="navbar-desktop-links">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="login-btn"
                        >
                            <span>Log In</span>
                            <CircleUser className="login-icon" />
                        </motion.button>
                    </div>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                    >
                        <div className="mobile-menu-content">
                            <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
                            <a href="#features" className="nav-link" onClick={() => setIsMenuOpen(false)}>Features</a>
                            <a href="#technology" className="nav-link" onClick={() => setIsMenuOpen(false)}>Technology</a>
                            <div className="mobile-menu-actions">
                                <ThemeToggle />
                                <a href="/dashboard" className="btn btn-primary nav-btn" onClick={() => setIsMenuOpen(false)}>Get Started</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
