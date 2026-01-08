import React from 'react';
import { motion } from 'framer-motion';
import { History, Cpu, Tablet, Globe, Award, Database, ArrowRight } from 'lucide-react';
import { ProgressiveImage, LazyLoad } from '../components/LoadingStates';

const About = () => {
    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-20"
            >
                {/* Hero Section */}
                <div className="text-center space-y-6">
    {/* VISUAL HERO */}
    <motion.div initial={{ rotate: -7, scale: 0.85 }} animate={{ rotate: 0, scale: 1 }} transition={{ duration: 1.1, type: 'spring', stiffness: 60 }} className="inline-block bg-gradient-to-br from-argyle-blue to-purple-400 px-6 py-1.5 rounded-full mb-4 shadow-lg animate-fade-in-up relative overflow-hidden">
      <span className="text-white text-lg font-semibold tracking-wider uppercase relative z-10">Home of the Eagles</span>
      {/* Subtle shimmer on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-all duration-1000" />
    </motion.div>
    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight relative z-10">
        Our Evolution
    </h1>
    <motion.div
  initial={{ opacity: 0, y: -60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, type: 'spring' }}
  className="mx-auto max-w-2xl mb-8 relative"
>
  <span className="block text-5xl sm:text-7xl font-black tracking-tight text-argyle-blue animate-wiggle mb-2 relative z-10">
    ARGYLE
  </span>
  <span className="block text-2xl sm:text-4xl font-bold tracking-tight text-purple-400 animate-bounce-up mb-2 relative z-10">
    Middle School
  </span>
  <span className="block text-lg sm:text-xl font-semibold text-white animate-fade-in-fast mt-2 relative z-10">
    Where Imagination Takes Flight
  </span>

  {/* Dynamic glowing background for text */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-3xl rounded-full animate-pulse-slow opacity-70" />
</motion.div>
    {/* Graphics & Timeline Section */}
    <div className="my-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
      <motion.div initial={{ scale: 0.8, rotate: -10 }} whileInView={{ rotate: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, type: 'spring' }} className="w-full md:w-1/2 relative group">
        <img src="/timeline-graphic.svg" className="w-full max-w-[450px] mx-auto animate-pulse-timeline relative z-10 group-hover:scale-105 transition-transform duration-500" alt="Argyle Timeline Milestones" />
        {/* Interactive glow behind graphic */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-full -z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 rounded-full -z-10" />
      </motion.div>
      <motion.ul initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full md:w-1/2 space-y-5 text-lg relative z-10">
        <li className="flex items-center gap-3 animate-fade-in-delay-1 group-hover:translate-x-2 transition-transform duration-300">
          <span className="inline-block w-6 h-6 rounded-full bg-argyle-blue shadow-md mr-2 animate-bounce group-hover:scale-125 transition-transform duration-300 shadow-blue-500/50"></span>
          <span className="group-hover:text-blue-300 transition-colors">Technology-rich classrooms for creators & makers.</span>
        </li>
        <li className="flex items-center gap-3 animate-fade-in-delay-2 group-hover:translate-x-2 transition-transform duration-300">
          <span className="inline-block w-6 h-6 rounded-full bg-purple-400 shadow-md mr-2 animate-bounce group-hover:scale-125 transition-transform duration-300 shadow-purple-500/50"></span>
          <span className="group-hover:text-purple-300 transition-colors">Digital arts & STEM magnet programs.</span>
        </li>
        <li className="flex items-center gap-3 animate-fade-in-delay-3 group-hover:translate-x-2 transition-transform duration-300">
          <span className="inline-block w-6 h-6 rounded-full bg-pink-400 shadow-md mr-2 animate-bounce group-hover:scale-125 transition-transform duration-300 shadow-pink-500/50"></span>
          <span className="group-hover:text-pink-300 transition-colors">Collaborative projects and a spirit of innovation.</span>
        </li>
        <li className="flex items-center gap-3 animate-fade-in-delay-4 group-hover:translate-x-2 transition-transform duration-300">
          <span className="inline-block w-6 h-6 rounded-full bg-blue-300 shadow-md mr-2 animate-bounce group-hover:scale-125 transition-transform duration-300 shadow-blue-400/50"></span>
          <span className="group-hover:text-blue-200 transition-colors">Personal growth powered by teamwork & creativity.</span>
        </li>
      </motion.ul>
    </div>
</div>

                {/* Timeline Section */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-argyle-blue via-purple-500 to-pink-500 rounded-full opacity-20"></div>

                    {/* 1971: The Foundation */}
                    <TimelineItem
                        year="1971"
                        title="The Foundation"
                        content="Argyle Middle School opens its doors to the Silver Spring community. For over three decades, it serves as a traditional neighborhood hub, building a legacy of academic support and community involvement."
                        icon={<History className="w-6 h-6 text-argyle-blue" />}
                        side="left"
                    />

                    {/* 2005: The Digital Revolution */}
                    <TimelineItem
                        year="2005"
                        title="The Magnet Transformation"
                        content="A pivotal year. Argyle joins the Middle School Magnet Consortium (MSMC). The curriculum is completely reimagined. Textbooks give way to technology stacks. The student body expands to welcome scholars from eight neighboring elementary schools, united by a passion for digital innovation."
                        icon={<Cpu className="w-6 h-6 text-purple-400" />}
                        side="right"
                    />

                    {/* 2019: Mobile Innovation */}
                    <TimelineItem
                        year="2019"
                        title="Verizon Innovative Learning School"
                        content="Argyle is selected for a prestigious partnership with Verizon. Every student and teacher is equipped with an iPad and data plan, bridging the digital divide and ensuring learning continues seamlessly beyond the classroom walls."
                        icon={<Tablet className="w-6 h-6 text-pink-400" />}
                        side="left"
                    />

                    {/* Present Day */}
                    <TimelineItem
                        year="Today"
                        title="Inventing the Future"
                        content="We are more than a school; we are an incubator for future engineers, game designers, and digital artists. Our students don't just consume technology—they create it. With courses in Advanced CS, Digital Art, and Entrepreneurship, Argyle continues to set the standard for 21st-century education."
                        icon={<Globe className="w-6 h-6 text-white" />}
                        side="right"
                    />
                </div>

                {/* Grid of Distinctions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 relative z-10">
                    <LazyLoad animationType="fadeUp" className="glass-panel p-8 rounded-3xl text-center hover:bg-white/5 transition-colors group relative overflow-hidden">
                        {/* Background glow on hover */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                            <Database className="w-8 h-8 text-argyle-blue" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200">Magnet Consortium</h3>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300">Member of the rigorous MSMC, offering specialized high-school credit courses in middle school.</p>
                    </LazyLoad>
                    <LazyLoad animationType="fadeUp" className="glass-panel p-8 rounded-3xl text-center hover:bg-white/5 transition-colors group relative overflow-hidden">
                        {/* Background glow on hover */}
                        <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                        <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                            <Award className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200">Excellence in Equity</h3>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300">Committed to closing the opportunity gap through universal access to cutting-edge technology.</p>
                    </LazyLoad>
                    <LazyLoad animationType="fadeUp" className="glass-panel p-8 rounded-3xl text-center hover:bg-white/5 transition-colors group relative overflow-hidden">
                        {/* Background glow on hover */}
                        <div className="absolute inset-0 bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                        <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(236,72,153,0.3)] group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                            <Cpu className="w-8 h-8 text-pink-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-200">Digital Citizenship</h3>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300">Preparing responsible leaders for an interconnected world through our specialized advisory programs.</p>
                    </LazyLoad>
                </div>


                {/* About Our Impact Section - Redesigned with new graphic and paragraph */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="flex flex-col md:flex-row items-center gap-10 mt-20 pt-12 border-t border-argyle-blue/30 relative z-10"
                >
                    <div className="w-full md:w-1/2 max-w-xl space-y-6 text-lg text-white/90 relative z-10">
                        <motion.h2 initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .8, delay: .3 }} className="text-3xl font-bold text-purple-400 mb-3 glow-text-purple">About Our Impact</motion.h2>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="leading-relaxed group-hover:text-gray-200 transition-colors">
                            At Argyle Middle School, our commitment extends beyond the classroom. We foster a vibrant environment with media labs for film, music, robotics, and digital arts, igniting creativity and technical skill. Our thriving community is always active, packed with engaging events like SGA meetings, enriching field trips, coding activities, and diverse cultural celebrations that engage every student. We pride ourselves on student leadership programs and dedicated staff committed to instructional excellence and innovation. Moreover, we provide comprehensive support for student wellness, fostering a deep sense of belonging and promoting holistic growth at every stage of their middle school journey.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, rotate: 10 }}
                        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: 'spring', stiffness: 50, delay: 0.7 }}
                        className="w-full md:w-1/2 flex justify-center items-center relative group"
                    >
                        <ProgressiveImage
                            src="/argyle-growth-chart.svg"
                            className="w-full max-w-sm drop-shadow-hero animate-float-bob relative z-10 group-hover:scale-105 transition-transform duration-500"
                            placeholderClassName="rounded-2xl"
                            alt="Argyle Growth Chart Graphic"
                        />
                        {/* Interactive glow behind graphic */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20 blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-full -z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 rounded-full -z-10" />
                    </motion.div>
                </motion.div>
                {/* Enhanced Inspirational Closing Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 50 }}
                    className="mt-20 pt-12 relative py-24 overflow-hidden"
                >
                    {/* Enhanced Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-argyle-blue/8 via-purple-500/6 to-pink-500/8"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

                    {/* Floating geometric shapes */}
                    <div className="absolute top-20 left-16 w-16 h-16 border-2 border-blue-400/30 rounded-full animate-float-slow"></div>
                    <div className="absolute top-32 right-24 w-12 h-12 bg-purple-400/20 rotate-45 animate-float-slower"></div>
                    <div className="absolute bottom-32 left-20 w-8 h-8 bg-pink-400/30 rounded-full animate-float-reverse"></div>
                    <div className="absolute bottom-20 right-32 w-20 h-20 border border-white/10 rounded-lg rotate-12 animate-float-slow delay-1000"></div>

                    {/* Animated particles with different colors */}
                    <div className="absolute top-16 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
                    <div className="absolute top-24 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-500"></div>
                    <div className="absolute bottom-16 left-1/3 w-4 h-4 bg-emerald-400 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute bottom-24 right-1/4 w-2 h-2 bg-rose-400 rounded-full animate-ping delay-1500"></div>

                    <div className="relative z-10 max-w-5xl mx-auto text-center px-4">

                        {/* THE WARMEST HEART-TO-HEART EMBRACE */}
                        <motion.div
                            initial={{ opacity: 0, y: 25, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.3, delay: 0.1, type: "spring", stiffness: 60 }}
                            className="mb-16 relative"
                        >
                            {/* WARM, HEARTWARMING GLOW */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/12 via-purple-600/10 to-purple-500/12 blur-[140px] opacity-22 -z-10 animate-pulse-slow" />
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-yellow-500/8 to-yellow-400/10 blur-[120px] opacity-18 -z-10 animate-pulse-slow delay-500" />

                            {/* THE POWERFUL INSPIRATION WITH CARE */}
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 1.0, type: "spring", stiffness: 80 }}
                                className="text-lg md:text-xl lg:text-2xl font-bold leading-snug mb-8 relative z-10"
                            >
                                <span className="bg-gradient-to-r from-white via-purple-200 via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(168,85,247,0.35)]">
                                    Dear student, if you've ever felt like you don't quite fit, if you've ever wondered if your dreams are too big or your fears too real, if you've ever longed for a place where you can truly be yourself—Argyle Middle School sees your potential and unleashes it. We see the fire in your eyes when you talk about what drives you, the unyielding determination in your spirit when you face challenges, the genius waiting to be unleashed. Here, you're not just a student—you're a force to be reckoned with. Here, every "I can't" becomes "I will." Every obstacle becomes opportunity. Every challenge becomes victory. Here, you don't just grow—you <span className="text-yellow-200 glow-text-gold drop-shadow-[0_0_17px_rgba(234,179,8,0.45)]">transform into the powerhouse you were born to be</span>, surrounded by mentors who believe in you and push you to achieve more than you ever imagined possible.
                                </span>
                            </motion.p>

                            {/* THE CONNECTING INSPIRATION - FOR EVERY READER */}
                    <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 1.0, type: "spring", stiffness: 80 }}
                                className="text-base md:text-lg lg:text-xl font-bold leading-snug relative z-10"
                            >
                                <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                                    This is where you discover the power within yourself—the quiet strength that turns "maybe someday" into "starting today." Where you learn that every challenge carries the seed of growth, every setback the blueprint for resilience. This isn't about becoming extraordinary overnight; it's about recognizing that you already are extraordinary in your own unique way. Your creativity, your questions, your determination—these are the qualities that shape not just your future, but the world around you. We see you for who you are becoming, and we believe in the difference you'll make. Whether you dream of creating art that moves hearts, solving problems that change lives, or simply being the friend who makes someone feel less alone—your journey matters. Here, you don't just grow; you become the truest version of yourself, surrounded by mentors who see your potential and peers who share your aspirations. This is where ordinary moments become meaningful memories, where everyday courage builds lifelong confidence, where you discover that your voice, your ideas, and your heart have the power to create positive change. We walk beside you on this journey, believing in your capacity to contribute something beautiful to the world.
                                </span>
                            </motion.p>

                            {/* WARM, HEARTFELT PARTICLES */}
                            <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse opacity-20 shadow-[0_0_10px_rgba(234,179,8,0.2)]" />
                            <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse delay-500 opacity-20 shadow-[0_0_10px_rgba(168,85,247,0.2)]" />
                            <div className="absolute top-1/2 -right-5 w-2.5 h-2.5 bg-yellow-300/20 rounded-full animate-bounce delay-1000 opacity-15 shadow-[0_0_12px_rgba(234,179,8,0.12)]" />
                            <div className="absolute top-1/4 -left-3 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-ping delay-700 opacity-15 shadow-[0_0_10px_rgba(168,85,247,0.12)]" />
                            <div className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 bg-yellow-400/20 rounded-full animate-pulse delay-300 opacity-15 shadow-[0_0_10px_rgba(234,179,8,0.12)]" />

                            {/* GENTLE HEART CONNECTIONS */}
                            <div className="absolute top-12 right-14 w-1.2 h-1.2 bg-purple-300/35 rounded-full animate-float-bob-small opacity-25 shadow-[0_0_5px_rgba(168,85,247,0.12)]" />
                            <div className="absolute bottom-18 left-14 w-1.2 h-1.2 bg-yellow-300/35 rounded-full animate-float-bob-small delay-500 opacity-25 shadow-[0_0_5px_rgba(234,179,8,0.12)]" />
                            <div className="absolute top-1/3 right-1/4 w-0.8 h-0.8 bg-purple-400/25 rounded-full animate-float-bob-small delay-1000 opacity-20 shadow-[0_0_3px_rgba(168,85,247,0.08)]" />
                            <div className="absolute bottom-1/3 left-1/3 w-0.8 h-0.8 bg-yellow-400/25 rounded-full animate-float-bob-small delay-700 opacity-20 shadow-[0_0_3px_rgba(234,179,8,0.08)]" />
                        </motion.div>

                        {/* Enhanced Mission Badge */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
                            className="mb-12"
                        >
                            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-argyle-blue/20 to-purple-500/20 border border-white/10 backdrop-blur-xl shadow-2xl shadow-blue-500/20 relative overflow-hidden group">
                                {/* Animated background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-argyle-blue/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <Globe className="w-5 h-5 text-argyle-blue mr-3 relative z-10 animate-pulse" />
                                <span className="text-sm font-bold text-argyle-blue relative z-10 tracking-wider uppercase">Our Mission</span>

                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-all duration-1000"></div>
                            </div>
                        </motion.div>

                        {/* Enhanced Quote Section */}
                        <motion.blockquote
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 50 }}
                            className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-8 relative"
                        >
                            {/* Text shadow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent blur-sm opacity-50 transform translate-y-1">
                                At Argyle Middle School, we ignite greatness.
                            </div>

                            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent relative animate-gradient-x">
                                At Argyle Middle School, we ignite greatness.
                            </span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent relative block mt-2"
                    >
                                We transform ordinary students into extraordinary leaders who will redefine tomorrow's world with courage, creativity, and unwavering determination
                            </motion.span>
                        </motion.blockquote>

                        {/* Enhanced "so I hope you" */}
                        <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.8, type: "spring", stiffness: 120 }}
                            className="mb-12 relative"
                        >
                            <div className="inline-block relative">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 blur-xl opacity-30 animate-pulse"></div>

                                <p className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent relative px-6 py-3">
                                    so we hope you,
                                </p>

                                {/* Sparkle effects */}
                                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-300"></div>
                            </div>
                        </motion.div>

                        {/* Enhanced Call-to-Action */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.0, duration: 1.2, type: "spring", stiffness: 80, damping: 15 }}
                            className="inline-block relative group"
                        >
                            {/* Multiple glow layers */}
                            <div className="absolute inset-0 bg-gradient-to-r from-argyle-blue via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40 animate-pulse scale-110"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-30 animate-pulse delay-300 scale-105"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl blur-lg opacity-20 animate-pulse delay-700 scale-102"></div>

                            <div className="relative bg-gradient-to-r from-argyle-blue via-purple-500 to-pink-500 px-10 py-6 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden">

                                {/* Animated background pattern */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                                {/* Floating particles inside */}
                                <div className="absolute top-2 left-4 w-1 h-1 bg-white/60 rounded-full animate-bounce"></div>
                                <div className="absolute top-4 right-6 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping delay-500"></div>
                                <div className="absolute bottom-3 left-8 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-1000"></div>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-wider relative z-10 animate-gradient-text">
                                    INVENT THE FUTURE WITH US
                                </h2>

                                {/* Text glow effect */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-wider blur-sm opacity-30 animate-pulse">
                                        INVENT THE FUTURE WITH US
                                    </h2>
                                </div>
                            </div>

                            {/* Orbital rings */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/30 animate-spin-slow scale-110"></div>
                            <div className="absolute inset-0 rounded-3xl border border-purple-400/20 animate-spin-reverse scale-125"></div>
                        </motion.div>

                        {/* Animated particles */}
                        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="absolute top-32 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-32 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-1000"></div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const TimelineItem = ({ year, title, content, icon, side }) => {
    return (
        <div className={`flex items-center justify-between w-full mb-12 relative ${side === 'left' ? 'flex-row-reverse' : ''}`}>            <div className="w-5/12 hidden md:block"></div>

            <div className="z-10 bg-slate-900 border-4 border-slate-800 rounded-full p-2 relative group">
                {icon}
                {/* Pulse glow around icon */}
                <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-md opacity-0 group-hover:opacity-80 transition-opacity duration-300 animate-pulse-slow" />
            </div>

            <motion.div
                initial={{ opacity: 0, x: side === 'left' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-5/12 glass-panel p-6 rounded-2xl relative group hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
                <span className="absolute -top-4 bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-bold border border-white/10 shadow-lg group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-300">
                    {year}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 mt-2 group-hover:text-blue-200 transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {content}
                </p>
                {/* Floating particles on hover */}
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-1 h-1 bg-white rounded-full absolute animate-float-bob-small delay-100" style={{ top: '10%', left: '20%' }} />
                    <div className="w-1.5 h-1.5 bg-white rounded-full absolute animate-float-bob-small delay-300" style={{ bottom: '15%', right: '25%' }} />
                    <div className="w-0.5 h-0.5 bg-white rounded-full absolute animate-float-bob-small delay-500" style={{ top: '40%', right: '10%' }} />
                </div>
            </motion.div>
        </div>
    );
};

export default About;