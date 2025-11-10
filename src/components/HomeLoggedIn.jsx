import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeLoggedIn = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Smartphone');

    const tabs = ['Smartphone', 'Laptop', 'Tablet', 'Gaming Consoles', 'Desktop CPU'];

    const shopData = [
        {
            name: 'TechFix Pro',
            rating: 4.5,
            address: '123 Tech Rd, Kalunasan',
            tag: { text: 'Repair Center', color: 'blue' },
            image: 'https://placehold.co/300x200/e0e7ff/3b82f6?text=Shop+Image'
        },
        {
            name: 'Gadget Gurus',
            rating: 4.8,
            address: '456 Device Ave, Balamban',
            tag: { text: 'Gaming Consoles', color: 'green' },
            image: 'https://placehold.co/300x200/e0e7ff/3b82f6?text=Shop+Image'
        },
        {
            name: 'Phone Fixers',
            rating: 4.2,
            address: '789 Circuit St, Samboan',
            tag: { text: 'Smartphones', color: 'yellow' },
            image: 'https://placehold.co/300x200/e0e7ff/3b82f6?text=Shop+Image'
        }
    ];

    return (
        <div className="bg-white text-gray-900">
            {/* Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="border-b border-gray-200">
                    <nav className="flex items-center justify-between h-20">
                        <div>
                            <Link to="/" className="text-2xl font-extrabold text-blue-600">PixelPatch</Link>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-6">
                                <Link to="/" className="text-gray-700 hover:text-blue-600 text-sm font-medium transition">Home</Link>
                                <Link to="/ai-assistant" className="text-gray-700 hover:text-blue-600 text-sm font-medium transition">AI Assistant</Link>
                                <Link to="/services" className="text-gray-700 hover:text-blue-600 text-sm font-medium transition">Services</Link>
                                <Link to="/partner" className="text-gray-700 hover:text-blue-600 text-sm font-medium transition">Become a Partner</Link>
                            </div>
                        </div>

                        {/* Icons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="p-2 text-gray-500 hover:text-blue-600 transition">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <button className="p-2 text-gray-500 hover:text-blue-600 transition">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </button>
                            <Link to="/profile" className="h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition inline-block">
                                <img src="https://placehold.co/40x40/e0f2fe/3b82f6?text=U&font=inter" alt="User avatar" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden py-2">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Home</Link>
                                <Link to="/ai-assistant" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">AI Assistant</Link>
                                <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Services</Link>
                                <Link to="/partner" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Become a Partner</Link>
                            </div>
                        </div>
                    )}
                </header>

                {/* Hero Section */}
                <main>
                    <section className="py-16 md:py-24">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="text-center md:text-left">
                                <h1 className="text-4xl lg:text-5xl font-extrabold">
                                    Welcome to <span className="text-blue-600">PixelPatch</span>
                                </h1>
                                <h2 className="text-4xl lg:text-5xl font-extrabold mt-2">
                                    Your Smart Partner in Device Repair
                                </h2>
                                <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                                    Get instant AI-guided help for your gadgets or connect with local shops anytime, anywhere.
                                </p>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <Link to="/ai-assistant" className="flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-md">
                                        Try the AI Assistant
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </Link>
                                    <Link to="/find-shop" className="flex items-center justify-center px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition shadow-sm">
                                        Explore Repair Shops
                                    </Link>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <img
                                    src="https://placehold.co/600x450/e0f2fe/3b82f6?text=Device+Repair+Illustration&font=inter"
                                    alt="Device repair illustration"
                                    className="rounded-lg w-full max-w-md h-auto"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Partners Section */}
                    <section className="py-12 border-t border-gray-200">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
                            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">PARTNERS:</span>
                            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 text-gray-400">
                                <span className="text-2xl font-bold opacity-70 hover:opacity-100 transition">SM MINIPRO</span>
                                <span className="text-2xl font-bold opacity-70 hover:opacity-100 transition">KCC Malls</span>
                                <span className="text-2xl font-bold opacity-70 hover:opacity-100 transition">Robinsons</span>
                                <span className="text-2xl font-bold opacity-70 hover:opacity-100 transition">CityMall</span>
                                <span className="text-2xl font-bold opacity-70 hover:opacity-100 transition">VISTAMALL</span>
                            </div>
                        </div>
                    </section>

                    {/* Explore Repair Shops */}
                    <section className="py-16 md:py-24 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Explore Repair Shops Near You</h2>
                                <Link to="/shops" className="flex-shrink-0 text-sm font-medium text-blue-600 hover:text-blue-800">See All →</Link>
                            </div>

                            {/* Filter Tabs */}
                            <div className="border-b border-gray-200">
                                <nav className="flex -mb-px space-x-6 overflow-x-auto" aria-label="Tabs">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`whitespace-nowrap py-3 px-1 text-sm font-medium ${activeTab === tab ? 'tab-active' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'}`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Shop Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
                                {shopData.map((shop, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
                                        <img src={shop.image} alt={shop.name} className="w-full h-32 object-cover" />
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900">{shop.name}</h3>
                                            <div className="flex items-center mt-1">
                                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.572-.955L10 0l2.939 6.135 6.572.955-4.756 4.455 1.123 6.545z"/></svg>
                                                <span className="text-xs text-gray-600 ml-1">{shop.rating}</span>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">{shop.address}</p>
                                            <div className="mt-3">
                                                {/* Tag color classes are built from shop.tag.color; map to safe classes */}
                                                <span className={`inline-block ${shop.tag.color === 'blue' ? 'bg-blue-100 text-blue-800' : shop.tag.color === 'green' ? 'bg-green-100 text-green-800' : shop.tag.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' : shop.tag.color === 'purple' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'} text-xs font-medium px-2 py-0.5 rounded-full`}>
                                                    {shop.tag.text}
                                                </span>
                                            </div>
                                            <Link to={`/shop/${index}`} className="block w-full text-center bg-blue-600 text-white rounded-md py-2 text-sm font-medium mt-4 hover:bg-blue-700 transition-colors">View Shop</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section className="py-16 md:py-24" style={{ backgroundColor: '#D6ECF9' }}>
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Hear from our users</h2>
                            <p className="mt-4 text-lg text-gray-600">Read what our community has to say about their experience with PixelPatch and our network of repair shops.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center">
                                <img className="h-20 w-20 rounded-full" src="https://placehold.co/100x100/e0f2fe/3b82f6?text=U1&font=inter" alt="User 1" />
                                <h3 className="mt-4 font-semibold text-lg text-gray-900">Jane Doe</h3>
                                <p className="text-sm text-green-600 font-medium">Tech Enthusiast</p>
                                <blockquote className="mt-4 text-gray-700 relative">“PixelPatch is so easy for me to fix my phone, the diagnosis is always on point. Highly recommended.”</blockquote>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center">
                                <img className="h-20 w-20 rounded-full" src="https://placehold.co/100x100/e0f2fe/3b82f6?text=U2&font=inter" alt="User 2" />
                                <h3 className="mt-4 font-semibold text-lg text-gray-900">John Smith</h3>
                                <p className="text-sm text-yellow-600 font-medium">Gamer</p>
                                <blockquote className="mt-4 text-gray-700 relative">“Used this to find a shop that could fix my console's drift issue. Found one in 10 minutes. 10/10.”</blockquote>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center">
                                <img className="h-20 w-20 rounded-full" src="https://placehold.co/100x100/e0f2fe/3b82f6?text=U3&font=inter" alt="User 3" />
                                <h3 className="mt-4 font-semibold text-lg text-gray-900">Sarah Lee</h3>
                                <p className="text-sm text-blue-600 font-medium">Student</p>
                                <blockquote className="mt-4 text-gray-700 relative">“My laptop screen cracked, and the AI Assistant helped me figure out what part I needed before I even went to the shop!”</blockquote>
                            </div>
                        </div>
                    </section>

                </main>

                {/* Footer */}
                <footer className="bg-white border-t border-gray-200 mt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16">
                            <div className="col-span-2 md:col-span-4 lg:col-span-1">
                                <Link to="/" className="text-2xl font-extrabold text-blue-600">PixelPatch</Link>
                                <p className="mt-3 text-sm text-gray-600">Where technology and expertise meet to bring your gadgets back to life.</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
                                <ul className="mt-4 space-y-3">
                                    <li><Link to="/ai-assistant" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">AI Assistant</Link></li>
                                    <li><Link to="/find-shop" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Find Service</Link></li>
                                    <li><Link to="/partner" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Partner</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
                                <ul className="mt-4 space-y-3">
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Career</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
                                <ul className="mt-4 space-y-3">
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Help Center</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect With Us</h3>
                                <ul className="mt-4 space-y-3">
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Facebook</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Instagram</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">X (Twitter)</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 py-6">
                            <p className="text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} PixelPatch Inc. All rights reserved.</p>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default HomeLoggedIn;