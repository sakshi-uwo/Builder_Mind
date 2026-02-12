import React, { useState } from 'react';
import { Calculator, HardHat, Package, Ruler, Warning, CheckCircle, Brain } from '@phosphor-icons/react';
import { projectService } from '../services/api';

const CostEstimation = () => {
    const [formData, setFormData] = useState({
        type: 'Residential',
        area: '',
        workers: '',
        materials: '',
        quality: 'Standard'
    });
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await projectService.estimate(formData);
            if (res.success) {
                setResult(res.data);
            }
        } catch (error) {
            console.error("Estimation Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>AI Cost Estimation</h1>
                <p style={{ color: 'var(--text-dim)' }}>Predict project costs and material needs using Reality-OS AI.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div className="glass card" style={{ padding: '1.5rem' }}>
                    <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calculator size={24} color="var(--pivot-blue)" />
                        Project Parameters
                    </h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Project Type</label>
                            <select
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-main)' }}
                            >
                                <option>Residential</option>
                                <option>Commercial</option>
                                <option>Infrastructure</option>
                                <option>Industrial</option>
                            </select>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Area (sq ft)</label>
                                <input
                                    type="number"
                                    placeholder="e.g. 2500"
                                    value={formData.area}
                                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-main)' }}
                                    required
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Workers</label>
                                <input
                                    type="number"
                                    placeholder="e.g. 15"
                                    value={formData.workers}
                                    onChange={(e) => setFormData({ ...formData, workers: e.target.value })}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-main)' }}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Material Requirements</label>
                            <textarea
                                placeholder="Steel, Concrete, Timber, etc."
                                value={formData.materials}
                                onChange={(e) => setFormData({ ...formData, materials: e.target.value })}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-main)', minHeight: '100px' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Finish Quality</label>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {['Standard', 'Premium', 'Luxury'].map(q => (
                                    <label key={q} style={{ flex: 1, cursor: 'pointer' }}>
                                        <input
                                            type="radio"
                                            name="quality"
                                            value={q}
                                            checked={formData.quality === q}
                                            onChange={(e) => setFormData({ ...formData, quality: e.target.value })}
                                            style={{ display: 'none' }}
                                        />
                                        <div style={{
                                            padding: '0.5rem',
                                            textAlign: 'center',
                                            borderRadius: '8px',
                                            border: `1px solid ${formData.quality === q ? 'var(--pivot-blue)' : 'var(--glass-border)'}`,
                                            background: formData.quality === q ? 'rgba(0, 71, 171, 0.1)' : 'transparent',
                                            transition: '0.3s'
                                        }}>
                                            {q}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary"
                            style={{ marginTop: '1rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                        >
                            {loading ? 'Analyzing...' : <><Brain size={20} /> Generate AI Estimate</>}
                        </button>
                    </form>
                </div>

                <div className="glass card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calculator size={24} color="var(--pivot-blue)" />
                        Estimation Report
                    </h3>

                    {!result ? (
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)', textAlign: 'center' }}>
                            <Calculator size={64} style={{ marginBottom: '1rem', opacity: 0.2 }} />
                            <p>Fill in the parameters and generate an estimate to see the AI analysis here.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(34, 211, 238, 0.05)', border: '1px solid rgba(34, 211, 238, 0.2)' }}>
                                <span style={{ fontSize: '0.875rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.25rem' }}>Total Estimated Cost</span>
                                <h2 style={{ fontSize: '2rem', color: 'var(--color-cyan-primary)', fontWeight: '800' }}>{result.totalEstimate}</h2>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Cost Breakdown</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                    {Object.entries(result.breakdown).map(([key, val]) => (
                                        <div key={key} style={{ padding: '0.75rem', borderRadius: '8px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'capitalize' }}>{key}</span>
                                            <div style={{ fontWeight: '600' }}>{val}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <CheckCircle size={20} color="#4CAF50" />
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Estimated Timeline</span>
                                    <div style={{ fontWeight: '600' }}>{result.timeline}</div>
                                </div>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>AI Recommendations</h4>
                                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                                    {result.recommendations.map((rec, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem' }}>{rec}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CostEstimation;
