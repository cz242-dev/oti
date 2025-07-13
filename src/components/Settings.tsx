import React from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, Globe, Palette, Download } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Settings</h2>
        <p className="text-gray-600">Manage your account preferences and platform settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Settings Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Settings Categories</h3>
          <nav className="space-y-2">
            {[
              { icon: User, label: 'Profile', active: true },
              { icon: Bell, label: 'Notifications', active: false },
              { icon: Shield, label: 'Privacy & Security', active: false },
              { icon: Globe, label: 'Language & Region', active: false },
              { icon: Palette, label: 'Appearance', active: false },
              { icon: Download, label: 'Data Export', active: false }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    item.active
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <User className="h-5 w-5 mr-2 text-blue-600" />
              Profile Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/5668799/pexels-photo-5668799.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-2">
                    Change Photo
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue="Alex"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Johnson"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="alex.johnson@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea
                  rows={3}
                  defaultValue="Political analyst and researcher interested in data-driven insights and democratic processes."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title</label>
                <input
                  type="text"
                  defaultValue="Political Analyst"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Bell className="h-5 w-5 mr-2 text-purple-600" />
              Notification Preferences
            </h3>
            <div className="space-y-4">
              {[
                { label: 'New AI Analysis Available', description: 'Get notified when new political analyses are published', enabled: true },
                { label: 'Politicians You Follow', description: 'Updates on politicians you are following', enabled: true },
                { label: 'Trending Topics', description: 'Alerts about trending political topics', enabled: false },
                { label: 'Discussion Replies', description: 'When someone replies to your comments', enabled: true },
                { label: 'Weekly Summary', description: 'Weekly digest of political insights', enabled: true },
                { label: 'Breaking News', description: 'Urgent political news and updates', enabled: false }
              ].map((notification, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{notification.label}</h4>
                    <p className="text-sm text-gray-600">{notification.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={notification.enabled}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-green-600" />
              Privacy & Security
            </h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-100 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Profile Visibility</h4>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Public - Anyone can see your profile</option>
                  <option>Members Only - Only registered users can see your profile</option>
                  <option>Private - Only you can see your profile</option>
                </select>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Data Collection</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="mr-2" />
                    <span className="text-sm text-gray-700">Allow analytics to improve platform experience</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-700">Share anonymized data for research purposes</span>
                  </label>
                </div>
              </div>
              
              <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Delete Account
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end space-x-4">
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;