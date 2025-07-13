import React from 'react';
import { Home, TrendingUp, Users, FileText, BarChart3, Globe, MessageSquare, User, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'politicians', label: 'Politicians', icon: Users },
    { id: 'analysis', label: 'AI Analysis', icon: TrendingUp },
    { id: 'legislation', label: 'Legislation', icon: FileText },
    { id: 'global', label: 'Global View', icon: Globe },
    { id: 'trends', label: 'Trends', icon: BarChart3 },
    { id: 'discussions', label: 'Discussions', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className={`bg-gray-50 border-r border-gray-200 transition-all duration-300 ${isOpen ? 'w-64' : 'w-0 md:w-64'} overflow-hidden`}>
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;