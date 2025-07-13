import React from 'react';
import { FileText, Clock, Users, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

const Legislation: React.FC = () => {
  const bills = [
    {
      id: "H.R. 582",
      title: "Digital Privacy Protection Act",
      status: "In Committee",
      progress: 35,
      sponsor: "Rep. Jane Smith",
      party: "Democratic",
      introduced: "March 15, 2025",
      lastAction: "Referred to House Committee on Energy and Commerce",
      summary: "Establishes comprehensive data privacy rights for consumers and regulates data collection practices.",
      supporters: 127,
      opponents: 89,
      aiPrediction: "72% chance of passage",
      confidence: 84
    },
    {
      id: "S. 1129",
      title: "National AI Strategy Act",
      status: "Floor Vote Scheduled",
      progress: 78,
      sponsor: "Sen. Michael Chen",
      party: "Republican",
      introduced: "February 8, 2025",
      lastAction: "Scheduled for floor vote on July 18, 2025",
      summary: "Creates a national framework for artificial intelligence development and regulation.",
      supporters: 203,
      opponents: 156,
      aiPrediction: "89% chance of passage",
      confidence: 91
    },
    {
      id: "H.R. 801",
      title: "Clean Water Revitalization Act",
      status: "Passed House",
      progress: 65,
      sponsor: "Rep. Sarah Johnson",
      party: "Democratic",
      introduced: "January 22, 2025",
      lastAction: "Passed House 267-168, sent to Senate",
      summary: "Provides federal funding for water infrastructure improvements and environmental protection.",
      supporters: 267,
      opponents: 168,
      aiPrediction: "56% chance of Senate passage",
      confidence: 73
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Committee': return 'bg-yellow-100 text-yellow-800';
      case 'Floor Vote Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Passed House': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPartyColor = (party: string) => {
    return party === 'Democratic' ? 'text-blue-600' : 'text-red-600';
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Legislation Tracker</h2>
        <p className="text-gray-600">Track bills and legislative progress in real-time with AI-powered predictions</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {bills.map((bill, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{bill.id}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bill.status)}`}>
                      {bill.status}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{bill.title}</h4>
                  <p className="text-gray-600">{bill.summary}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Clock className="h-4 w-4 mr-1" />
                  {bill.introduced}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm text-gray-500">{bill.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${bill.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">Latest Action</h5>
                  <p className="text-gray-700 text-sm">{bill.lastAction}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Sponsored by</p>
                    <p className="font-medium text-gray-900">
                      {bill.sponsor} <span className={`text-sm ${getPartyColor(bill.party)}`}>({bill.party})</span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{bill.supporters}</span>
                    </div>
                    <div className="flex items-center text-red-600">
                      <XCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{bill.opponents}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-4 text-white">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    <h5 className="font-medium">AI Prediction</h5>
                  </div>
                  <p className="text-sm mb-2">{bill.aiPrediction}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-90">Confidence</span>
                    <span className="font-bold">{bill.confidence}%</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mt-2">
                    <div 
                      className="bg-white h-2 rounded-full" 
                      style={{ width: `${bill.confidence}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  View Full Bill Text
                </button>

                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Track This Bill
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Legislative Calendar</h3>
        <p className="text-gray-600 mb-4">Upcoming votes and committee hearings</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">This Week</h4>
              <span className="text-sm text-blue-600">3 votes scheduled</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• S. 1129 - Floor Vote (July 18)</li>
              <li>• H.R. 892 - Committee Markup (July 19)</li>
              <li>• S. 445 - Subcommittee Hearing (July 20)</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Next Week</h4>
              <span className="text-sm text-green-600">2 hearings scheduled</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• H.R. 801 - Committee Hearing (July 22)</li>
              <li>• S. 667 - Markup Session (July 24)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legislation;