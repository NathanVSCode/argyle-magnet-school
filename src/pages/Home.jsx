import React from 'react';

const Home = () => {
    console.log('🏠 HOME COMPONENT RENDERING');
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
            color: 'white',
            padding: '20px'
        }}>
            <header style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '60px' }}>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Argyle Middle School
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: '#cbd5e1',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Technology Magnet Program • Innovation • Excellence
                </p>
            </header>

            <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    padding: '40px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    marginBottom: '40px'
                }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center' }}>
                        Welcome to Argyle Middle School
                    </h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#e2e8f0' }}>
                        We are proud to offer a comprehensive Technology Magnet program that prepares students
                        for success in an increasingly digital world. Our curriculum combines traditional academics
                        with cutting-edge technology education across three specialized pathways.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginBottom: '60px'
                }}>
                    <div style={{
                        background: 'rgba(139, 92, 246, 0.1)',
                        borderRadius: '12px',
                        padding: '30px',
                        border: '1px solid rgba(139, 92, 246, 0.2)'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#a78bfa' }}>
                            Computer Science
                        </h3>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                            Master algorithmic thinking with Python, C++, and web development.
                            High school credit available for advanced scholars.
                        </p>
                    </div>

                    <div style={{
                        background: 'rgba(236, 72, 153, 0.1)',
                        borderRadius: '12px',
                        padding: '30px',
                        border: '1px solid rgba(236, 72, 153, 0.2)'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#f472b6' }}>
                            Digital Arts & Media
                        </h3>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                            3D modeling, web design, and digital animation using Adobe Creative Cloud.
                            Focus on UX/UI and visual storytelling.
                        </p>
                    </div>

                    <div style={{
                        background: 'rgba(34, 197, 94, 0.1)',
                        borderRadius: '12px',
                        padding: '30px',
                        border: '1px solid rgba(34, 197, 94, 0.2)'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#4ade80' }}>
                            Gaming & Simulation
                        </h3>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                            Design immersive worlds using Unity and Unreal Engine.
                            Includes game logic, physics, and narrative design.
                        </p>
                    </div>
                </div>

                <div style={{
                    textAlign: 'center',
                    padding: '40px',
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
                        Ready to Shape Tomorrow?
                    </h3>
                    <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '30px' }}>
                        Join the Argyle family where innovation meets inspiration.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button style={{
                            background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
                            color: 'white',
                            border: 'none',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'transform 0.2s'
                        }}>
                            Learn More
                        </button>
                        <button style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;