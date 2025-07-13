import React, { useState } from 'react';
import { X, Eye, EyeOff, Mail, Lock, User, ArrowRight, Shield, CheckCircle } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
  initialMode?: 'login' | 'signup' | 'demo';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'demo'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    organization: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    setTimeout(() => {
      onLogin();
      onClose();
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const renderLoginForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        <button type="button" className="text-sm text-indigo-600 hover:text-indigo-800">
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
      >
        Sign In
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </form>
  );

  const renderSignupForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="First name"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Last name"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Organization (Optional)</label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Your organization"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Create a password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="flex items-start">
        <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-1" required />
        <span className="ml-2 text-sm text-gray-600">
          I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-800">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:text-indigo-800">Privacy Policy</a>
        </span>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
      >
        Create Account
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </form>
  );

  const renderDemoForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-4 mb-6">
        <h4 className="font-semibold text-indigo-900 mb-2">Demo Access Includes:</h4>
        <ul className="text-sm text-indigo-700 space-y-2">
          <li className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-2 text-indigo-600" />
            Full platform access for 14 days
          </li>
          <li className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-2 text-indigo-600" />
            AI-powered political analysis
          </li>
          <li className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-2 text-indigo-600" />
            Historical comparison tools
          </li>
          <li className="flex items-center">
            <CheckCircle className="w-4 h-4 mr-2 text-indigo-600" />
            Personal onboarding session
          </li>
        </ul>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Your full name"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="your.email@organization.com"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Your organization or news outlet"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Use Case</label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
          <option>Journalism & Reporting</option>
          <option>Academic Research</option>
          <option>Political Campaign</option>
          <option>Government Affairs</option>
          <option>Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
      >
        Request Demo Access
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </form>
  );

  const getTitle = () => {
    switch (mode) {
      case 'login': return 'Welcome Back';
      case 'signup': return 'Join OTI';
      case 'demo': return 'Request Demo Access';
    }
  };

  const getSubtitle = () => {
    switch (mode) {
      case 'login': return 'Sign in to your account to continue';
      case 'signup': return 'Create your account to get started';
      case 'demo': return 'Get full access to OTI for 14 days';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-gray-100">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{getTitle()}</h2>
              </div>
              <p className="text-gray-600 ml-13">{getSubtitle()}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mode Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-xl p-1 mb-6">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                mode === 'login' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                mode === 'signup' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setMode('demo')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                mode === 'demo' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Demo
            </button>
          </div>

          {/* Form Content */}
          {mode === 'login' && renderLoginForm()}
          {mode === 'signup' && renderSignupForm()}
          {mode === 'demo' && renderDemoForm()}

          {/* Footer */}
          {mode === 'login' && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Don't have an account?{' '}
                <button
                  onClick={() => setMode('signup')}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Sign up
                </button>
              </p>
              <div className="text-xs text-gray-500">
                Secure authentication powered by industry-standard encryption
              </div>
            </div>
          )}

          {mode === 'signup' && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Already have an account?{' '}
                <button
                  onClick={() => setMode('login')}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Sign in
                </button>
              </p>
              <div className="text-xs text-gray-500">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </div>
            </div>
          )}

          {mode === 'demo' && (
            <div className="mt-6 text-center">
              <div className="text-xs text-gray-500">
                Demo requests are typically approved within 24 hours
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;