import React from 'react';
import { MapPin, Calendar, TrendingUp, ExternalLink } from 'lucide-react';

const Politicians: React.FC = () => {
  const politicians = [
    {
      name: "Elizabeth Warren",
      party: "Democratic",
      position: "U.S. Senator",
      state: "Massachusetts",
      yearsInOffice: 11,
      aiScore: 92,
      recentActivity: "Introduced Healthcare Reform Bill",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Marco Rubio",
      party: "Republican",
      position: "U.S. Senator",
      state: "Florida",
      yearsInOffice: 13,
      aiScore: 87,
      recentActivity: "Foreign Policy Committee Hearing",
      image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Alexandria Ocasio-Cortez",
      party: "Democratic",
      position: "U.S. Representative",
      state: "New York",
      yearsInOffice: 6,
      aiScore: 89,
      recentActivity: "Climate Action Town Hall",
      image: "https://images.pexels.com/photos/5668840/pexels-photo-5668840.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Ted Cruz",
      party: "Republican",
      position: "U.S. Senator",
      state: "Texas",
      yearsInOffice: 11,
      aiScore: 84,
      recentActivity: "Judiciary Committee Statement",
      image: "https://images.pexels.com/photos/5668799/pexels-photo-5668799.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Politicians</h2>
        <p className="text-gray-600">Comprehensive profiles with AI-powered insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {politicians.map((politician, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={politician.image}
                  alt={politician.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{politician.name}</h3>
                  <p className="text-sm text-gray-600">{politician.position}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {politician.state}
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  {politician.yearsInOffice} years in office
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    AI Influence Score
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${politician.aiScore}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{politician.aiScore}</span>
                  </div>
                </div>

                <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                  politician.party === 'Democratic' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {politician.party}
                </div>

                <p className="text-sm text-gray-600 mt-3">
                  <strong>Recent:</strong> {politician.recentActivity}
                </p>

                <button className="w-full mt-4 flex items-center justify-center px-4 py-2 border border-blue-300 rounded-md text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors">
                  View Full Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Politicians;