import React from 'react';
import { ArrowLeft, Trophy, Target, Users, Heart, Lightbulb, Rocket, Mail } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
}

export default function About({ onBack }: AboutProps) {
  const teamValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission-Driven",
      description: "Making exam preparation enjoyable and rewarding for every student",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Student-First",
      description: "Every feature is designed with student success and engagement in mind",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Combining gaming psychology with educational excellence",
      color: "from-pink-500 to-orange-500"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "The Beginning",
      description: "Started with a simple idea: make learning as addictive as gaming"
    },
    {
      year: "2024",
      title: "First Beta",
      description: "Launched beta version with 1000+ questions across CBSE curriculum"
    },
    {
      year: "2025",
      title: "Growing Strong",
      description: "10,000+ quizzes answered, 500+ rewards distributed"
    },
    {
      year: "Future",
      title: "Expanding Horizons",
      description: "Adding more boards, competitive exams, and exciting features"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl mb-6">
              <Trophy className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">About Learn & Earn</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing education by making exam preparation as engaging as your favorite mobile game
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-8 rounded-2xl">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                "To transform the way students prepare for exams by combining the excitement of gaming with the effectiveness of structured learning. We believe that when education is fun, students naturally excel."
              </p>
            </div>
          </div>

          {/* The Problem & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">!</span>
                </div>
                The Problem
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Students find exam preparation boring and stressful</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Traditional learning apps lack engagement and motivation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Gaming apps are addictive but don't build real skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Parents worry about screen time without educational value</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                Our Solution
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Gamified learning that makes studying addictive</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real rewards that motivate continuous learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Curriculum-aligned content that builds actual knowledge</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Parent-friendly platform with transparent progress tracking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamValues.map((value, index) => (
                <div key={index} className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500">
                  <div className={`bg-gradient-to-br ${value.color} p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Journey */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
              <p className="text-lg text-gray-600">From idea to impact - here's how we're changing education</p>
            </div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              To become India's leading educational gaming platform, where every student looks forward to studying and every parent feels confident about their child's screen time.
            </p>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
              <p className="text-lg">
                <span className="font-semibold">Goal:</span> Reach 1 million students by 2026 and make exam preparation the most exciting part of their day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}