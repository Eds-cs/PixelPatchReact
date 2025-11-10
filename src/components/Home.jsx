import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white text-gray-900">
            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 1. Header Navigation */}
                <header className="border-b border-gray-200">
                    <nav className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-2xl font-extrabold text-blue-600">PixelPatch</Link>
                        </div>

                        {/* Navigation Links (Desktop) */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-6">
                                <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                                <Link to="/ai-assistant" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">AI Assistant</Link>
                                <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</Link>
                                <Link to="/partner" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Become a Partner</Link>
                            </div>
                        </div>

                        {/* Auth Buttons (Desktop) */}
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-2">
                                <Link to="/login" className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                    Log In
                                </Link>
                                <Link to="/signup" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                    Sign Up
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Button (Hamburger) */}
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                type="button"
                                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* Icon when menu is closed */}
                                <svg
                                    className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                                {/* Icon when menu is open */}
                                <svg
                                    className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </nav>

                    {/* Mobile menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                                <Link to="/ai-assistant" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">AI Assistant</Link>
                                <Link to="/services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                                <Link to="/partner" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Become a Partner</Link>
                            </div>
                            <div className="pt-4 pb-3 border-t border-gray-200">
                                <div className="px-2 space-y-1">
                                    <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Log In</Link>
                                    <Link to="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </header>

                {/* 2. Hero Section */}
                <main className="py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Left Column: Text Content */}
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
                                Welcome to <span className="text-blue-600">PixelPatch</span>
                            </h1>
                            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mt-2">
                                Your Smart Partner in Device Repair
                            </h2>
                            <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                                Get instant AI-guided help for your gadgets or connect with local shops anytime, anywhere.
                            </p>
                            
                            {/* Call-to-Action Buttons */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Link to="/ai-assistant" className="flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md">
                                    Try the AI Assistant
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </Link>
                                <Link to="/find-shop" className="flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm">
                                    Find a Repair Shop
                                </Link>
                            </div>
                        </div>
                        
                        {/* Right Column: Illustration */}
                        <div className="flex items-center justify-center">
                            <img
                                src="https://placehold.co/600x450/e0f2fe/3b82f6?text=Device+Repair+Illustration&font=inter"
                                alt="An illustration of device repair tools including a circuit board, multimeter, and a cracked phone screen"
                                className="rounded-lg shadow-xl w-full max-w-md md:max-w-full h-auto"
                            />
                        </div>
                    </div>
                </main>

                {/* 3. Partners Section */}
                <section className="py-12 border-t border-gray-200">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex-shrink-0">PARTNERS:</span>
                        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 text-gray-400">
                            <span className="text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity">SM MINIPRO</span>
                            <span className="text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity">KCC Malls</span>
                            <span className="text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity">Robinsons</span>
                            <span className="text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity">CityMall</span>
                            <span className="text-2xl font-bold opacity-70 hover:opacity-100 transition-opacity">VISTAMALL</span>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-white py-8 mt-12 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} PixelPatch. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Home;