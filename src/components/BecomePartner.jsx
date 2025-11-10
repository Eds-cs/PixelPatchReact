
import { Link } from 'react-router-dom';

const BecomePartner = () => {
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="border-b border-gray-200">
          <nav className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-extrabold text-blue-600">PixelPatch</Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                <Link to="/ai-assistant" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">AI Assistant</Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</Link>
                <Link to="/partner" className="text-gray-900 font-medium px-3 py-2 rounded-md text-sm">Become a Partner</Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <button className="text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors" aria-label="Search">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors" aria-label="Messages">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
                <Link to="/profile" className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-colors">
                  <img className="h-full w-full object-cover" src="https://placehold.co/40x40/e0f2fe/3b82f6?text=U&font=inter" alt="User avatar" />
                </Link>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </nav>
        </header>

        <main>
          <div className="py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Grow your Repair Business with <span className="text-blue-600">PixelPatch</span></h1>
                <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">Join our network of trusted repair shops and connect with clients who need electronic repairs every day.</p>
                <div className="mt-8 flex justify-center md:justify-start">
                  <a href="#" className="flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md">Register Your Business
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img src="https://placehold.co/500x350/e0f2fe/3b82f6?text=Partner+Working&font=inter" alt="A technician wearing goggles works on a circuit board" className="rounded-lg w-full max-w-md md:max-w-full h-auto shadow-lg" />
              </div>
            </div>
          </div>

          <div className="bg-blue-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">
              <section className="text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-12">Why Partner With Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow text-left">
                    <h3 className="font-semibold text-gray-900">Get new clients</h3>
                    <p className="text-sm text-gray-600 mt-1">Connect with a steady stream of customers actively seeking repairs.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow text-left">
                    <h3 className="font-semibold text-gray-900">Smart AI Referrals</h3>
                    <p className="text-sm text-gray-600 mt-1">Our AI matches the right job to your shop's specialties.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow text-left">
                    <h3 className="font-semibold text-gray-900">Secure Payments</h3>
                    <p className="text-sm text-gray-600 mt-1">Reliable and easy payment processing through our platform.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow text-left">
                    <h3 className="font-semibold text-gray-900">Analytics Dashboard</h3>
                    <p className="text-sm text-gray-600 mt-1">Track your performance, earnings, and customer ratings.</p>
                  </div>
                </div>
              </section>

              <section className="text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white mb-4">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Sign Up Your Business</h3>
                    <p className="text-sm text-gray-600 mt-1">Fill out our simple registration form with your shop's details and services.</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white mb-4">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Get Verified</h3>
                    <p className="text-sm text-gray-600 mt-1">Submit your business documents for our team to review and approve.</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white mb-4">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Start Receiving Jobs</h3>
                    <p className="text-sm text-gray-600 mt-1">Once approved, you'll appear in search results and start getting client requests.</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white mb-4">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Earn & Grow</h3>
                    <p className="text-sm text-gray-600 mt-1">Complete jobs, get paid, and build your reputation on PixelPatch.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-12">Requirements for Partnership</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow space-y-4">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div className="ml-3">
                        <h3 className="font-semibold text-gray-900">Valid Business Permit</h3>
                        <p className="text-sm text-gray-600">Issued by your local municipality.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div className="ml-3">
                        <h3 className="font-semibold text-gray-900">DTI / SEC Registration</h3>
                        <p className="text-sm text-gray-600">Proof of official business registration.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow space-y-4">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div className="ml-3">
                        <h3 className="font-semibold text-gray-900">Valid ID of Owner / Rep</h3>
                        <p className="text-sm text-gray-600">Government-issued photo ID.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div className="ml-3">
                        <h3 className="font-semibold text-gray-900">Service Address & Price List</h3>
                        <p className="text-sm text-gray-600">List of services offered and pricing.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <div className="ml-3">
                        <h3 className="font-semibold text-gray-900">Active Phone Number</h3>
                        <p className="text-sm text-gray-600">For client and system communication.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-6">Reminder: Prepare these before you click Register to speed up verification.</p>
              </section>

              <section className="mt-12 text-center">
                <div className="max-w-5xl mx-auto text-center">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Testimonials</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center">
                    <img className="h-20 w-20 rounded-full" src="https://placehold.co/100x100/e0f2fe/3b82f6?text=U1&font=inter" alt="User 1" />
                    <h3 className="mt-4 font-semibold text-lg text-gray-900">Jane Doe</h3>
                    <p className="text-sm text-blue-600 font-medium">Tech Enthusiast</p>
                    <blockquote className="mt-4 text-gray-700 relative">“PixelPatch is so easy for me to fix my phone, the diagnosis is always on point. Highly recommended.”</blockquote>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center">
                    <img className="h-20 w-20 rounded-full" src="https://placehold.co/100x100/e0f2fe/3b82f6?text=U2&font=inter" alt="User 2" />
                    <h3 className="mt-4 font-semibold text-lg text-gray-900">John Smith</h3>
                    <p className="text-sm text-blue-600 font-medium">Gamer</p>
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

              <section className="text-center mt-12 mb-20">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Ready to Grow Your Repair Business?</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Join now and start connecting with clients today.</p>
                <div className="mt-8">
                  <a href="#" className="flex items-center justify-center w-auto max-w-xs mx-auto px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md">Become a Partner Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
                </div>
              </section>

            </div>
          </div>
        </main>

        <footer className="bg-white border-t border-gray-200">
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
                  <li><Link to="/services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</Link></li>
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
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Help & FAQ</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8 pb-12 text-center">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} PixelPatch. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BecomePartner;