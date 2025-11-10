import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="border-b border-gray-200">
          <nav className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl font-extrabold text-blue-600">PixelPatch</Link>

            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Home</Link>
              <Link to="/ai-assistant" className="text-gray-700 hover:text-blue-600 text-sm font-medium">AI Assistant</Link>
              <Link to="/services" className="text-gray-900 font-medium text-sm">Services</Link>
              <Link to="/partner" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Become a Partner</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-500 hover:text-blue-600 p-2 rounded-full" aria-label="Search">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-blue-600 p-2 rounded-full" aria-label="Messages">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <Link to="/profile" className="h-10 w-10 rounded-full border-2 border-gray-200 hover:border-blue-500 overflow-hidden inline-block">
                <img src="https://placehold.co/40x40/e0f2fe/3b82f6?text=U&font=inter" alt="User" className="h-full w-full object-cover" />
              </Link>
            </div>

            <button className="md:hidden text-gray-500 hover:text-gray-900 p-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </nav>
        </header>

        <main>
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-extrabold mb-8">Explore Services</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Search by Name..."
                  className="rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2"
                />
                <select className="rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2">
                  <option>All Status</option>
                  <option>Open</option>
                  <option>Closed</option>
                </select>
                <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">Clear</button>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <button className="font-black border flex items-center justify-center w-full md:w-auto py-3 rounded-lg hover:bg-gray-50 transition shadow-sm px-4">📱 Smartphone</button>
                <button className="font-black border flex items-center justify-center w-full md:w-auto py-3 rounded-lg hover:bg-gray-50 transition shadow-sm px-4">💻 Laptop</button>
                <button className="font-black border flex items-center justify-center w-full md:w-auto py-3 rounded-lg hover:bg-gray-50 transition shadow-sm px-4">📟 Tablet</button>
                <button className="font-black border flex items-center justify-center w-full md:w-auto py-3 rounded-lg hover:bg-gray-50 transition shadow-sm px-4">🎮 Gaming Consoles</button>
                <button className="font-black border flex items-center justify-center w-full md:w-auto py-3 rounded-lg hover:bg-gray-50 transition shadow-sm px-4">🖥️ Desktop CPU</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <img src="https://placehold.co/300x200/e0e7ff/3b82f6?text=Shop+Image" alt="Shop Image" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">TechFix Pro</h3>
                    <div className="flex items-center mt-1 text-yellow-400">★★★★★<span className="text-xs text-gray-600 ml-1">4.5</span></div>
                    <p className="text-xs text-gray-500 mt-2">123 Normal Road, Balamban</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded-full">Desktop CPU</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">Gaming Consoles</span>
                    </div>
                    <a href="#" className="block w-full text-center bg-blue-600 text-white rounded-md py-2 text-sm font-medium mt-4 hover:bg-blue-700">View Details</a>
                  </div>
                </div>

                {/* Other cards (duplicated samples) */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <img src="https://placehold.co/300x200/e0e7ff/3b82f6?text=Shop+Image" alt="Shop Image" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">RepairHub</h3>
                    <div className="flex items-center mt-1 text-yellow-400">★★★★☆<span className="text-xs text-gray-600 ml-1">4.2</span></div>
                    <p className="text-xs text-gray-500 mt-2">45 Tech Street, Zamboanga</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">Laptop</span>
                    </div>
                    <a href="#" className="block w-full text-center bg-blue-600 text-white rounded-md py-2 text-sm font-medium mt-4 hover:bg-blue-700">View Details</a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <img src="https://placehold.co/300x200/e0e7ff/3b82f6?text=Shop+Image" alt="Shop Image" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">GadgetWorks</h3>
                    <div className="flex items-center mt-1 text-yellow-400">★★★★★<span className="text-xs text-gray-600 ml-1">5.0</span></div>
                    <p className="text-xs text-gray-500 mt-2">Near WMSU, Zamboanga City</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2 py-0.5 rounded-full">Smartphone</span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full">Tablet</span>
                    </div>
                    <a href="#" className="block w-full text-center bg-blue-600 text-white rounded-md py-2 text-sm font-medium mt-4 hover:bg-blue-700">View Details</a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <img src="https://placehold.co/300x200/e0e7ff/3b82f6?text=Shop+Image" alt="Shop Image" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">FixLab</h3>
                    <div className="flex items-center mt-1 text-yellow-400">★★★★☆<span className="text-xs text-gray-600 ml-1">4.3</span></div>
                    <p className="text-xs text-gray-500 mt-2">12 Main Avenue, Pagadian</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded-full">Laptop</span>
                    </div>
                    <a href="#" className="block w-full text-center bg-blue-600 text-white rounded-md py-2 text-sm font-medium mt-4 hover:bg-blue-700">View Details</a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <img src="https://placehold.co/300x200/e0e7ff/3b82f6?text=Shop+Image" alt="Shop Image" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">ByteCare</h3>
                    <div className="flex items-center mt-1 text-yellow-400">★★★☆☆<span className="text-xs text-gray-600 ml-1">3.8</span></div>
                    <p className="text-xs text-gray-500 mt-2">78 Tech Valley, Dipolog</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">Desktop CPU</span>
                    </div>
                    <a href="#" className="block w-full text-center bg-blue-600 text-white rounded-md py-2 text-sm font-medium mt-4 hover:bg-blue-700">View Details</a>
                  </div>
                </div>
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

export default Services;
