import React from 'react';
import Hero from '../components/Hero';
import { Calendar, Bell, Rocket, ExternalLink, ArrowRight, Code, Gamepad2, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            }
        }
    };

    return (
        <div className="relative pb-20">
            <Hero />

            {/* Quick Links Section - Redesigned */}
            <div className="max-w-7xl mx-auto px-4 mt-12 relative z-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >

                    {/* News Card */}
                    <motion.div variants={itemVariants} className="group bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-argyle-blue/50 transition-all duration-300 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden">
                        {/* Glowing border effect on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-argyle-blue/30 to-purple-500/30 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10" />
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                                <Calendar className="w-8 h-8 text-argyle-blue" />
                            </div>
                            <span className="px-3 py-1 text-xs font-mono text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">UPDATES</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">News & Announcements</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 text-center bg-white/5 rounded-lg p-2 w-16 border border-white/5">
                                    <span className="block text-xs text-gray-400 font-bold uppercase">Dec</span>
                                    <span className="block text-xl font-bold text-white">16</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors">8th Grade Ocean Wonders Trip</h4>
                                    <p className="text-sm text-gray-400 mt-1">Immersive marine biology experience at the aquarium.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 text-center bg-white/5 rounded-lg p-2 w-16 border border-white/5">
                                    <span className="block text-xs text-gray-400 font-bold uppercase">Nov</span>
                                    <span className="block text-xl font-bold text-white">19</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors">SGA Leadership Workshops</h4>
                                    <p className="text-sm text-gray-400 mt-1">Student Government Association meets in Room 202.</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/news" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors mt-8 group-hover:translate-x-2 duration-300">
                            View All News & Events <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </motion.div>

                    {/* Schedule Card */}
                    <motion.div variants={itemVariants} className="group bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden">
                        {/* Glowing border effect on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10" />
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-purple-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                                <Bell className="w-8 h-8 text-purple-400" />
                            </div>
                            <span className="px-3 py-1 text-xs font-mono text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20">TODAY: ODD</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">Bell Schedule</h3>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between items-center py-2 border-b border-white/5 group-hover:border-white/10 transition-colors">
                                <span className="text-gray-400">Student Entry</span>
                                <span className="text-white font-mono font-bold">7:50 AM</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/5 group-hover:border-white/10 transition-colors">
                                <span className="text-gray-400">Homeroom</span>
                                <span className="text-white font-mono font-bold">8:30 AM</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/5 group-hover:border-white/10 transition-colors">
                                <span className="text-gray-400">Dismissal</span>
                                <span className="text-white font-mono font-bold">3:00 PM</span>
                            </div>
                        </div>

                        <Link to="/schedule" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors mt-2 group-hover:translate-x-2 duration-300">
                            View Full Week & Delays <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </motion.div>

                    {/* Capstone Card */}
                    <motion.div variants={itemVariants} className="group bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-pink-500/50 transition-all duration-300 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden">
                        {/* Glowing border effect on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/30 to-rose-500/30 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10" />
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-pink-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(236,72,153,0.2)] group-hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]">
                                <Rocket className="w-8 h-8 text-pink-400" />
                            </div>
                            <span className="px-3 py-1 text-xs font-mono text-pink-300 bg-pink-500/10 rounded-full border border-pink-500/20">INNOVATION</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-200 transition-colors">Capstone Project</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Every 8th grader becomes an inventor. Design apps, build games, or engineer solutions to real-world problems.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></span>
                                Independent Research Logic
                            </li>
                            <li className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></span>
                                Prototype Development
                            </li>
                            <li className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></span>
                                Tech Showcase Presentation
                            </li>
                        </ul>

                        <Link to="/capstone" className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold transition-colors group-hover:translate-x-2 duration-300">
                            Explore Capstone Projects <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </motion.div>

                </motion.div>
            </div>

            {/* Focus Areas */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        <span className="text-gradient">Magnet Pathways</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Choose your path to the future. Our "Digital Design and Development" magnet program reimagines standard education through three specialized lenses.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* CS Pathway */}
                    <motion.div variants={itemVariants} className="p-8 rounded-3xl glass-card hover:bg-white/5 transition-all text-center group border border-white/5 hover:border-argyle-blue/30 relative overflow-hidden hover:-translate-y-2 duration-500 shadow-lg hover:shadow-[0_20px_40px_rgba(56,189,248,0.2)]">
                        {/* Animated top border glow */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-argyle-blue to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        {/* Inner glow on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-argyle-blue/10 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
                        <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                            <Code className="w-10 h-10 text-argyle-blue" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Computer Science</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            A rigorous dive into algorithmic thinking. Students master industry-standard languages including <span className="text-blue-300 font-medium">Python</span>, <span className="text-blue-300 font-medium">C++</span>, and <span className="text-blue-300 font-medium">HTML/CSS</span>.
                        </p>
                        <div className="text-xs font-mono text-gray-500 border-t border-white/5 pt-4 group-hover:text-blue-200/50 transition-colors">
                            High School Credit available for advanced scholars.
                        </div>
                    </motion.div>

                    {/* Game Design Pathway */}
                    <motion.div variants={itemVariants} className="p-8 rounded-3xl glass-card hover:bg-white/5 transition-all text-center group border border-white/5 hover:border-purple-500/30 relative overflow-hidden hover:-translate-y-2 duration-500 shadow-lg hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)]">
                        {/* Animated top border glow */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        {/* Inner glow on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-purple-500/10 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
                        <div className="w-20 h-20 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                            <Gamepad2 className="w-10 h-10 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Focus on gaming & Simulation</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Where code meets storytelling. Students design immersive worlds and playable experiences using professional engines like <span className="text-purple-300 font-medium">Unity</span> and <span className="text-purple-300 font-medium">Unreal Engine</span>.
                        </p>
                        <div className="text-xs font-mono text-gray-500 border-t border-white/5 pt-4 group-hover:text-purple-200/50 transition-colors">
                            Includes Logic, Physics, and Narrative Design.
                        </div>
                    </motion.div>

                    {/* Digital Art Pathway */}
                    <motion.div variants={itemVariants} className="p-8 rounded-3xl glass-card hover:bg-white/5 transition-all text-center group border border-white/5 hover:border-pink-500/30 relative overflow-hidden hover:-translate-y-2 duration-500 shadow-lg hover:shadow-[0_20px_40px_rgba(236,72,153,0.2)]">
                        {/* Animated top border glow */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        {/* Inner glow on hover */}
                        <div className="absolute inset-0 rounded-3xl bg-pink-500/10 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
                        <div className="w-20 h-20 bg-pink-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                            <Palette className="w-10 h-10 text-pink-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Digital Art & Multimedia</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            The intersection of creativity and tech. Curriculum covers <span className="text-pink-300 font-medium">3D Modeling</span>, <span className="text-pink-300 font-medium">Web Design</span>, and <span className="text-pink-300 font-medium">Digital Animation</span> using the Adobe Creative Cloud suite.
                        </p>
                        <div className="text-xs font-mono text-gray-500 border-t border-white/5 pt-4 group-hover:text-pink-200/50 transition-colors">
                            Focus on UX/UI and Visual Storytelling.
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="py-20 text-center border-t border-purple-500/30 relative overflow-hidden shadow-inner shadow-purple-500/20"
            >
                {/* Background Effects with more glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-3xl"></div>
                <div className="absolute top-0 left-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow shadow-[0_0_100px_rgba(56,189,248,0.4)]"></div>
                <div className="absolute bottom-0 right-1/4 w-52 h-52 bg-pink-500/20 rounded-full blur-[120px] animate-pulse-slow delay-1000 shadow-[0_0_120px_rgba(236,72,153,0.4)]"></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/15 rounded-full blur-[80px] animate-pulse-slow delay-500 shadow-[0_0_80px_rgba(168,85,247,0.3)]"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-argyle-blue/20 to-purple-500/20 border border-white/10 backdrop-blur-sm mb-8"
                    >
                        <Rocket className="w-5 h-5 text-argyle-blue mr-2" />
                        <span className="text-sm font-medium text-argyle-blue">Join Our Community</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        Ready to Shape Tomorrow?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        Join the Argyle family where innovation meets inspiration. Together, we're not just building the future—we're creating it.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.a
                            href="/about"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(56, 189, 248, 0.7)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                if (window.triggerParticleCelebration) {
                                    window.triggerParticleCelebration(e.clientX, e.clientY);
                                }
                            }}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-argyle-blue to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group cursor-pointer"
                        >
                            <span className="relative z-10">Learn More About Us</span>
                            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            {/* Button shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </motion.a>

                        <motion.a
                            href="/programs"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(16, 185, 129, 0.7)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                if (window.triggerParticleCelebration) {
                                    window.triggerParticleCelebration(e.clientX, e.clientY);
                                }
                            }}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group cursor-pointer"
                        >
                            {/* Animated background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10">Explore Our Programs</span>
                            <div className="ml-2 w-5 h-5 relative z-10">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="group-hover:text-white transition-colors"
                                >
                                    <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </motion.div>
                            </div>
                            {/* Button shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </motion.a>
                    </motion.div>

                    {/* Animated elements */}
                    <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-10 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;