import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopNavigation from './shared/TopNavigation';
import UserAvatar from './shared/UserAvatar';
import ProfileDropdown from './ProfileDropdown';
import Footer from './shared/Footer';

const AppLayout = ({ children, activePage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      <header className="border-b border-gray-200 bg-white w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-extrabold text-blue-600">PixelPatch</Link>
            </div>

            <TopNavigation activePage={activePage} />

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <button className="text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors" aria-label="Notifications">
                  <span className="sr-only">Notifications</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>
                <div ref={dropdownRef}>
                  <UserAvatar 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    showDropdown={isDropdownOpen}
                    dropdownContent={<ProfileDropdown isOpen={isDropdownOpen} />}
                  />
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100">
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  activePage: PropTypes.oneOf(['home', 'ai-assistant', 'services', 'partner']).isRequired
};

export default AppLayout;