import React, { useState } from 'react';
import { supabase } from './lib/supabase';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import About from './components/About';
import Contact from './components/Contact';
import { 
  Play, 
  Trophy, 
  Gift, 
  BookOpen, 
  Users, 
  Star, 
  ChevronDown, 
  Mail, 
  Shield,
  Zap,
  Target,
  Award,
  Download,
  Brain,
  BarChart3,
  CheckCircle
} from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'about' | 'contact'>('home');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          setSubmitError('This email is already on our waitlist!');
        } else {
          setSubmitError('Something went wrong. Please try again.');
        }
      } else {
        setWaitlistSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learn",
      description: "Play quizzes from your textbooks & past exam papers",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Score", 
      description: "Earn XP, coins, and streaks for correct answers",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Win",
      description: "Redeem your points for exciting coupons, gift cards, and more",
      color: "from-pink-500 to-orange-600"
    }
  ];

  const appFeatures = [
    {
      icon: <Play className="w-6 h-6" />,
      title: "Gamified Learning",
      description: "Daily quizzes, missions, and tournaments"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leaderboards & Tournaments", 
      description: "Compete with friends, classmates, and across India"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Earn Real Rewards",
      description: "Cashbacks, vouchers, and scholarships"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Tutor Assistance",
      description: "Instant hints & explanations for wrong answers"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Progress Reports",
      description: "Insights for parents to track performance"
    }
  ];

  const rewards = [
    "Amazon & Flipkart vouchers",
    "Stationery, learning resources, and scholarships", 
    "Badges, avatars, and in-app power-ups",
    "Partner rewards from top brands"
  ];

  const trustPoints = [
    "100% Safe & Educational",
    "Curriculum-aligned (NCERT, CBSE, ICSE, JEE/NEET)", 
    "No gambling. Purely merit-based rewards",
    "Designed for students 12–18 years old"
  ];

  const faqs = [
    {
      question: "Is this gambling?",
      answer: "No. This is a merit-based academic app — students earn rewards by answering syllabus-based questions."
    },
    {
      question: "How do rewards work?",
      answer: "Earn coins & XP by playing quizzes → Redeem them for coupons, vouchers, or in-app upgrades."
    },
    {
      question: "Is the app free?", 
      answer: "Yes, with optional premium features for bigger rewards & advanced analytics."
    },
    {
      question: "Which grades & boards are supported?",
      answer: "Currently Grades 9–12 (CBSE/ICSE). More boards & competitive exams coming soon."
    }
  ];

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'about') {
    return <About onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'contact') {
    return <Contact onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
        
        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg rotate-12 shadow-xl animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-full shadow-xl animate-float-delayed opacity-60"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg -rotate-12 shadow-xl animate-float opacity-60"></div>
          <div className="absolute bottom-60 right-10 w-14 h-14 bg-gradient-to-br from-green-400 to-blue-400 rounded-full shadow-xl animate-float-delayed opacity-60"></div>
        </div>

        <div className="container mx-auto px-6 text-center z-10">
          <div className="mb-8">
            <div className="inline-block p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl mb-6 transform hover:scale-105 transition-transform duration-300">
              <Trophy className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6 animate-fade-in">
            Play. Learn. Win.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            India's first exam-prep game where learning your syllabus earns you <span className="text-purple-600 font-semibold">real rewards</span>
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Answer questions from your textbooks, prepare for exams, and win exciting rewards & coupons.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Download on Google Play
            </button>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-purple-200 hover:border-purple-300">
              Join Beta Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${feature.color} p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
                  <div className="text-white mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Why Choose Learn & Earn?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The perfect balance of education, entertainment, and rewards</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border-2 border-transparent hover:border-purple-200">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Unlike Pure Gaming Apps</h3>
              <p className="text-gray-600 text-lg mb-4">This builds real skills</p>
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-xl">
                <p className="text-sm text-gray-700">Every question is curriculum-aligned and helps you master your subjects while having fun.</p>
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border-2 border-transparent hover:border-green-200">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Unlike Boring EdTech Apps</h3>
              <p className="text-gray-600 text-lg mb-4">This gives instant gratification</p>
              <div className="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-xl">
                <p className="text-sm text-gray-700">Immediate rewards, XP points, and exciting challenges keep you motivated to learn more.</p>
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border-2 border-transparent hover:border-orange-200">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Unlike Gambling Apps</h3>
              <p className="text-gray-600 text-lg mb-4">This is parent-friendly & curriculum-backed</p>
              <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-xl">
                <p className="text-sm text-gray-700">100% educational content with transparent, merit-based rewards that parents can trust.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to make learning fun, rewarding, and effective</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Amazing Rewards</h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">Redeem your coins for incredible prizes and experiences</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.map((reward, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Gift className="w-8 h-8 text-yellow-400 mb-4 mx-auto" />
                <p className="text-white font-medium">{reward}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 max-w-2xl mx-auto">
            <p className="text-purple-100 text-lg">
              <span className="text-yellow-400 font-semibold">Supported by partner brands:</span><br />
              Amazon • Flipkart • Zomato • And many more coming soon!
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Trust & Safety First</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Parents can trust our platform - designed with safety and education in mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-12">Amazing Results So Far</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-yellow-400 mb-2">10,000+</div>
              <p className="text-blue-100">Quizzes Answered</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <p className="text-blue-100">Rewards Distributed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.8★</div>
              <p className="text-blue-100">App Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Join the Waitlist</h2>
          <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
            Be among the first to experience the future of learning. Get early access and exclusive rewards!
          </p>
          
          {!waitlistSubmitted ? (
            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
              {submitError && (
                <div className="mb-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded-xl">
                  {submitError}
                </div>
              )}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 shadow-xl text-lg focus:ring-4 focus:ring-white/30 focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Joining...' : 'Join Now'}
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 max-w-md mx-auto">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
              <p className="text-orange-100">We'll notify you as soon as the app launches.</p>
            </div>
          )}
          
          <p className="text-orange-100 text-sm mt-6 max-w-lg mx-auto">
            🎁 Early access members get exclusive rewards and premium features for free!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Got questions? We've got answers!</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors duration-300 flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-b-2xl mt-1">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-green-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Start Your Learning Journey Today</h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Transform the way you study. Make learning fun, rewarding, and effective.
          </p>
          
          <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-6 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-4 mx-auto">
            <Download className="w-8 h-8 group-hover:animate-bounce" />
            Download Now on Google Play
            <Zap className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-8">
            <Trophy className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold">Learn & Earn</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-gray-400">
            <button 
              onClick={() => setCurrentPage('about')}
              className="hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => setCurrentPage('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setCurrentPage('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
          
          <p className="text-gray-400">
            © 2025 Learn & Earn. All Rights Reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;