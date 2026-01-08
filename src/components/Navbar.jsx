import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="relative overflow-hidden rounded-full border-2 border-argyle-blue/50 group-hover:border-argyle-blue transition-colors duration-300">
                                <img src={logo} alt="Argyle Eagle" className="h-10 w-10 object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-wider text-white group-hover:text-argyle-blue transition-colors">ARGYLE</span>
                                <span className="text-xs text-gray-400 tracking-[0.2em] group-hover:text-white transition-colors">MAGNET MIDDLE SCHOOL</span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <Link to="/principals-palace" className="relative group flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-bold text-sm transition-all duration-200 hover:scale-105 px-3 py-2">
                                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                                </span>
                                Principal's Palace
                            </Link>
                            <NavLink to="/staff">Staff</NavLink>
                            <NavLink to="/schedule">Schedules</NavLink>
                            <div className="flex items-center px-4 py-1 rounded-full bg-argyle-purple/20 border border-argyle-purple/30 text-xs font-mono text-argyle-blue">
                                <span className="animate-pulse mr-2">●</span> LIVE
                            </div>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden glass-panel">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                        <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                        <MobileNavLink to="/principals-palace" onClick={() => setIsOpen(false)}>
                            <span className="text-yellow-500 font-bold">Principal's Palace ⭐</span>
                        </MobileNavLink>
                        <MobileNavLink to="/staff" onClick={() => setIsOpen(false)}>Staff</MobileNavLink>
                        <MobileNavLink to="/schedule" onClick={() => setIsOpen(false)}>Schedules</MobileNavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ to, children }) => (
    <Link to={to} className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105">
        {children}
    </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
    <Link to={to} onClick={onClick} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        {children}
    </Link>
);

export default Navbar;
