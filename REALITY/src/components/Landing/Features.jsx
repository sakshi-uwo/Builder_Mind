import React from 'react';
import { Rocket, Bot, Shield, Globe, Zap, Palette } from 'lucide-react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: <Rocket className="w-12 h-12 text-blue-400" />,
            title: 'Next-Gen Performance',
            description: 'Lightning-fast processing with optimized resource management and AI-powered efficiency.',
            color: 'blue'
        },
        {
            icon: <Bot className="w-12 h-12 text-cyan-400" />,
            title: 'AI-Powered Intelligence',
            description: 'Built-in AI assistance that learns and adapts to your workflow for maximum productivity.',
            color: 'cyan'
        },
        {
            icon: <Shield className="w-12 h-12 text-yellow-400" />,
            title: 'Advanced Security',
            description: 'Enterprise-grade encryption and multi-layer security protocols to protect your data.',
            color: 'yellow'
        },
        {
            icon: <Globe className="w-12 h-12 text-blue-500" />,
            title: 'Seamless Integration',
            description: 'Connect with any platform, device, or service effortlessly with universal compatibility.',
            color: 'blue'
        },
        {
            icon: <Zap className="w-12 h-12 text-yellow-500" />,
            title: 'Real-Time Sync',
            description: 'Instant synchronization across all your devices with zero latency.',
            color: 'yellow'
        },
        {
            icon: <Palette className="w-12 h-12 text-purple-400" />,
            title: 'Customizable Interface',
            description: 'Design your perfect workspace with unlimited customization options and themes.',
            color: 'purple'
        }
    ];

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="features-header">
                    <h2 className="section-title uppercase">
                        POWERFUL <span className="text-gradient">FEATURES</span>
                    </h2>
                    <p className="section-subtitle uppercase">
                        EVERYTHING YOU NEED TO WORK SMARTER, FASTER, AND BETTER
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-card glass card hover-scale`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`feature-icon-wrapper ${feature.color}-glow`}>
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
