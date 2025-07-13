import React from 'react';
import { ArrowRight, CheckCircle, BarChart3, Clock, Zap, Users, FileText, Globe, Star, TrendingUp, Shield, Eye, Brain, Network } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onLogin }) => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced machine learning models analyze voting patterns, speeches, and policy decisions to reveal hidden connections and predict political outcomes with unprecedented accuracy.",
      color: "indigo",
      stats: "94% accuracy rate"
    },
    {
      icon: Clock,
      title: "Historical Context Engine", 
      description: "Connect current events to our vast database of historical precedents spanning 200+ years of political data, revealing patterns that shape tomorrow's decisions.",
      color: "emerald",
      stats: "200+ years of data"
    },
    {
      icon: Network,
      title: "Real-time Intelligence",
      description: "Monitor global political movements, sentiment shifts, and policy developments as they happen with our advanced tracking and alert systems.",
      color: "violet",
      stats: "Live updates 24/7"
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Data Aggregation",
      description: "We continuously ingest millions of data points from government APIs, news feeds, social platforms, and historical archives using advanced ETL pipelines.",
      icon: Globe
    },
    {
      number: 2,
      title: "AI Analysis", 
      description: "Our proprietary neural networks analyze sentiment, detect patterns, identify correlations, and compare against historical precedents in real-time.",
      icon: Brain
    },
    {
      number: 3,
      title: "Actionable Intelligence",
      description: "Receive personalized insights through interactive dashboards, predictive reports, and intelligent alerts tailored to your specific interests.",
      icon: TrendingUp
    }
  ];

  const useCases = [
    {
      title: "Investigative Journalists",
      description: "Uncover hidden connections, verify claims instantly, and discover data-driven narratives that others miss.",
      icon: Eye,
      features: ["Real-time fact checking", "Source verification", "Pattern detection"]
    },
    {
      title: "Campaign Strategists", 
      description: "Monitor opponent moves, track sentiment shifts, and optimize messaging with predictive analytics.",
      icon: TrendingUp,
      features: ["Sentiment tracking", "Competitive analysis", "Predictive modeling"]
    },
    {
      title: "Policy Researchers",
      description: "Access structured datasets, conduct quantitative analysis, and publish evidence-based research.",
      icon: BarChart3,
      features: ["Historical datasets", "Statistical tools", "Research APIs"]
    },
    {
      title: "Engaged Citizens",
      description: "Cut through media bias, understand policy implications, and make informed democratic choices.",
      icon: Users,
      features: ["Bias detection", "Policy impact analysis", "Voting guides"]
    }
  ];

  const testimonials = [
    {
      quote: "OTI has revolutionized how we approach political reporting. The historical context feature alone has saved us countless hours of research.",
      author: "Sarah Chen",
      role: "Senior Political Correspondent",
      organization: "Global News Network",
      avatar: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      quote: "The predictive accuracy is remarkable. We've been able to anticipate policy shifts weeks before they become public knowledge.",
      author: "Dr. Michael Rodriguez",
      role: "Political Science Professor",
      organization: "Stanford University",
      avatar: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      quote: "As a campaign manager, OTI gives us the competitive edge we need. The sentiment analysis is incredibly sophisticated.",
      author: "Emily Thompson",
      role: "Campaign Director",
      organization: "Progressive Action PAC",
      avatar: "https://images.pexels.com/photos/5668840/pexels-photo-5668840.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    }
  ];

  const stats = [
    { value: "50M+", label: "Data Points Analyzed", icon: BarChart3 },
    { value: "200+", label: "Years of Historical Data", icon: Clock },
    { value: "94%", label: "Prediction Accuracy", icon: TrendingUp },
    { value: "24/7", label: "Real-time Monitoring", icon: Eye }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      indigo: 'from-indigo-500 to-blue-600',
      emerald: 'from-emerald-500 to-teal-600', 
      violet: 'from-violet-500 to-purple-600'
    };
    return colors[color as keyof typeof colors];
  };

  const getIconBg = (color: string) => {
    const colors = {
      indigo: 'bg-indigo-100 text-indigo-600',
      emerald: 'bg-emerald-100 text-emerald-600', 
      violet: 'bg-violet-100 text-violet-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Enhanced Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <svg width="40" height="40" viewBox="0 0 80 80" className="drop-shadow-sm">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#1D4ED8" />
                    <stop offset="100%" stopColor="#1E40AF" />
                  </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="35" fill="url(#logoGradient)" opacity="0.1"/>
                <g transform="translate(40, 40)">
                  <circle cx="0" cy="0" r="4" fill="url(#logoGradient)"/>
                  <circle cx="-15" cy="-10" r="2.5" fill="#3B82F6" opacity="0.8"/>
                  <circle cx="15" cy="-10" r="2.5" fill="#3B82F6" opacity="0.8"/>
                  <circle cx="-15" cy="10" r="2.5" fill="#3B82F6" opacity="0.8"/>
                  <circle cx="15" cy="10" r="2.5" fill="#3B82F6" opacity="0.8"/>
                  <circle cx="-20" cy="0" r="2" fill="#10B981" opacity="0.7"/>
                  <circle cx="20" cy="0" r="2" fill="#10B981" opacity="0.7"/>
                  <line x1="0" y1="0" x2="-15" y2="-10" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6"/>
                  <line x1="0" y1="0" x2="15" y2="-10" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6"/>
                  <line x1="0" y1="0" x2="-15" y2="10" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6"/>
                  <line x1="0" y1="0" x2="15" y2="10" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6"/>
                  <ellipse cx="0" cy="0" rx="18" ry="12" fill="none" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.4"/>
                </g>
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                OTI
              </div>
              <div className="text-xs text-gray-500 font-medium">Political Intelligence</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">How It Works</a>
            <a href="#use-cases" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Use Cases</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Testimonials</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={onLogin}
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              Sign In
            </button>
            <button 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Request Demo
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Enhanced Design */}
      <main>
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 500+ Organizations Worldwide
              </div>
              
              <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                The Future of
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Political Intelligence
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                Harness the power of AI to decode political patterns, predict outcomes, and gain unprecedented insights into the forces shaping our world.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                <button 
                  onClick={onGetStarted}
                  className="group bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={onGetStarted}
                  className="group bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-indigo-100 hover:border-indigo-200"
                >
                  Watch Demo
                  <Eye className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl mb-3">
                        <Icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section id="features" className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Powered by Advanced AI
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Unlock Political Intelligence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with comprehensive data analysis to provide insights that were previously impossible to obtain.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-indigo-200">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${getIconBg(feature.color)}`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-indigo-600">{feature.stats}</span>
                        <ArrowRight className="w-5 h-5 text-indigo-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced How It Works */}
        <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">How OTI Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our three-step process transforms raw political data into actionable intelligence using advanced AI and machine learning.
              </p>
            </div>
            
            <div className="relative max-w-6xl mx-auto">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-200 via-blue-200 to-purple-200 transform -translate-y-1/2 rounded-full"></div>
              
              <div className="grid lg:grid-cols-3 gap-12 relative">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="text-center relative">
                      <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-full mb-6 shadow-2xl">
                        <Icon className="w-10 h-10" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Use Cases */}
        <section id="use-cases" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Built for Professionals</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From newsrooms to campaign headquarters, OTI empowers decision-makers with the insights they need to succeed.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Trusted by Leaders</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how organizations worldwide are using OTI to gain competitive advantages and make better decisions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-indigo-600">{testimonial.organization}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Political Intelligence?</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-10">
              Join thousands of professionals who rely on OTI for critical insights and competitive advantages in the political landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={onGetStarted}
                className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                Start Your Free Trial
              </button>
              <button 
                onClick={onGetStarted}
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <svg width="40" height="40" viewBox="0 0 80 80">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                  </defs>
                  <circle cx="40" cy="40" r="35" fill="url(#footerLogoGradient)" opacity="0.2"/>
                  <g transform="translate(40, 40)">
                    <circle cx="0" cy="0" r="4" fill="white"/>
                    <circle cx="-15" cy="-10" r="2.5" fill="white" opacity="0.8"/>
                    <circle cx="15" cy="-10" r="2.5" fill="white" opacity="0.8"/>
                    <circle cx="-15" cy="10" r="2.5" fill="white" opacity="0.8"/>
                    <circle cx="15" cy="10" r="2.5" fill="white" opacity="0.8"/>
                    <line x1="0" y1="0" x2="-15" y2="-10" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                    <line x1="0" y1="0" x2="15" y2="-10" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                    <line x1="0" y1="0" x2="-15" y2="10" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                    <line x1="0" y1="0" x2="15" y2="10" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                    <ellipse cx="0" cy="0" rx="18" ry="12" fill="none" stroke="white" strokeWidth="1" opacity="0.4"/>
                  </g>
                </svg>
                <div>
                  <div className="text-2xl font-bold">OTI</div>
                  <div className="text-sm text-gray-400">Political Intelligence</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering informed decision-making through advanced political intelligence and AI-driven insights.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              &copy; 2025 OTI, Inc. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;