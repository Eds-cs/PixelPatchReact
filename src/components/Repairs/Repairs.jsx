import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopNavigation from '../shared/TopNavigation';
import Footer from '../shared/Footer';
import { ROUTES } from '../../constants/routes';

const RepairCard = ({ status, date, deviceName, deviceType, repairType, message }) => {
  const statusStyles = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Accepted: 'bg-blue-100 text-blue-800',
    'In Progress': 'bg-orange-100 text-orange-800',
    Done: 'bg-green-100 text-green-800',
    Completed: 'bg-gray-100 text-gray-800',
    Rejected: 'bg-red-100 text-red-800',
  };

  const messageStyles = {
    Pending: 'bg-yellow-100',
    Accepted: 'bg-blue-100',
    'In Progress': 'bg-orange-100',
    Done: 'bg-green-100',
    Completed: 'bg-gray-100',
    Rejected: 'bg-red-100',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex justify-between items-center p-4">
        <span className={`text-xs font-medium ${statusStyles[status]} px-2.5 py-0.5 rounded-full`}>
          {status}
        </span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <div className="p-4 pt-0">
        <img 
          className="w-full h-32 object-contain mb-3" 
          src="https://placehold.co/300x200/e0f2fe/3b82f6?text=Phone" 
          alt={deviceName} 
        />
        <h2 className="font-semibold text-lg">{deviceName}</h2>
        <p className="text-sm text-gray-600">{deviceType}</p>
        <p className="text-sm text-gray-500">{repairType}</p>
        <div className={`mt-3 p-2.5 rounded-md ${messageStyles[status]}`}>
          <p className={`text-xs ${statusStyles[status]} font-medium`}>{message}</p>
        </div>
      </div>
    </div>
  );
};

RepairCard.propTypes = {
  status: PropTypes.oneOf(['Pending', 'Accepted', 'In Progress', 'Done', 'Completed', 'Rejected']).isRequired,
  date: PropTypes.string.isRequired,
  deviceName: PropTypes.string.isRequired,
  deviceType: PropTypes.string.isRequired,
  repairType: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

const Repairs = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Pending', 'Accepted', 'In Progress', 'Done', 'Completed'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mockRepairs = [
    {
      status: 'Pending',
      date: 'Oct 20, 2025',
      deviceName: 'Samsung S25',
      deviceType: 'Smartphone',
      repairType: 'Screen Replacement',
      message: "Waiting for the shop's review.",
    },
    {
      status: 'Accepted',
      date: 'Oct 22, 2025',
      deviceName: 'Samsung S25',
      deviceType: 'Smartphone',
      repairType: 'Screen Replacement',
      message: 'Ready for Pickup at your convenience.',
    },
    {
      status: 'In Progress',
      date: 'Oct 22, 2025',
      deviceName: 'Samsung S25',
      deviceType: 'Smartphone',
      repairType: 'Screen Replacement',
      message: 'Work in progress...',
    },
    {
      status: 'Done',
      date: 'Oct 22, 2025',
      deviceName: 'Samsung S25',
      deviceType: 'Smartphone',
      repairType: 'Screen Replacement',
      message: 'Your device has been repaired.',
    },
    {
      status: 'Completed',
      date: 'Oct 22, 2025',
      deviceName: 'Samsung S25',
      deviceType: 'Smartphone',
      repairType: 'Screen Replacement',
      message: 'Your request is complete.',
    },
    {
      status: 'Rejected',
      date: 'Oct 22, 2025',
      deviceName: 'Samsung S25',
      deviceType: 'Smartphone',
      repairType: 'Screen Replacement',
      message: 'Your request has been rejected.',
    },
  ];

  const filteredRepairs = activeTab === 'All' 
    ? mockRepairs 
    : mockRepairs.filter(repair => repair.status === activeTab);

  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
      {/* 1. Header Navigation */}
      <header className="border-b border-gray-200 bg-white w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to={ROUTES.HOME} className="text-2xl font-extrabold text-blue-600">PixelPatch</Link>
            </div>

            {/* Navigation Links (Desktop) */}
            <TopNavigation />

            {/* Icons (Desktop) */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                {/* Notification Icon */}
                <button className="text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors">
                  <span className="sr-only">Notifications</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>
                {/* Chat Icon */}
                <button className="text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors">
                  <span className="sr-only">Messages</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76v-1.503c0-.858.694-1.553 1.553-1.553h.002c.859 0 1.554.695 1.554 1.553v1.503A1.553 1.553 0 013.805 14.313H3.803A1.553 1.553 0 012.25 12.76zm3.003-1.503v1.503c0 .858.695 1.553 1.553 1.553h.002c.859 0 1.554-.695 1.554-1.553v-1.503c0-.858-.695-1.553-1.554-1.553h-.002a1.553 1.553 0 00-1.553 1.553zm3.004v1.503c0 .858.695 1.553 1.553 1.553h.002c.859 0 1.554-.695 1.554-1.553v-1.503c0-.858-.695-1.553-1.554-1.553h-.002a1.553 1.553 0 00-1.553 1.553zm10.493-1.553h-.002a1.553 1.553 0 00-1.553 1.553v1.503c0 .858.694 1.553 1.553 1.553h.002c.859 0 1.553-.695 1.553-1.553v-1.503c0-.858-.694-1.553-1.553-1.553z" />
                  </svg>
                </button>
                {/* Profile Avatar */}
                <Link to={ROUTES.PROFILE} className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-colors">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-full w-full object-cover" src="https://placehold.co/40x40/e0f2fe/3b82f6?text=U&font=inter" alt="User avatar" />
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
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* 2. Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Repairs</h1>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px space-x-6 overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap py-3 px-1 text-sm font-medium ${
                  activeTab === tab
                    ? 'tab-active border-b-2 border-blue-900'
                    : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
                }`}
                aria-current={activeTab === tab ? 'page' : undefined}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Repairs Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {filteredRepairs.map((repair, index) => {
            const idStr = (index + 1).toString();
            // only add a pending view path for shared repairs list
            const viewPath = repair.status === 'Pending'
              ? ROUTES.REPAIR_PENDING.replace(':id', idStr)
              : null;
            return (
              <div key={index} className="relative">
                <RepairCard {...repair} />
                {viewPath && (
                  <div className="absolute inset-x-0 bottom-4 flex justify-center">
                    <Link
                      to={viewPath}
                      className="rounded-md bg-white border border-gray-200 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-50 shadow-sm"
                    >
                      View
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Empty State Message */}
        {filteredRepairs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm text-gray-500">No repairs to show.</p>
          </div>
        )}
      </main>
      
      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default Repairs;