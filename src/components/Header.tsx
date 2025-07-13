import React from 'react';
import { Search, Bell, User, Menu, LogOut } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, onLogout }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 ml-2 md:ml-0">
              <div className="flex items-center space-x-3">
                <svg width="32" height="32" viewBox="0 0 80 80" className="drop-shadow-sm">
                  <defs>
                    <linearGradient id="headerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#1D4ED8" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                  </defs>
                  <circle cx="40" cy="40" r="35" fill="url(#headerLogoGradient)" opacity="0.1"/>
                  <g transform="translate(40, 40)">
                    <circle cx="0" cy="0" r="3" fill="url(#headerLogoGradient)"/>
                    <circle cx="-12" cy="-8" r="2" fill="#3B82F6" opacity="0.8"/>
                    <circle cx="12" cy="-8" r="2" fill="#3B82F6" opacity="0.8"/>
                    <circle cx="-12" cy="8" r="2" fill="#3B82F6" opacity="0.8"/>
                    <circle cx="12" cy="8" r="2" fill="#3B82F6" opacity="0.8"/>
                    <line x1="0" y1="0" x2="-12" y2="-8" stroke="#3B82F6" strokeWidth="1.2" opacity="0.6"/>
                    <line x1="0" y1="0" x2="12" y2="-8" stroke="#3B82F6" strokeWidth="1.2" opacity="0.6"/>
                    <line x1="0" y1="0" x2="-12" y2="8" stroke="#3B82F6" strokeWidth="1.2" opacity="0.6"/>
                    <line x1="0" y1="0" x2="12" y2="8" stroke="#3B82F6" strokeWidth="1.2" opacity="0.6"/>
                    <ellipse cx="0" cy="0" rx="15" ry="10" fill="none" stroke="url(#headerLogoGradient)" strokeWidth="0.8" opacity="0.4"/>
                  </g>
                </svg>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">OTI</h1>
                  <p className="text-xs text-gray-500">Political Intelligence</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search politicians, topics, or legislation..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 text-gray-400 hover:text-gray-500">
                <img 
                  src="https://images.pexels.com/photos/5668799/pexels-photo-5668799.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop" 
                  alt="User Avatar" 
                  className="w-8 h-8 rounded-full object-cover"
                />
              </button>
              {onLogout && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button
                    onClick={onLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;