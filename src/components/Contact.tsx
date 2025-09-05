import React, { useState } from 'react';
import { ArrowLeft, Mail, MessageSquare, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  onBack: () => void;
}

export default function Contact({ onBack }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "nitishj639@gmail.com",
      description: "We'll respond within 24 hours",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "General Inquiries",
      content: "admin@pathwise.in",
      description: "For app support and questions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Business Partnerships",
      content: "admin@pathwise.in",
      description: "For brand collaborations and partnerships",
      color: "from-pink-500 to-orange-500"
    }
  ];

  const subjects = [
    "General Inquiry",
    "App Support",
    "Partnership Opportunity",
    "Media & Press",
    "Bug Report",
    "Feature Request",
    "Other"
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
            <div className="inline-block p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl mb-6">
              <Mail className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions, suggestions, or want to partner with us? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500">
                <div className={`bg-gradient-to-br ${info.color} p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-purple-600 font-semibold mb-2">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Office Info */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  Our Office
                </h3>
                <div className="space-y-4">
                  <p className="text-purple-100">
                    <strong>Learn & Earn Technologies</strong><br />
                    Bangalore, Karnataka<br />
                    India
                  </p>
                  <p className="text-purple-100 text-sm">
                    We're a remote-first team building the future of education technology.
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-green-50 rounded-3xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Response Times</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">General Inquiries</span>
                    <span className="text-green-600 font-semibold">24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">App Support</span>
                    <span className="text-green-600 font-semibold">12 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Partnerships</span>
                    <span className="text-green-600 font-semibold">48 hours</span>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-blue-50 rounded-3xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Questions?</h3>
                <p className="text-gray-600 mb-4">
                  Check our FAQ section on the main page for instant answers to common questions.
                </p>
                <button
                  onClick={onBack}
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  View FAQ Section
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}