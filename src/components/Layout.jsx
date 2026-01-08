import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import AgentInterface from './ArgyleAssister/AgentInterface';
import Footer from './Footer';
import ParticleEffects from './ParticleEffects';

const Layout = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-argyle-purple selection:text-white overflow-x-hidden">
            <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none" />
            <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-argyle-purple/20 pointer-events-none" />

            {/* INTENSE AMBIENT GLOW SYSTEM */}
            <div className="fixed -top-24 -left-24 w-[500px] h-[500px] bg-argyle-purple/30 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="fixed top-1/2 -right-24 w-[600px] h-[600px] bg-argyle-blue/20 rounded-full blur-[140px] pointer-events-none animate-pulse delay-700" />
            <div className="fixed -bottom-24 left-1/3 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />
            <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-500" />
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(107,33,168,0.1),transparent_70%)] pointer-events-none" />
            {/* END AMBIENT GLOW */}

            {/* Enterprise Particle Effects */}
            <ParticleEffects />

            <Navbar />

            <main className="relative pt-20">
                <Outlet />
            </main>

            <Footer />

            {/* The AI Agent lives globally in the Layout */}
            <AgentInterface />
        </div>
    );
};

export default Layout;