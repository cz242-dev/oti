import React from 'react';
import { TrendingUp, Users, FileText, Bell, Settings, BarChart3 } from 'lucide-react';

const UserProfile: React.FC = () => {
  const userStats = [
    { title: 'Following', value: '247', icon: Users, color: 'blue' },
    { title: 'Analyses Read', value: '1,234', icon: FileText, color: 'purple' },
    { title: 'Predictions Made', value: '89', icon: TrendingUp, color: 'green' },
    { title: 'Notifications', value: '23', icon: Bell, color: 'red' },
  ];

  const recentActivity = [
    {
      action: "Followed",
      target: "Sen. Elizabeth Warren",
      time: "2 hours ago",
      type: "follow"
    },
    {
      action: "Commented on",
      target: "Healthcare Reform Analysis",
      time: "5 hours ago",
      type: "comment"
    },
    {
      action: "Shared",
      target: "Climate Policy Comparison",
      time: "1 day ago",
      type: "share"
    },
    {
      action: "Bookmarked",
      target: "Economic Impact Prediction",
      time: "2 days ago",
      type: "bookmark"
    }
  ];

  const watchedPoliticians = [
    {
      name: "Emily Sato",
      party: "National Progressive Party",
      change: "+5.2%",
      avatar: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
    },
    {
      name: "Robert Anderson",
      party: "Federalist Alliance",
      change: "+3.8%",
      avatar: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
    },
    {
      name: "Chen Wei",
      party: "Independent",
      change: "-1.1%",
      avatar: "https://images.pexels.com/photos/5668840/pexels-photo-5668840.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
    }
  ];

  const trendingTopics = [
    "#HealthcareReform",
    "#ClimateAction", 
    "#EconomicStimulus",
    "#InfrastructureBill",
    "#EducationFunding"
  ];

  const upcomingLegislation = [
    {
      title: "S. 1129 - National AI Strategy Act",
      date: "July 18, 2025",
      type: "Vote scheduled"
    },
    {
      title: "H.R. 801 - Clean Water Revitalization",
      date: "July 22, 2025", 
      type: "Committee hearing"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">User Profile Dashboard</h2>
            <p className="text-gray-600">Welcome back, Alex. Here's your political overview for today.</p>
          </div>
          <div className="flex items-center space-x-4">
            <img 
              src="https://images.pexels.com/photos/5668799/pexels-photo-5668799.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" 
              alt="User Avatar" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">Alex Johnson</p>
              <p className="text-sm text-gray-500">Political Analyst</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {userStats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'bg-blue-500 text-white',
            purple: 'bg-purple-500 text-white',
            green: 'bg-green-500 text-white',
            red: 'bg-red-500 text-white',
          };

          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Insight Card */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 mb-8">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-indigo-100 rounded-full mr-4">
            <BarChart3 className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Today's AI Insight</h3>
        </div>
        <p className="text-gray-700 mb-2">
          Based on recent votes on <span className="font-semibold text-indigo-600">Bill H.R. 582</span>, 
          we've identified a significant policy shift in the Liberty Party regarding environmental regulations.
        </p>
        <p className="text-gray-700 mb-4">
          This action shows a <span className="font-semibold text-green-600">32% higher correlation</span> with 
          political strategies seen during the 1998 "Green Shift\" period in Western Europe than with their own 
          party's platform from the last decade.
        </p>
        <button className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
          Explore this analysis →
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'follow' ? 'bg-blue-500' :
                  activity.type === 'comment' ? 'bg-green-500' :
                  activity.type === 'share' ? 'bg-purple-500' : 'bg-yellow-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-gray-800">
                    <span className="font-medium">{activity.action}</span> {activity.target}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Politicians to Watch */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Politicians You're Watching</h3>
            <div className="space-y-4">
              {watchedPoliticians.map((politician, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={politician.avatar} 
                      className="w-10 h-10 rounded-full object-cover" 
                      alt={politician.name}
                    />
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{politician.name}</p>
                      <p className="text-sm text-gray-500">{politician.party}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      politician.change.startsWith('+') ? 'text-green-600' : 'text-red-500'
                    }`}>
                      {politician.change}
                    </p>
                    <p className="text-sm text-gray-500">Influence</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Topics */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Topics</h3>
            <div className="flex flex-wrap gap-2">
              {trendingTopics.map((topic, index) => (
                <span 
                  key={index}
                  className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-indigo-200 transition-colors cursor-pointer"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Upcoming Legislation */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Legislation</h3>
            <div className="space-y-3">
              {upcomingLegislation.map((item, index) => (
                <div key={index} className="border-l-4 border-indigo-500 pl-4">
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-600">
                    {item.type}: <span className="font-medium text-indigo-600">{item.date}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;