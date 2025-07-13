import React from 'react';
import { Globe, TrendingUp, Users, BarChart3 } from 'lucide-react';

const GlobalView: React.FC = () => {
  const globalComparisons = [
    {
      topic: "Climate Policy Implementation",
      countries: ["United States", "European Union", "China", "India"],
      leader: "European Union",
      scores: [72, 89, 45, 38],
      trend: "+12%"
    },
    {
      topic: "Healthcare System Efficiency",
      countries: ["United States", "Canada", "United Kingdom", "Germany"],
      leader: "Germany",
      scores: [68, 82, 79, 91],
      trend: "+8%"
    },
    {
      topic: "Economic Recovery Measures",
      countries: ["United States", "Japan", "South Korea", "Australia"],
      leader: "South Korea",
      scores: [84, 76, 92, 79],
      trend: "+15%"
    }
  ];

  const worldEvents = [
    {
      event: "EU Parliament Climate Vote",
      country: "European Union",
      impact: "High",
      similarity: "87% similar to US Green New Deal",
      time: "2 hours ago"
    },
    {
      event: "UK Healthcare Reform Announcement",
      country: "United Kingdom",
      impact: "Medium",
      similarity: "72% similar to Canadian system",
      time: "5 hours ago"
    },
    {
      event: "Australian Trade Policy Update",
      country: "Australia",
      impact: "Medium",
      similarity: "65% similar to NAFTA negotiations",
      time: "1 day ago"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Global Political View</h2>
        <p className="text-gray-600">Compare political decisions and outcomes worldwide</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Globe className="h-5 w-5 mr-2 text-blue-600" />
            Global Policy Comparisons
          </h3>
          
          <div className="space-y-6">
            {globalComparisons.map((comparison, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{comparison.topic}</h4>
                  <span className="text-sm font-medium text-green-600">{comparison.trend}</span>
                </div>
                
                <div className="space-y-2">
                  {comparison.countries.map((country, countryIndex) => (
                    <div key={countryIndex} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 flex items-center">
                        {country === comparison.leader && (
                          <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                        )}
                        {country}
                      </span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${
                              country === comparison.leader ? 'bg-green-500' : 'bg-blue-500'
                            }`}
                            style={{ width: `${comparison.scores[countryIndex]}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 w-8">
                          {comparison.scores[countryIndex]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
            Recent Global Events
          </h3>
          
          <div className="space-y-4">
            {worldEvents.map((event, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{event.event}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.impact === 'High' 
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {event.impact} Impact
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">{event.country}</p>
                <p className="text-sm text-blue-600 mb-2">{event.similarity}</p>
                <p className="text-xs text-gray-400">{event.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Users className="h-5 w-5 mr-2 text-indigo-600" />
          Global Democracy Index
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">8.4</div>
            <div className="text-sm text-gray-600">Norway</div>
            <div className="text-xs text-gray-500">Full Democracy</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">7.9</div>
            <div className="text-sm text-gray-600">United States</div>
            <div className="text-xs text-gray-500">Flawed Democracy</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">5.2</div>
            <div className="text-sm text-gray-600">Global Average</div>
            <div className="text-xs text-gray-500">Hybrid Regime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalView;