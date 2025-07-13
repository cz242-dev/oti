import React from 'react';
import { Brain, TrendingUp, Clock, Globe } from 'lucide-react';

const Analysis: React.FC = () => {
  const analyses = [
    {
      title: "Healthcare Bill Trajectory Analysis",
      type: "Legislative Progress",
      confidence: 94,
      prediction: "72% chance of passage within 60 days",
      historicalMatch: "Similar to 2009 ACA process",
      keyFactors: ["Bipartisan support", "Economic climate", "Public opinion"],
      timeGenerated: "12 minutes ago"
    },
    {
      title: "Climate Policy Global Comparison",
      type: "International Analysis",
      confidence: 88,
      prediction: "US policy lag behind EU by 18 months",
      historicalMatch: "Similar to renewable energy adoption patterns",
      keyFactors: ["Industrial interests", "State-level variations", "Federal coordination"],
      timeGenerated: "1 hour ago"
    },
    {
      title: "Election Campaign Pattern Recognition",
      type: "Political Strategy",
      confidence: 91,
      prediction: "Traditional swing states shifting",
      historicalMatch: "Echoes 2016 demographic changes",
      keyFactors: ["Demographic shifts", "Economic indicators", "Media influence"],
      timeGenerated: "3 hours ago"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">AI-Powered Analysis</h2>
        <p className="text-gray-600">Deep insights through machine learning and historical pattern recognition</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {analyses.map((analysis, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{analysis.title}</h3>
                  <p className="text-sm text-gray-600">{analysis.type}</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {analysis.timeGenerated}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-medium text-gray-900">AI Prediction</h4>
                  </div>
                  <p className="text-gray-700">{analysis.prediction}</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Globe className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-medium text-gray-900">Historical Match</h4>
                  </div>
                  <p className="text-gray-700">{analysis.historicalMatch}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Factors Analyzed</h4>
                  <div className="flex flex-wrap gap-2">
                    {analysis.keyFactors.map((factor, factorIndex) => (
                      <span
                        key={factorIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {factor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-4 text-white">
                  <h4 className="font-medium mb-2">Confidence Score</h4>
                  <div className="text-3xl font-bold">{analysis.confidence}%</div>
                  <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mt-2">
                    <div 
                      className="bg-white h-2 rounded-full" 
                      style={{ width: `${analysis.confidence}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  View Detailed Analysis
                </button>

                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Export Report
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Request Custom Analysis</h3>
        <p className="text-gray-600 mb-4">
          Our AI can analyze any political topic, compare with historical data, and provide predictions.
        </p>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter topic, politician, or legislation..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analysis;