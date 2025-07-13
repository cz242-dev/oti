import React from 'react';
import { MessageSquare, Users, ThumbsUp, ThumbsDown, Reply, Clock, TrendingUp } from 'lucide-react';

const Discussions: React.FC = () => {
  const discussions = [
    {
      id: 1,
      title: "Healthcare Reform Bill H.R. 582 - What are your thoughts?",
      author: "PoliticalAnalyst2025",
      avatar: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      category: "Healthcare",
      replies: 127,
      likes: 89,
      dislikes: 23,
      timeAgo: "2 hours ago",
      preview: "The new healthcare bill seems to address many of the issues we've been discussing. What do you think about the proposed changes to Medicare expansion?",
      trending: true
    },
    {
      id: 2,
      title: "Climate Policy: Comparing US approach to EU standards",
      author: "GreenPolicy",
      avatar: "https://images.pexels.com/photos/5668840/pexels-photo-5668840.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      category: "Environment",
      replies: 94,
      likes: 156,
      dislikes: 12,
      timeAgo: "4 hours ago",
      preview: "Looking at the recent AI analysis showing US policy lagging behind EU by 18 months. How can we bridge this gap?",
      trending: false
    },
    {
      id: 3,
      title: "Sen. Warren's latest economic proposal - Analysis needed",
      author: "EconWatcher",
      avatar: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      category: "Economy",
      replies: 203,
      likes: 267,
      dislikes: 45,
      timeAgo: "6 hours ago",
      preview: "The wealth tax proposal has some interesting implications. Would love to hear from economists in the community about potential impacts.",
      trending: true
    },
    {
      id: 4,
      title: "Digital Privacy Act - Tech industry response",
      author: "TechPolicy",
      avatar: "https://images.pexels.com/photos/5668799/pexels-photo-5668799.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      category: "Technology",
      replies: 78,
      likes: 134,
      dislikes: 29,
      timeAgo: "8 hours ago",
      preview: "Major tech companies are pushing back on the new privacy regulations. What are the implications for innovation vs. privacy?",
      trending: false
    }
  ];

  const categories = [
    { name: "All", count: 1247, active: true },
    { name: "Healthcare", count: 234, active: false },
    { name: "Economy", count: 189, active: false },
    { name: "Environment", count: 156, active: false },
    { name: "Technology", count: 123, active: false },
    { name: "Education", count: 98, active: false }
  ];

  const topContributors = [
    {
      name: "PoliticalAnalyst2025",
      avatar: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      posts: 45,
      reputation: 2847
    },
    {
      name: "EconWatcher",
      avatar: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      posts: 38,
      reputation: 2156
    },
    {
      name: "GreenPolicy",
      avatar: "https://images.pexels.com/photos/5668840/pexels-photo-5668840.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop",
      posts: 32,
      reputation: 1923
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Healthcare': 'bg-blue-100 text-blue-800',
      'Environment': 'bg-green-100 text-green-800',
      'Economy': 'bg-purple-100 text-purple-800',
      'Technology': 'bg-indigo-100 text-indigo-800',
      'Education': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Community Discussions</h2>
        <p className="text-gray-600">Join the conversation about current political events and policies</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Discussion Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Categories */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category.active
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* New Discussion Button */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Start a new discussion</h3>
                <p className="text-sm text-gray-600">Share your thoughts on current political topics</p>
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                New Post
              </button>
            </div>
          </div>

          {/* Discussion List */}
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <div key={discussion.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <img
                    src={discussion.avatar}
                    alt={discussion.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                        {discussion.title}
                      </h3>
                      {discussion.trending && (
                        <div className="flex items-center text-orange-600">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          <span className="text-xs font-medium">Trending</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="font-medium text-gray-900">{discussion.author}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(discussion.category)}`}>
                        {discussion.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {discussion.timeAgo}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{discussion.preview}</p>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Reply className="h-4 w-4" />
                        <span className="text-sm">{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center space-x-1 text-green-600">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-sm">{discussion.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-red-600">
                        <ThumbsDown className="h-4 w-4" />
                        <span className="text-sm">{discussion.dislikes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Contributors */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-600" />
              Top Contributors
            </h3>
            <div className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{contributor.name}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{contributor.posts} posts</span>
                      <span>•</span>
                      <span>{contributor.reputation} rep</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Discussion Rules */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Guidelines</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Keep discussions respectful and fact-based</li>
              <li>• Cite sources when making claims</li>
              <li>• No personal attacks or harassment</li>
              <li>• Stay on topic and relevant to politics</li>
              <li>• Use appropriate categories for your posts</li>
            </ul>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Discussions</span>
                <span className="font-medium text-gray-900">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Active Members</span>
                <span className="font-medium text-gray-900">8,934</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Posts Today</span>
                <span className="font-medium text-gray-900">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Online Now</span>
                <span className="font-medium text-green-600">234</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussions;