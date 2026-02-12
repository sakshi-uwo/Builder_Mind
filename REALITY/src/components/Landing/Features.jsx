import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: '🏗️',
            title: 'Project Planning',
            description: 'Intelligent milestone tracking and dependency management for complex builds.'
        },
        {
            icon: '🤖',
            title: 'AI Cost Estimation',
            description: 'Predictive analytics for accurate budgeting and material forecasting.'
        },
        {
            icon: '📊',
            title: 'Real-Time Tracking',
            description: 'Monitor site progress and labor efficiency with live data streams.'
        },
        {
            icon: '⚖️',
            title: 'Risk Management',
            description: 'Early alerts for schedule slippage and budget overruns to ensure delivery.'
        },
        {
            icon: '🤝',
            title: 'Stakeholder Sync',
            description: 'Unified platform for builders, contractors, and engineers to collaborate.'
        },
        {
            icon: '📱',
            title: 'Site Intelligence',
            description: 'Mobile-first field reporting and automated progress documentation.'
        }
    ];

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="features-header">
                    <h2 className="section-title">
                        Powerful <span className="text-gradient">Features</span>
                    </h2>
                    <p className="section-subtitle">
                        Everything you need to work smarter, faster, and better
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card glass card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
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
