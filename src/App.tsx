import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AuthModal from './components/AuthModal';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Politicians from './components/Politicians';
import Analysis from './components/Analysis';
import GlobalView from './components/GlobalView';
import UserProfile from './components/UserProfile';
import Legislation from './components/Legislation';
import Trends from './components/Trends';
import Discussions from './components/Discussions';
import Settings from './components/Settings';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'demo'>('login');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleGetStarted = () => {
    setAuthMode('demo');
    setShowAuthModal(true);
  };

  const handleLogin = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab('dashboard');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'politicians':
        return <Politicians />;
      case 'analysis':
        return <Analysis />;
      case 'global':
        return <GlobalView />;
      case 'profile':
        return <UserProfile />;
      case 'legislation':
        return <Legislation />;
      case 'trends':
        return <Trends />;
      case 'discussions':
        return <Discussions />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  // Show landing page if not authenticated
  if (!isAuthenticated) {
    return (
      <>
        <LandingPage onGetStarted={handleGetStarted} onLogin={handleLogin} />
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleAuthentication}
          initialMode={authMode}
        />
      </>
    );
  }

  // Show main dashboard if authenticated
  return (
    <div className="min-h-screen bg-gray-100">
      <Header onMenuToggle={toggleSidebar} onLogout={handleLogout} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;