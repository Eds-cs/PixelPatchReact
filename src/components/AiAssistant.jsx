import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { mockShops } from '../data/mockShops';

const AiAssistant = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([
    { id: 1, text: 'Lorem ipsum is so ubiquitous b....', isActive: false },
    { id: 2, text: 'Lorem ipsum is so ubiquitous b....', isActive: true },
    { id: 3, text: 'Lorem ipsum is so ubiquitous b....', isActive: false },
    { id: 4, text: 'Lorem ipsum is so ubiquitous b....', isActive: false },
    { id: 5, text: 'Lorem ipsum is so ubiquitous b....', isActive: false },
    { id: 6, text: 'Lorem ipsum is so ubiquitous b....', isActive: false },
  ]);
  const textareaRef = useRef(null);

  // Auto-resize textarea as content grows
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [message]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // mag add ng user message dito
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: message
    };
    
    setMessages([...messages, userMessage]);
    setMessage('');

    // Placeholder sa AI as reponse
    setTimeout(() => {
      let aiResponse;
      if (message.toLowerCase().includes('laptop') && message.toLowerCase().includes('turn on')) {
        aiResponse = {
          id: messages.length + 2,
          sender: 'ai',
          text: "If your laptop won't turn on, start by checking whether it's receiving power. Plug it into a working outlet and see if any lights appear on the charger or laptop itself. If there's still no response, try performing a power reset — unplug the charger, remove the battery if possible, and hold down the power button for 15 to 30 seconds to discharge any remaining electricity, then reconnect the battery and charger before trying again."
        };
      } else if (message.toLowerCase().includes('recommend') || message.toLowerCase().includes('fix')) {
        aiResponse = {
          id: messages.length + 2,
          sender: 'ai',
          text: "Sure! here are some Service Repair shops available:",
          recommendations: [
            { id: 1, name: "Shop Name # 1", rating: 5 },
            { id: 2, name: "Shop Name # 2", rating: 5 },
            { id: 3, name: "Shop Name # 3", rating: 5 },
            { id: 4, name: "Shop Name # 4", rating: 5 }
          ]
        };
      } else {
        aiResponse = {
          id: messages.length + 2,
          sender: 'ai',
          text: "I'm here to help! Could you please explain your situation in more detail?"
        };
      }
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 bg-white w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-extrabold text-blue-600">PixelPatch</Link>
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                <Link to="/ai-assistant" className="text-gray-900 font-medium px-3 py-2 rounded-md text-sm">AI Assistant</Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</Link>
                <Link to="/partner" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Become a Partner</Link>
              </div>
            </div>

            {/* Icons (Desktop) */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                {/* Chat/Notification Icon */}
                <button className="text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors">
                  <span className="sr-only">Notifications</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>
                {/* Profile Avatar (links to profile) */}
                <Link to="/profile" className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-colors">
                  <span className="sr-only">Open user profile</span>
                  <img className="h-full w-full object-cover" src="https://placehold.co/40x40/e0f2fe/3b82f6?text=U&font=inter" alt="User avatar" />
                </Link>
              </div>
            </div>

            {/* Menu Button (Hamburger) */}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content (Chat Interface) */}
      <main className="flex-grow flex w-full" style={{ height: 'calc(100vh - 20.5rem)' }}>
        {/* Left Sidebar (Chat History) */}
        <aside className="w-72 flex-shrink-0 border-r border-gray-100 bg-white flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 h-16 flex-shrink-0 flex justify-between items-center border-b border-gray-100">
            <h2 className="text-xl font-semibold">Chats</h2>
            {/* New Chat Button */}
            <button className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="New Chat">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </button>
          </div>
          
          {/* Quick Actions */}
          <div className="p-4 flex-shrink-0 space-y-3">
            <button className="w-full flex items-center text-left p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
              <svg className="h-5 w-5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">New chat</span>
            </button>
            <button className="w-full flex items-center text-left p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
              <svg className="h-5 w-5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span className="text-sm font-medium">Search Chat</span>
            </button>
          </div>
          
          {/* Chat History List */}
          <div className="flex-1 overflow-y-auto chat-sidebar p-4 pt-0 space-y-2">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Chats</p>
            {chatHistory.map(chat => (
              <a 
                key={chat.id}
                href="#" 
                className={`block p-3 rounded-lg ${
                  chat.isActive 
                    ? 'bg-gray-200' 
                    : 'hover:bg-gray-100'
                } transition-colors`}
              >
                <p className={`text-sm ${chat.isActive ? 'font-semibold text-gray-900' : 'text-gray-800'} truncate`}>
                  {chat.text}
                </p>
              </a>
            ))}
          </div>
        </aside>

        {/* Right Chat Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat History */}
          <div className="flex-1 p-6 space-y-6 overflow-y-auto chat-area bg-gray-50/50">
            {messages.length === 0 ? (
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-gray-900">Welcome to PixelPatch Troubleshooting AI,</h1>
                <h1 className="text-3xl font-semibold text-gray-900 mt-2">How can I help?</h1>
              </div>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  } p-3 rounded-lg ${msg.sender === 'user' ? 'max-w-lg' : 'max-w-xl'} shadow${msg.sender === 'user' ? '' : '-sm'}`}>
                    <p className="text-sm">{msg.text}</p>
                    
                    {msg.recommendations && (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                          {msg.recommendations.map(shop => (
                            <button
                              key={shop.id}
                              type="button"
                              onClick={() => navigate(`/shop/${shop.id}`, { state: { shop: mockShops.find(s => s.id === shop.id) } })}
                              className="w-full text-left bg-white p-3 rounded-lg border border-gray-300 hover:shadow-sm transition-shadow"
                            >
                              <div className="flex items-center space-x-3">
                                <img className="h-12 w-12 rounded-lg bg-gray-800" src="https://placehold.co/48x48/333333/ffffff?text=S" alt="Shop Logo" />
                                <div>
                                  <h4 className="text-sm font-semibold">{shop.name}</h4>
                                  <p className="text-xs text-gray-600">Shop Rating:</p>
                                  <div className="flex items-center">
                                    {[...Array(shop.rating)].map((_, i) => (
                                      <svg key={i} className="h-3 w-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.572-.955L10 0l2.939 6.135 6.572.955-4.756 4.455 1.123 6.545z"/>
                                      </svg>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                        <div className="mt-4">
                          <button className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-sm">
                            Show More Shops
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Chat Input Area (Pinned to bottom) */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="relative flex items-center bg-gray-100 rounded-lg shadow-sm">
                {/* Attachment Buttons (Left) */}
                <div className="absolute left-2 flex items-center space-x-1">
                  <button type="button" className="p-2 text-gray-500 hover:text-blue-600 rounded-lg transition-colors" title="Attach File">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.693 7.693a4.5 4.5 0 006.364 6.364l10.94-10.94A3 3 0 1013.5 3.628L2.552 14.57" />
                    </svg>
                  </button>
                  <button type="button" className="p-2 text-gray-500 hover:text-blue-600 rounded-lg transition-colors" title="Attach Image">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </button>
                </div>
                
                <textarea
                  ref={textareaRef}
                  value={message}
                  onChange={handleMessageChange}
                  className="w-full p-3 pl-20 pr-12 border-none rounded-lg resize-none bg-gray-100 focus:ring-0 text-sm"
                  placeholder="Explain your situation..."
                  rows="1"
                />
                
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-blue-600 rounded-lg transition-colors"
                  title="Send Message"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.875L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16">
            {/* Column 1: Logo & Slogan */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <Link to="/" className="text-2xl font-extrabold text-blue-600">PixelPatch</Link>
              <p className="mt-3 text-sm text-gray-600">
                Where technology and expertise meet to bring your gadgets back to life.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-3">
                <li><Link to="/ai-assistant" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">AI Assistant</Link></li>
                <li><Link to="/find-shop" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Find Service</Link></li>
                <li><Link to="/partner" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Partner</Link></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Career</a></li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Column 5: Connect */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect With Us</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Facebook</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">X (Twitter)</a></li>
              </ul>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="border-t border-gray-200 py-6">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} PixelPatch Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AiAssistant;