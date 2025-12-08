// business/BusinessDashboard.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { ROUTES } from '../../constants/routes';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const BusinessDashboard = () => {
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Chart configurations
  const miniChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: {
      x: { display: false },
      y: { display: false, beginAtZero: true }
    }
  };

  const createGradient = (ctx, color) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, `${color}33`);
    gradient.addColorStop(1, `${color}00`);
    return gradient;
  };

  const clientUpData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      data: [10, 15, 12, 18, 20],
      borderColor: '#16a34a',
      borderWidth: 2,
      fill: true,
      backgroundColor: 'rgba(22, 163, 74, 0.1)',
      tension: 0.4,
      pointRadius: 0,
    }]
  };

  const clientDownData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      data: [20, 18, 15, 12, 10],
      borderColor: '#dc2626',
      borderWidth: 2,
      fill: true,
      backgroundColor: 'rgba(220, 38, 38, 0.1)',
      tension: 0.4,
      pointRadius: 0,
    }]
  };

  const requestsData = {
    labels: ['Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Requests',
      data: [11000, 10500, 12000, 11756, 11500],
      borderColor: '#3B82F6',
      borderWidth: 2,
      fill: true,
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      pointRadius: 0,
    }]
  };

  const donutData = {
    labels: ['Pending', 'Accepted', 'In Progress', 'Completed'],
    datasets: [{
      data: [590, 340, 142, 410],
      backgroundColor: [
        '#93c5fd',
        '#a5b4fc',
        '#9333ea',
        '#2563eb'
      ],
      borderWidth: 0,
      hoverOffset: 8
    }]
  };

  const revenueData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [{
      label: 'Revenue',
      data: [2000, 2200, 2100, 2500, 2800, 2600, 3000, 3348, 2900, 3100, 3500, 3800],
      borderColor: '#3B82F6',
      borderWidth: 2,
      fill: true,
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      pointRadius: 0,
    }]
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}`;
          }
        }
      }
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar Navigation */}
      <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="h-20 flex items-center justify-start px-6 flex-shrink-0">
          <Link to="/" className="text-2xl font-extrabold text-blue-600">PixelPatch</Link>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto sidebar-scroll px-4 py-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-semibold">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1.125-1.5M13.5 16.5L12 15m1.5 1.5l-1.125 1.5M6 16.5l-1.125-1.5M6 16.5l-1.125 1.5m1.5-1.5l1.125-1.5m-1.125 1.5l1.125 1.5M10.5 16.5l1.125-1.5M10.5 16.5l1.125 1.5m-1.125-1.5l1.125-1.5M10.5 16.5l1.125 1.5M7.5 10.5h1.5m3 0h1.5m3 0h1.5M4.5 19.5h15c.621 0 1.125-.504 1.125-1.125V8.25c0-.621-.504-1.125-1.125-1.125H4.5A1.125 1.125 0 003.375 8.25v10.125c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                <span>Dashboard</span>
              </a>
            </li>
            
            <li className="pt-2">
              <span className="px-4 text-xs font-semibold uppercase text-gray-500">Request</span>
            </li>
            {['Repairs', 'Services', 'Discounts', 'Reviews'].map((item, index) => (
              <li key={item}>
                <Link 
                  to={`/business/${item.toLowerCase()}`} 
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item}</span>
                </Link>
              </li>
            ))}
            
            <li className="pt-2">
              <span className="px-4 text-xs font-semibold uppercase text-gray-500">Settings</span>
            </li>
            {['Settings', 'Help'].map((item) => (
              <li key={item}>
                <Link 
                  to={`/business/${item.toLowerCase()}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.26.72.518.977l.909.909a.5.5 0 010 .707l-.909.909c-.258.258-.455.542-.518.977l-.213 1.281c-.09.542-.56.94-1.11.94h-2.593c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.26-.72-.518-.977l-.909-.909a.5.5 0 010-.707l.909-.909c.258-.258.455-.542.518-.977l.213-1.281zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Top Header Bar */}
        <header className="h-20 flex-shrink-0 bg-white border-b border-gray-200 flex items-center justify-end px-6">
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <button className="text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors">
              <span className="sr-only">Notifications</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>

            {/* Profile Avatar */}
            <div className="relative">
              <button 
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-colors"
              >
                <span className="sr-only">Open user menu</span>
                <img className="h-full w-full object-cover" src="https://placehold.co/40x40/e0f2fe/3b82f6?text=U&font=inter" alt="User avatar" />
              </button>
              
              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1" role="none">
                    <div className="flex items-center px-4 py-3 border-b border-gray-200">
                      <img className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/dbeafe/1e40af?text=JD&font=inter" alt="User Avatar" />
                      <div className="ml-3">
                        <p className="text-sm font-semibold text-gray-900">John Doe</p>
                        <p className="text-sm text-gray-500">johndoe@gmail.com</p>
                      </div>
                    </div>
                    <div className="py-1">
                      <Link to="/business/profile" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                      <Link to="/business/settings" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                      <Link to="/business/help" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">Help</Link>
                    </div>
                    <div className="py-1 border-t border-gray-200">
                      <button 
                        onClick={() => {
                          localStorage.removeItem('token');
                          navigate(ROUTES.HOME);
                        }} 
                        className="block w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Overview</h1>

          {/* Top Row: Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Client Stats */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <h2 className="text-sm font-medium text-gray-500">Client this month</h2>
              <div className="flex items-start justify-between mt-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold">1,235</span>
                  <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span>2.5%</span>
                  </span>
                </div>
                <div className="w-20 h-10">
                  <Line data={clientUpData} options={miniChartOptions} />
                </div>
              </div>
              <div className="flex items-start justify-between mt-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold">456</span>
                  <span className="text-sm font-medium text-red-600 flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span>1.5%</span>
                  </span>
                </div>
                <div className="w-20 h-10">
                  <Line data={clientDownData} options={miniChartOptions} />
                </div>
              </div>
            </div>
            
            {/* Requests This Month */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <h2 className="text-sm font-medium text-gray-500">Statistics</h2>
              <p className="text-base font-semibold text-gray-900">Requests This Month</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-bold">11,756</span>
                <span className="text-sm font-medium text-red-600">-23%</span>
              </div>
              <div className="h-28 mt-4">
                <Line data={requestsData} options={{
                  ...miniChartOptions,
                  plugins: {
                    ...miniChartOptions.plugins,
                    tooltip: { enabled: true }
                  }
                }} />
              </div>
            </div>
            
            {/* Total Transactions */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <h2 className="text-sm font-medium text-gray-500">Statistics</h2>
              <p className="text-base font-semibold text-gray-900">Total Transactions</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-bold">1,027</span>
                <span className="text-sm font-medium text-green-600">+2.75%</span>
              </div>
              <div className="h-28 mt-4">
                <Line data={revenueData} options={{
                  ...miniChartOptions,
                  plugins: {
                    ...miniChartOptions.plugins,
                    tooltip: { enabled: true }
                  }
                }} />
              </div>
            </div>
          </div>
          
          {/* Bottom Row: Donut and Line Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Monthly Requests Donut Chart */}
            <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Monthly Requests</h2>
              <div className="h-64 relative my-4">
                <Doughnut data={donutData} options={donutOptions} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900">1.05</span>
                  <span className="text-sm text-gray-500">Average range</span>
                </div>
              </div>
              {/* Legend */}
              <div className="space-y-3">
                {[
                  { label: 'Completed', color: '#2563eb', value: '410' },
                  { label: 'In Progress', color: '#9333ea', value: '142' },
                  { label: 'Accepted', color: '#a5b4fc', value: '340' },
                  { label: 'Pending', color: '#93c5fd', value: '590' },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Total Revenue Line Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Total Revenue 2025</h2>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-bold">₱12.7K</span>
                    <span className="text-sm font-medium text-green-600">1.3% vs Last Year</span>
                  </div>
                </div>
                <div className="flex-shrink-0 mt-4 sm:mt-0">
                  <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                    <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-900">Daily</button>
                    <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-900">Weekly</button>
                    <button className="px-3 py-1 rounded-md text-sm font-medium bg-white text-gray-900 shadow-sm">Annually</button>
                  </div>
                </div>
              </div>
              <div className="h-80 mt-6">
                <Line data={revenueData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                      mode: 'index',
                      intersect: false,
                    }
                  },
                  scales: {
                    x: {
                      grid: { display: false },
                      ticks: { font: { size: 10 } }
                    },
                    y: {
                      grid: { color: '#e5e7eb', borderDash: [2, 4] },
                      ticks: {
                        font: { size: 10 },
                        callback: function(value) {
                          return (value / 1000) + 'k';
                        }
                      },
                      min: 0,
                      max: 5000
                    }
                  }
                }} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessDashboard;