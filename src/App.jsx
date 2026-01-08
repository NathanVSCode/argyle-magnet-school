import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './components/ThemeProvider';
import { PageTransition } from './components/PageTransition';
import Layout from './components/Layout';
import Home from './pages/Home';
import Staff from './pages/Staff';
import About from './pages/About';
import Schedule from './pages/Schedule';
import News from './pages/News';
import Capstone from './pages/Capstone';
import PrincipalsPalace from './pages/PrincipalsPalace';
import Attendance from './pages/Attendance';
import BusRoutes from './pages/BusRoutes';
import ParentDashboard from './components/ParentDashboard';
import Programs from './pages/Programs';
import ComputerScience from './pages/ComputerScience';
import DigitalArts from './pages/DigitalArts';
import Gaming from './pages/Gaming';
import Cybersecurity from './pages/Cybersecurity';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import DesignSystem from './pages/DesignSystem';
import ScrollToTop from './components/ScrollToTop';

// App content component with light transitions
function AppContent() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <PageTransition mode="fade">
                            <Home />
                        </PageTransition>
                    } />
                    <Route path="staff" element={
                        <PageTransition mode="fade">
                            <Staff />
                        </PageTransition>
                    } />
                    <Route path="about" element={
                        <PageTransition mode="fade">
                            <About />
                        </PageTransition>
                    } />
                    <Route path="schedule" element={
                        <PageTransition mode="fade">
                            <Schedule />
                        </PageTransition>
                    } />
                    <Route path="news" element={
                        <PageTransition mode="fade">
                            <News />
                        </PageTransition>
                    } />
                    <Route path="capstone" element={
                        <PageTransition mode="fade">
                            <Capstone />
                        </PageTransition>
                    } />
                    <Route path="principals-palace" element={
                        <PageTransition mode="fade">
                            <PrincipalsPalace />
                        </PageTransition>
                    } />
                    <Route path="attendance-policy" element={
                        <PageTransition mode="fade">
                            <Attendance />
                        </PageTransition>
                    } />
                    <Route path="bus-routes" element={
                        <PageTransition mode="fade">
                            <BusRoutes />
                        </PageTransition>
                    } />
                    <Route path="parent-dashboard" element={
                        <PageTransition mode="fade">
                            <ParentDashboard />
                        </PageTransition>
                    } />
                    <Route path="programs" element={
                        <PageTransition mode="fade">
                            <Programs />
                        </PageTransition>
                    } />
                    <Route path="computer-science" element={
                        <PageTransition mode="fade">
                            <ComputerScience />
                        </PageTransition>
                    } />
                    <Route path="digital-arts" element={
                        <PageTransition mode="fade">
                            <DigitalArts />
                        </PageTransition>
                    } />
                    <Route path="gaming" element={
                        <PageTransition mode="fade">
                            <Gaming />
                        </PageTransition>
                    } />
                    <Route path="cybersecurity" element={
                        <PageTransition mode="fade">
                            <Cybersecurity />
                        </PageTransition>
                    } />
                    <Route path="admissions" element={
                        <PageTransition mode="fade">
                            <Admissions />
                        </PageTransition>
                    } />
                    <Route path="contact" element={
                        <PageTransition mode="fade">
                            <Contact />
                        </PageTransition>
                    } />
                    <Route path="design-system" element={
                        <PageTransition mode="fade">
                            <DesignSystem />
                        </PageTransition>
                    } />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    console.log('🚀 APP COMPONENT RENDERING');
    return <Home />;
}

export default App;