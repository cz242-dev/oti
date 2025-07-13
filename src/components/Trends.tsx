import React from 'react';
import { TrendingUp, TrendingDown, BarChart3, Users, MessageSquare, Hash } from 'lucide-react';

const Trends: React.FC = () => {
  const trendingTopics = [
    {
      topic: "Healthcare Reform",
      mentions: 15420,
      change: "+24%",
      trend: "up",
      sentiment: 67,
      relatedPoliticians: ["Sen. Warren", "Rep. Ocasio-Cortez", "Sen. Sanders"]
    },
    {
      topic: "Climate Policy",
      mentions: 12890,
      change: "+18%",
      trend: "up",
      sentiment: 72,
      relatedPoliticians: ["Rep. Green", "Sen. Climate", "Gov. Earth"]
    },
    {
      topic: "Economic Stimulus",
      mentions: 9340,
      change: "-8%",
      trend: "down",
      sentiment: 45,
      relatedPoliticians: ["Sec. Treasury", "Rep. Economy", "Sen. Finance"]
    },
    {
      topic: "Infrastructure Bill",
      mentions: 8760,
      change: "+12%",
      trend: "up",
      sentiment: 58,
      relatedPoliticians: ["Rep. Roads", "Sen. Bridges", "Gov. Transit"]
    },
    {
      topic: "Education Funding",
      mentions: 7230,
      change: "+31%",
      trend: "up",
      sentiment: 81,
      relatedPoliticians: ["Sec. Education", "Rep. Schools", "Sen. Teachers"]
    }
  ];

  const emergingTopics = [
    { topic: "Digital Privacy Rights", growth: "+156%", timeframe: "Last 7 days" },
    { topic: "AI Regulation Framework", growth: "+89%", timeframe: "Last 3 days" },
    { topic: "Renewable Energy Subsidies", growth: "+67%", timeframe: "Last 5 days" },
    { topic: "Social Media Oversight", growth: "+45%", timeframe: "Last 2 days" }
  ];

  const sentimentAnalysis = [
    { topic: "Healthcare", positive: 67, negative: 33, neutral: 45 },
    { topic: "Economy", positive: 45, negative: 55, neutral: 38 },
    { topic: "Climate", positive: 72, negative: 28, neutral: 52 },
    { topic: "Education", positive: 81, negative: 19, neutral: 61 }
  ];

  const getSentimentColor = (sentiment: number) => {
    if (sentiment >= 70) return 'text-green-600';
    if (sentiment >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSentimentBg = (sentiment: number) => {
    if (sentiment >= 70) return 'bg-green-500';
    if (sentiment >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Political Trends</h2>
        <p className="text-gray-600">Identify emerging political patterns and movements with real-time analytics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Trending Topics */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Hash className="h-5 w-5 mr-2 text-blue-600" />
            Trending Topics
          </h3>
          <div className="space-y-4">
            {trendingTopics.map((item, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{item.topic}</h4>
                  <div className="flex items-center space-x-2">
                    {item.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${
                      item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {item.change}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {item.mentions.toLocaleString()} mentions
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 mr-2">Sentiment:</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className={`h-2 rounded-full ${getSentimentBg(item.sentiment)}`}
                        style={{ width: `${item.sentiment}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium ${getSentimentColor(item.sentiment)}`}>
                      {item.sentiment}%
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {item.relatedPoliticians.map((politician, politicianIndex) => (
                    <span 
                      key={politicianIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {politician}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emerging Topics */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
              Emerging Topics
            </h3>
            <div className="space-y-3">
              {emergingTopics.map((item, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-gray-900">{item.topic}</h4>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-gray-500">{item.timeframe}</span>
                    <span className="text-sm font-medium text-green-600">{item.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
              Sentiment Analysis
            </h3>
            <div className="space-y-4">
              {sentimentAnalysis.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{item.topic}</span>
                    <span className={`text-sm font-medium ${getSentimentColor(item.positive)}`}>
                      {item.positive}% positive
                    </span>
                  </div>
                  <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="bg-green-500" 
                      style={{ width: `${item.positive}%` }}
                    ></div>
                    <div 
                      className="bg-gray-400" 
                      style={{ width: `${item.neutral}%` }}
                    ></div>
                    <div 
                      className="bg-red-500" 
                      style={{ width: `${item.negative}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trend Insights */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Users className="h-5 w-5 mr-2 text-purple-600" />
          AI Trend Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Pattern Recognition</h4>
            <p className="text-sm text-gray-600 mb-3">
              Current healthcare discussion patterns show 87% similarity to the 2009 ACA debate cycle, 
              suggesting potential for bipartisan compromise within 60 days.
            </p>
            <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
              View Analysis →
            </button>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Prediction Model</h4>
            <p className="text-sm text-gray-600 mb-3">
              Based on current trending patterns, "Digital Privacy Rights" is predicted to become 
              a major campaign issue with 92% confidence by Q4 2025.
            </p>
            <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
              View Prediction →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;