import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ROUTES } from './constants/routes';
import ErrorBoundary from './components/shared/ErrorBoundary';
import Home from './components/Home';
import HomeLoggedIn from './components/HomeLoggedIn';
import Services from './components/Services';
import SignUp from './components/SignUp';
import Login from './components/Login';
import BecomePartner from './components/BecomePartner';
import AiAssistant from './components/AiAssistant';
import ShopProfile from './components/ShopProfile';
import UserProfile from './components/UserProfile';
import Repairs from './components/Repairs/Repairs';
import RepairPending from './components/Repairs/RepairPending';
import BusinessDashboard from './components/business/BusinessDashboard';
import Settings from './components/Settings';
import Help from './components/Help';
import About from './components/About';
import Devices from './components/Devices';
import BusinessSettings from './components/business/BusinessSettings';
import BusinessHelp from './components/business/BusinessHelp';
import BusinessServices from './components/business/BusinessServices';
import BusinessDiscounts from './components/business/BusinessDiscounts';
import BusinessReviews from './components/business/BusinessReviews';
import BusinessProfile from './components/business/BusinessProfile';
// Import business section components
import { businessRoutes } from './components/business/routes';
const { Repairs: BusinessRepairs, RepairDetails, RepairPending: BusinessRepairPending, RepairAwaitingAssessment, RepairAssessmentNoQuotation, RepairInProgress, RepairDone, RepairRejected, RepairCompleted } = businessRoutes;

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.DASHBOARD} element={<HomeLoggedIn />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.PARTNER} element={<BecomePartner />} />
          <Route path={ROUTES.AI_ASSISTANT} element={<AiAssistant />} />
          <Route path={`${ROUTES.SHOP}/:id`} element={<ShopProfile />} />
          <Route path={ROUTES.PROFILE} element={<UserProfile />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          {/* New Routes */}
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path={ROUTES.HELP} element={<Help />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.REPAIRS} element={<Repairs />} />
          <Route path={ROUTES.REPAIR_PENDING} element={<RepairPending />} />
          <Route path={ROUTES.DEVICES} element={<Devices />} />
          
          {/* Business Routes */}
          <Route path={ROUTES.BUSINESS.DASHBOARD} element={<BusinessDashboard />} />
          <Route path={ROUTES.BUSINESS.PROFILE} element={<BusinessProfile />} />
          <Route path={ROUTES.BUSINESS.REPAIRS} element={<BusinessRepairs />} />
          <Route path={ROUTES.BUSINESS.REPAIR_DETAIL} element={<RepairDetails />} />
          <Route path={ROUTES.BUSINESS.REPAIR_PENDING} element={<BusinessRepairPending />} />
          <Route path={ROUTES.BUSINESS.REPAIR_REJECTED} element={<RepairRejected />} />
          <Route path={ROUTES.BUSINESS.AWAITING_ASSESSMENT} element={<RepairAwaitingAssessment />} />
          <Route path={ROUTES.BUSINESS.REPAIR_ASSESSMENT} element={<RepairAssessmentNoQuotation />} />
          <Route path={ROUTES.BUSINESS.REPAIR_IN_PROGRESS} element={<RepairInProgress />} />
          <Route path={ROUTES.BUSINESS.REPAIR_DONE} element={<RepairDone />} />
          <Route path={ROUTES.BUSINESS.REPAIR_COMPLETED} element={<RepairCompleted />} />
          <Route path={ROUTES.BUSINESS.SERVICES} element={<BusinessServices />} />
          <Route path={ROUTES.BUSINESS.DISCOUNTS} element={<BusinessDiscounts />} />
          <Route path={ROUTES.BUSINESS.REVIEWS} element={<BusinessReviews />} />
          <Route path={ROUTES.BUSINESS.SETTINGS} element={<BusinessSettings />} />
          <Route path={ROUTES.BUSINESS.HELP} element={<BusinessHelp />} />
          
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App
