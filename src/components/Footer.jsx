import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-slate-900 border-t border-white/5 pt-16 pb-8 mt-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">

                    {/* Column 1: MCPS */}
                    <div>
                        <h4 className="text-white font-bold mb-3 text-base lg:text-lg">MCPS Resources</h4>
                        <ul className="space-y-2 text-sm lg:text-sm text-gray-400">
                            <li><a href="https://www.montgomeryschoolsmd.org" target="_blank" rel="noopener noreferrer" className="hover:text-argyle-blue transition-colors">MCPS Home</a></li>
                            <li><a href="https://www.montgomeryschoolsmd.org/schools/" target="_blank" rel="noopener noreferrer" className="hover:text-argyle-blue transition-colors">Schools</a></li>
                            <li><a href="https://www.montgomeryschoolsmd.org/curriculum/" target="_blank" rel="noopener noreferrer" className="hover:text-argyle-blue transition-colors">Curriculum</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Community */}
                    <div>
                        <h4 className="text-white font-bold mb-3 text-base lg:text-lg">Community</h4>
                        <ul className="space-y-2 text-sm lg:text-sm text-gray-400">
                            <li><a href="https://www.montgomeryschoolsmd.org/parents/" target="_blank" rel="noopener noreferrer" className="hover:text-argyle-blue transition-colors">Parents</a></li>
                            <li><a href="https://www.montgomeryschoolsmd.org/students/" target="_blank" rel="noopener noreferrer" className="hover:text-argyle-blue transition-colors">Students</a></li>
                            <li><a href="https://www.montgomeryschoolsmd.org/departments/athletics/" target="_blank" rel="noopener noreferrer" className="hover:text-argyle-blue transition-colors">Athletics</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Argyle Link */}
                    <div>
                        <h4 className="text-white font-bold mb-3 text-base lg:text-lg">Argyle Middle School</h4>
                        <ul className="space-y-2 text-sm lg:text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-argyle-blue transition-colors">About Us</Link></li>
                            <li><Link to="/staff" className="hover:text-argyle-blue transition-colors">Staff Directory</Link></li>
                            <li><Link to="/contact" className="hover:text-argyle-blue transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Legal/Policies */}
                    <div>
                        <h4 className="text-white font-bold mb-3 text-base lg:text-lg">Policies</h4>
                        <ul className="space-y-2 text-sm lg:text-sm text-gray-400">
                            <li><a href="https://www.montgomeryschoolsmd.org/info/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-argyle-blue transition-colors">Privacy Notice</a></li>
                            <li><a href="https://www.montgomeryschoolsmd.org/info/nondiscrimination/" target="_blank" rel="noopener noreferrer" className="hover:text-argyle-blue transition-colors">Nondiscrimination</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 lg:pt-8 border-t border-white/5 text-center px-4">
                    <p className="text-gray-500 text-sm lg:text-sm mb-3 lg:mb-2">
                        This Website was made by 8th grade student Nathan Henok.
                    </p>
                    <p className="text-gray-600 text-xs lg:text-xs">
                        © {new Date().getFullYear()} Argyle Magnet Middle School | 2400 Bel Pre Rd, Silver Spring, MD 20906
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
