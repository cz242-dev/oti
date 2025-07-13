import React from 'react';
import { TrendingUp, Users, FileText, AlertTriangle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Active Politicians', value: '2,847', change: '+12%', icon: Users, color: 'blue' },
    { title: 'Bills This Session', value: '1,234', change: '+8%', icon: FileText, color: 'purple' },
    { title: 'AI Analyses', value: '45,672', change: '+24%', icon: TrendingUp, color: 'green' },
    { title: 'Critical Updates', value: '23', change: '+5%', icon: AlertTriangle, color: 'red' },
  ];

  const recentAnalyses = [
    {
      title: "Healthcare Bill Progress Analysis",
      politician: "Sen. Elizabeth Warren",
      confidence: 87,
      timeframe: "2 hours ago"
    },
    {
      title: "Climate Policy Historical Comparison",
      politician: "Rep. Alexandria Ocasio-Cortez",
      confidence: 92,
      timeframe: "4 hours ago"
    },
    {
      title: "Economic Impact Prediction",
      politician: "Sen. Bernie Sanders",
      confidence: 78,
      timeframe: "6 hours ago"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Political Insights Dashboard</h2>
        <p className="text-gray-600">AI-powered analysis of current political landscape</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
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
                  <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent AI Analyses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent AI Analyses</h3>
          <div className="space-y-4">
            {recentAnalyses.map((analysis, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">{analysis.title}</h4>
                <p className="text-sm text-gray-600 mb-2">Related to: {analysis.politician}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${analysis.confidence}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{analysis.confidence}% confidence</span>
                  </div>
                  <span className="text-xs text-gray-400">{analysis.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Topics</h3>
          <div className="space-y-4">
            {[
              { topic: "Infrastructure Bill", mentions: 1247, trend: '+18%' },
              { topic: "Climate Change Policy", mentions: 892, trend: '+12%' },
              { topic: "Healthcare Reform", mentions: 756, trend: '+8%' },
              { topic: "Education Funding", mentions: 634, trend: '+15%' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{item.topic}</h4>
                  <p className="text-sm text-gray-600">{item.mentions} mentions</p>
                </div>
                <span className="text-sm font-medium text-green-600">{item.trend}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;