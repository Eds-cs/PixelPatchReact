import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TopNavigation = ({ activePage }) => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-6">
        <Link
          to="/"
          className={`${activePage === 'home' ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
        >
          Home
        </Link>
        <Link
          to="/ai-assistant"
          className={`${activePage === 'ai-assistant' ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
        >
          AI Assistant
        </Link>
        <Link
          to="/services"
          className={`${activePage === 'services' ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
        >
          Services
        </Link>
        <Link
          to="/repairs"
          className={`${activePage === 'repairs' ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
        >
          Repairs
        </Link>
        <Link
          to="/partner"
          className={`${activePage === 'partner' ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
        >
          Become a Partner
        </Link>
      </div>
    </div>
  );
};

TopNavigation.propTypes = {
  activePage: PropTypes.oneOf(['home', 'ai-assistant', 'services', 'repairs', 'partner']).isRequired
};

export default TopNavigation;
