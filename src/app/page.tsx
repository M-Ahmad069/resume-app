'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Check, 
  Star, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Menu,
  X
} from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import TiltCard from '@/components/TiltCard';
import FloatingElement from '@/components/FloatingElement';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  // const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState({
    name: "Muhammad Ahmad",
    title: "Software Engineer",
    email: "m.ahmad@email.com",
    phone: "+92 310 6113103",
    experience: "5+ years",
    skills: ["React", "Node.js", "TypeScript", "AWS"]
  });

  const testimonials = [
    {
      text: "This resume builder helped me land my dream job at Google! The AI suggestions were spot-on and the templates are professional.",
      author: "Mary Johnson",
      role: "CEO & Founder",
      rating: 5
    },
    {
      text: "I got 3 job interviews in just one week after using this tool. The ATS optimization really works!",
      author: "John Smith",
      role: "Software Engineer",
      rating: 5
    },
    {
      text: "The templates are beautiful and the AI writing assistance saved me hours. Highly recommended!",
      author: "Sarah Davis",
      role: "Marketing Manager",
      rating: 5
    }
  ];

  // const templates = [
  //   { id: 1, name: "Classic", color: "bg-gray-800" },
  //   { id: 2, name: "Modern", color: "bg-red-600" },
  //   { id: 3, name: "Creative", color: "bg-purple-600" }
  // ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/ month",
      features: [
        "Download CV as PDF",
        "AI-generated Cover Letters",
        "Up to 10 Job Fit Checks",
        "Career Path Suggestions (Monthly)",
        "Smart Job Matches (Monthly)",
        "Mentor AI Chat - Light Daily Access"
      ],
      buttonText: "Start Free",
      buttonStyle: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:border-blue-700 shadow-md cursor-pointer",
      popular: false
    },
    {
      name: "Standard",
      price: "$4.99",
      period: "/ month",
      features: [
        "Download CV as PDF & DOCX",
        "AI-generated Cover Letters",
        "Up to 20 Job Fit Checks",
        "More Career Path Suggestions (Monthly)",
        "More Smart Job Matches (Monthly)",
        "Mentor AI Chat - Standard Access"
      ],
      buttonText: "Choose Standard",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer",
      popular: true
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/ month",
      features: [
        "Download CV as PDF & DOCX",
        "AI-generated Cover Letters",
        "Up to 40 Job Fit Checks",
        "Full Career Path Insights (Monthly)",
        "Advanced Job Matching (Monthly)",
        "Mentor AI Chat - Full Access"
      ],
      buttonText: "Go Pro",
      buttonStyle: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:border-blue-700 shadow-md cursor-pointer",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden scroll-snap-container">
      {/* Custom Cursor */}
      <CustomCursor />
      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full glass-card-strong z-50 border-b border-gray-700/50 shadow-glass-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          background: 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* AI Flag Logo */}
              <motion.div 
                className="relative will-change-transform"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-8 h-6 sm:w-10 sm:h-8 bg-gradient-blue rounded-sm flex items-center justify-center shadow-glow"
                  whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}
                >
                  <span className="text-white font-bold text-xs sm:text-sm">AI</span>
                </motion.div>
                {/* Flag pole */}
                <div className="absolute -left-1 top-0 w-1 h-6 sm:h-8 bg-gray-400"></div>
              </motion.div>
              <span className="text-lg sm:text-xl font-bold text-white">Resume Builder</span>
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <motion.nav 
              className="hidden lg:flex items-center space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { href: "#home", text: "Home" },
                { href: "#preview", text: "Live Preview" },
                { href: "#about", text: "About us" },
                { href: "#how-it-works", text: "How It Works" },
                { href: "#templates", text: "Template" },
                { href: "#pricing", text: "Pricing" },
                { href: "#testimonials", text: "Testimonials" }
              ].map((link, index) => (
                <motion.a 
                  key={link.href}
                  href={link.href} 
                  className="text-sm xl:text-base text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative cursor-pointer underline-animation"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    y: -3,
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {link.text}
                </motion.a>
              ))}
            </motion.nav>

            {/* Login Button */}
            <motion.button 
              className="bg-gradient-blue text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base cursor-pointer shadow-glow will-change-transform"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 12px 35px rgba(37, 99, 235, 0.5)",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/login'}
            >
              Login
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button 
              className="lg:hidden ml-2 sm:ml-4 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{ 
              height: isMenuOpen ? "auto" : 0,
              opacity: isMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <motion.div 
              className="py-4 border-t border-gray-700"
              initial={{ y: -20 }}
              animate={{ y: isMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-3 sm:space-y-4">
                {[
                  { href: "#home", text: "Home" },
                  { href: "#preview", text: "Live Preview" },
                  { href: "#about", text: "About us" },
                  { href: "#how-it-works", text: "How It Works" },
                  { href: "#templates", text: "Template" },
                  { href: "#pricing", text: "Pricing" },
                  { href: "#testimonials", text: "Testimonials" }
                ].map((link, index) => (
                  <motion.a 
                    key={link.href}
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </motion.a>
                ))}
                <motion.button 
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit text-sm sm:text-base cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, scale: isMenuOpen ? 1 : 0.8 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/login'}
                >
                  Login
                </motion.button>
              </nav>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
        <section id="home" className="scroll-snap-section pt-14 sm:pt-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
          {/* Particle Background */}
          <div className="absolute inset-0 z-0">
            <ParticleBackground className="w-full h-full" />
          </div>
          
          {/* Animated Background Company Names */}
          <div className="absolute inset-0 opacity-10 z-0">
            <motion.div 
              className="absolute top-20 left-10 text-2xl font-bold text-gray-400"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Google
            </motion.div>
            <motion.div 
              className="absolute top-32 right-20 text-xl font-bold text-gray-400"
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              Microsoft
            </motion.div>
            <motion.div 
              className="absolute bottom-40 left-20 text-xl font-bold text-gray-400"
              animate={{ 
                y: [0, -8, 0],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              Amazon
            </motion.div>
            <motion.div 
              className="absolute bottom-20 right-10 text-2xl font-bold text-gray-400"
              animate={{ 
                y: [0, 12, 0],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              Meta
            </motion.div>
            <motion.div 
              className="absolute top-40 left-1/2 text-xl font-bold text-gray-400"
              animate={{ 
                y: [0, -6, 0],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              Netflix
            </motion.div>
          </div>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-16 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
               <FloatingElement duration={3} delay={0}>
                 <div className="inline-flex items-center px-4 py-2 glass-button rounded-full text-sm font-medium shadow-glow">
                   Use AI to advance your career
                 </div>
               </FloatingElement>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-blue leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Create Job-Winning Resumes in Minutes.
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Use the power of AI to build, format, and export a professional resume with ease - no design skills needed.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                 <motion.button 
                   className="bg-gradient-blue text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer shadow-glow-lg will-change-transform"
                   whileHover={{ 
                     scale: 1.08,
                     boxShadow: "0 15px 35px rgba(37, 99, 235, 0.5)",
                     y: -3
                   }}
                   whileTap={{ scale: 0.95 }}
                   transition={{ type: "spring", stiffness: 300 }}
                 >
                   Get Started Free
                 </motion.button>
                <motion.button 
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-50 hover:border-blue-700 transition-all duration-300 cursor-pointer shadow-glow will-change-transform"
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: "0 15px 35px rgba(37, 99, 235, 0.3)",
                    y: -3
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Watch How It Works
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Illustration */}
            <TiltCard 
              className="relative"
              options={{ max: 10, scale: 1.02 }}
            >
              <FloatingElement duration={4} delay={0.5}>
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-glow-xl">
                  <img 
                    src="\images\Rectangle 19475 (1).png" 
                    alt="Person working on resume with laptop" 
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Overlay elements */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/10"></div>
                </div>
              </FloatingElement>
            </TiltCard>
          </div>
          
          {/* Trust Logos in Hero Section */}
          <motion.div 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex justify-center items-center space-x-6 sm:space-x-8 lg:space-x-12 flex-wrap gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { 
                  name: "Google", 
                  logo: (
                    <div className="w-32 h-32 flex items-center justify-center">
                      <span className="text-5xl font-bold">
                        <span className="text-blue-500">G</span>
                        <span className="text-red-500">o</span>
                        <span className="text-yellow-500">o</span>
                        <span className="text-blue-500">g</span>
                        <span className="text-green-500">l</span>
                        <span className="text-red-500">e</span>
                      </span>
                    </div>
                  )
                },
                { 
                  name: "Microsoft", 
                  logo: (
                    <img 
                      src="/images/Microsoft-removebg-preview.png" 
                      alt="Microsoft" 
                      className="w-32 h-32 object-contain"
                      loading="lazy"
                    />
                  )
                },
                { 
                  name: "Amazon", 
                  logo: (
                    <img 
                      src="/images/Amazon.png" 
                      alt="Amazon" 
                      className="w-32 h-32 object-contain"
                      loading="lazy"
                    />
                  )
                },
                { 
                  name: "Meta", 
                  logo: (
                    <img 
                      src="/images/Facebook Meta.png" 
                      alt="Meta" 
                      className="w-32 h-32 object-contain"
                      loading="lazy"
                    />
                  )
                },
                { 
                  name: "Netflix", 
                  logo: (
                    <img 
                      src="/images/Netflix Wordmark.png" 
                      alt="Netflix" 
                      className="w-32 h-32 object-contain"
                      loading="lazy"
                    />
                  )
                }
              ].map((company, index) => (
                <FloatingElement 
                  key={company.name}
                  duration={3 + index * 0.5}
                  delay={index * 0.3}
                  intensity={15}
                >
                  <motion.div 
                    className="flex items-center justify-center will-change-transform"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.1,
                      transition: { 
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }}
                  >
                    <div className="relative glass-card p-4 rounded-xl">
                      {company.logo}
                    </div>
                  </motion.div>
                </FloatingElement>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Live Preview Section */}
      <motion.section 
        id="preview"
        className="scroll-snap-section py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FileText className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              See Your Resume Come to Life
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Watch as our AI transforms your information into a professional resume in real-time. 
              No waiting, no guessing - see exactly what recruiters will see.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Input Form */}
            <TiltCard 
              options={{ max: 8, scale: 1.02 }}
              className="will-change-transform"
            >
              <FloatingElement duration={4} delay={0.2}>
                <motion.div 
                  className="glass-card-strong rounded-3xl p-6 sm:p-8 lg:p-10 shadow-glass-lg"
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)",
                    transition: { duration: 0.3 }
                  }}
                >
              <motion.div
                className="flex items-center mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Enter Your Details</h3>
              </motion.div>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  { key: 'name', label: 'Full Name', placeholder: 'Enter your full name', type: 'text' },
                  { key: 'title', label: 'Job Title', placeholder: 'e.g., Software Engineer', type: 'text' },
                  { key: 'email', label: 'Email', placeholder: 'your.email@example.com', type: 'email' },
                  { key: 'phone', label: 'Phone', placeholder: '+1 (555) 123-4567', type: 'tel' },
                  { key: 'experience', label: 'Experience', placeholder: 'e.g., 5+ years', type: 'text' },
                  { key: 'skills', label: 'Skills (comma separated)', placeholder: 'React, Node.js, TypeScript, AWS', type: 'text', isSkills: true }
                ].map((field, index) => (
                  <motion.div
                    key={field.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-bold text-gray-300 mb-2 sm:mb-3">{field.label}</label>
                    <input
                      type={field.type}
                      value={field.isSkills ? previewData.skills.join(", ") : previewData[field.key as keyof typeof previewData]}
                      onChange={(e) => {
                        if (field.isSkills) {
                          setPreviewData({...previewData, skills: e.target.value.split(", ").filter(s => s.trim())});
                        } else {
                          setPreviewData({...previewData, [field.key]: e.target.value});
                        }
                      }}
                      className="w-full px-3 py-3 sm:px-4 sm:py-4 border-2 border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 bg-gray-800/80 hover:bg-gray-800 hover:shadow-glow text-white placeholder-gray-400 text-base sm:text-lg font-medium will-change-transform"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}
              </div>
                </motion.div>
              </FloatingElement>
            </TiltCard>

            {/* Live Preview */}
            <TiltCard 
              options={{ max: 8, scale: 1.02 }}
              className="relative will-change-transform"
            >
              <FloatingElement duration={4} delay={0.4}>
                <motion.div 
                  className="glass-card-strong rounded-3xl p-6 sm:p-8 lg:p-10 shadow-glass-lg"
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                <motion.div 
                  className="flex items-center justify-between mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Live Preview</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-4 h-4 bg-red-500 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-4 h-4 bg-yellow-500 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div 
                      className="w-4 h-4 bg-green-500 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                  </div>
                </motion.div>
                
                {/* Resume Preview */}
                <motion.div 
                  className="bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 min-h-[500px] sm:min-h-[600px] border border-gray-700"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="text-center mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">{previewData.name}</h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-blue-600 font-semibold">{previewData.title}</p>
                  </motion.div>
                  
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-xl font-bold text-white mb-4 border-b-2 border-blue-600 pb-2">Contact Information</h2>
                      <div className="space-y-3 text-base">
                        <p><span className="font-semibold text-gray-300">Email:</span> <span className="text-white">{previewData.email}</span></p>
                        <p><span className="font-semibold text-gray-300">Phone:</span> <span className="text-white">{previewData.phone}</span></p>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-xl font-bold text-white mb-4 border-b-2 border-blue-600 pb-2">Professional Summary</h2>
                      <p className="text-base text-gray-300 leading-relaxed">
                        Experienced {previewData.title.toLowerCase()} with {previewData.experience} of expertise in modern technologies. 
                        Proven track record of delivering high-quality solutions and collaborating effectively with cross-functional teams.
                      </p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-xl font-bold text-white mb-4 border-b-2 border-blue-600 pb-2">Technical Skills</h2>
                    <div className="flex flex-wrap gap-3">
                      {previewData.skills.map((skill, index) => (
                        <motion.span 
                          key={index}
                          className="bg-gradient-blue text-white px-4 py-2 rounded-full text-base font-semibold shadow-glow shimmer will-change-transform"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.15,
                            boxShadow: "0 8px 20px rgba(37, 99, 235, 0.5)",
                            y: -3,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="mt-8 flex space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  <motion.button 
                    className="flex-1 bg-gradient-blue text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-glow-lg cursor-pointer will-change-transform"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.5)",
                      y: -3
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Download PDF
                  </motion.button>
                  <motion.button 
                    className="flex-1 bg-white text-blue-600 border-2 border-blue-600 py-4 px-6 rounded-xl font-bold text-lg hover:bg-blue-50 hover:border-blue-700 transition-all duration-300 shadow-glow cursor-pointer will-change-transform"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
                      y: -3
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Share Link
                  </motion.button>
                </motion.div>
                </motion.div>
              </FloatingElement>
            </TiltCard>
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <section id="about" className="scroll-snap-section py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Left Image */}
            <TiltCard 
              options={{ max: 10, scale: 1.02 }}
              className="relative will-change-transform"
            >
              <FloatingElement duration={4} delay={0.3}>
                <motion.div 
                  className="relative h-[500px] rounded-3xl overflow-hidden shadow-glow-xl"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src="/images/Rectangle 19476.png" 
                    alt="Woman working on laptop with resume elements" 
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                    {/* Second Image Overlay */}
                    <FloatingElement duration={3} delay={0.5} intensity={15}>
                      <motion.div 
                        className="absolute -bottom-24 right-0 w-96 h-112 glass-card p-4 rounded-2xl"
                        animate={{ 
                          y: [0, -15, 0],
                          rotate: [0, 3, -3, 0]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <img 
                          src="/images/Rectangle 19477.png" 
                          alt="UI elements overlay" 
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </motion.div>
                    </FloatingElement>
                </motion.div>
              </FloatingElement>
            </TiltCard>

            {/* Right Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-sm text-blue-600 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                About Us
              </motion.div>
              <motion.h2 
                className="text-4xl font-bold gradient-text-blue"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our mission is to help you get hired faster.
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                We believe everyone deserves a professional resume that showcases their true potential. Our AI-powered platform makes it easy to create stunning resumes that get noticed by recruiters and pass through ATS systems.
              </motion.p>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  "Simple, not complicated",
                  "Fast & efficient", 
                  "Designed for real people",
                  "Proven CV templates to increase Hiring Chance"
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        delay: 0.8 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                      className="animate-bounce-in"
                    >
                      <Check className="h-5 w-5 text-green-500 shadow-glow" />
                    </motion.div>
                    <span className="text-gray-300 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button 
                className="bg-gradient-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer shadow-glow-lg will-change-transform"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: "0 15px 35px rgba(37, 99, 235, 0.5)",
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="scroll-snap-section py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <motion.div 
            className="space-y-6 sm:space-y-8 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              How It Works
            </motion.div>
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Easy Steps To Build your Resume.
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Just 3 Simple Steps to Get Your Dream Resume.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              {
                step: "1",
                title: "Enter Your Details",
                description: "Add education, experience, and skills\nSimple, guided forms – no confusion"
              },
              {
                step: "2", 
                title: "Let AI Write & Format",
                description: "AI writes your content professionally\nChoose from 20+ templates"
              },
              {
                step: "3",
                title: "Download or Share",
                description: "Export as PDF or share a link\nReady to send to recruiters instantly"
              }
            ].map((item, index) => (
              <TiltCard 
                key={index}
                options={{ max: 12, scale: 1.05 }}
                className="text-center space-y-4 will-change-transform"
              >
                <FloatingElement 
                  duration={3 + index * 0.3}
                  delay={index * 0.2}
                  intensity={12}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-blue text-white rounded-lg flex items-center justify-center text-2xl font-bold mx-auto shadow-glow-lg"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -10, 10, 0],
                        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.6)",
                        transition: { duration: 0.3 }
                      }}
                      animate={{ 
                        y: [0, -8, 0],
                        transition: { 
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }
                      }}
                    >
                      {item.step}
                    </motion.div>
                <motion.h3 
                  className="text-xl font-semibold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>
                    <motion.p 
                      className="text-gray-300 whitespace-pre-line"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </FloatingElement>
              </TiltCard>
            ))}
          </motion.div>

          <FloatingElement duration={3} delay={0.5}>
            <motion.button 
              className="bg-gradient-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer shadow-glow-xl will-change-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 20px 40px rgba(37, 99, 235, 0.5)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            >
              Build my resume now
            </motion.button>
          </FloatingElement>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="scroll-snap-section py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
          <motion.div 
            className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-sm text-blue-600 font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Professional Templates
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Choose from our diverse collection.
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Professional templates designed to highlight your strengths and catch the recruiters eye. Each template is optimized for ATS systems and crafted with care.
            </motion.p>
          </motion.div>

          <div className="relative">
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { id: 1, name: "Classic", image: "Image [w-full].png" },
                 { id: 2, name: "Modern", image: "Image [w-full] (1).png" },
                 { id: 3, name: "Creative", image: "Image [w-full] (2).png" }
               ].map((template, index) => (
                 <TiltCard 
                   key={template.id}
                   options={{ max: 15, scale: 1.08 }}
                   className="relative will-change-transform"
                 >
                   <FloatingElement 
                     duration={3 + index * 0.4}
                     delay={index * 0.3}
                     intensity={15}
                   >
                     <motion.div 
                       initial={{ opacity: 0, y: 50 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8, delay: index * 0.2 }}
                       viewport={{ once: true }}
                       className="relative group"
                       whileHover={{ 
                         y: -12,
                         transition: { duration: 0.3 }
                       }}
                     >
                       <div className="glass-card-strong rounded-2xl overflow-hidden shadow-glow-xl">
                         <img 
                           src={`/images/${template.image}`}
                           alt={`${template.name} Resume Template`}
                           className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                           loading="lazy"
                         />
                        {/* Template overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <motion.button 
                            className="w-full bg-gradient-blue text-white py-3 px-4 rounded-lg font-semibold cursor-pointer shadow-glow-lg will-change-transform"
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: "0 10px 25px rgba(37, 99, 235, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Use This Template
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                   </FloatingElement>
                 </TiltCard>
              ))}
            </div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FloatingElement duration={3} delay={0.3}>
              <motion.button 
                className="bg-gradient-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer shadow-glow-xl will-change-transform"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.5)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
              >
                Browse all templates
              </motion.button>
            </FloatingElement>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="scroll-snap-section py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Pricing Plans
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Pricing Plans for Every <span className="gradient-text-blue">Career Stage</span>.
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We have the perfect plan to help you showcase your professional value.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <TiltCard 
                key={plan.name}
                options={{ max: 10, scale: 1.05 }}
                className={`relative will-change-transform ${plan.popular ? 'z-10' : ''}`}
              >
                <FloatingElement 
                  duration={3 + index * 0.3}
                  delay={index * 0.2}
                  intensity={12}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`glass-card-strong rounded-2xl p-8 relative cursor-pointer transition-all duration-300 shadow-glass-lg ${plan.popular ? 'ring-2 ring-blue-600 shadow-glow-xl animate-glow-pulse' : ''}`}
                    whileHover={{ 
                      y: -10,
                      scale: 1.03,
                      boxShadow: plan.popular 
                        ? "0 30px 60px rgba(37, 99, 235, 0.4)"
                        : "0 25px 50px rgba(0, 0, 0, 0.15)"
                    }}
                  >
                    {plan.popular && (
                      <FloatingElement duration={2} delay={0}>
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                          <motion.div 
                            className="bg-gradient-blue text-white px-4 py-1 rounded-full text-sm font-medium shadow-glow"
                            animate={{ 
                              scale: [1, 1.05, 1],
                              transition: { duration: 2, repeat: Infinity }
                            }}
                          >
                            Most Popular
                          </motion.div>
                        </div>
                      </FloatingElement>
                    )}
                
                <div className="text-center space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ 
                              type: "spring",
                              stiffness: 200,
                              delay: index * 0.2 + featureIndex * 0.1
                            }}
                            viewport={{ once: true }}
                          >
                            <Check className="h-5 w-5 text-green-500 shadow-glow" />
                          </motion.div>
                          <span className="text-gray-300 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button 
                      className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 will-change-transform ${plan.popular ? 'bg-gradient-blue text-white shadow-glow-lg' : plan.buttonStyle}`}
                      whileHover={{ 
                        scale: 1.08,
                        boxShadow: plan.popular 
                          ? "0 15px 35px rgba(37, 99, 235, 0.5)"
                          : "0 15px 35px rgba(0, 0, 0, 0.15)",
                        y: -3
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      onClick={() => window.location.href = '/signup'}
                    >
                      {plan.buttonText}
                    </motion.button>
                  </div>
                </motion.div>
                </FloatingElement>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="scroll-snap-section py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-sm text-blue-600 font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Career Transformation Stories
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              What Our Users Say.
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Real Stories from Job Seekers Who Got Hired.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Left Illustration */}
            <TiltCard 
              options={{ max: 10, scale: 1.02 }}
              className="relative will-change-transform"
            >
              <FloatingElement duration={4} delay={0.3}>
                <motion.div 
                  className="relative h-[500px] rounded-3xl overflow-hidden shadow-glow-xl"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src="/images/Rectangle 19478.png" 
                    alt="Person celebrating success with laptop" 
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </motion.div>
              </FloatingElement>
            </TiltCard>

            {/* Right Testimonial */}
            <FloatingElement duration={3} delay={0.4}>
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="glass-card-strong rounded-2xl p-8 shadow-glass-lg"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)",
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                >
                <div className="space-y-6">
                  <motion.div 
                    className="text-4xl text-blue-600"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                  </motion.div>
                  <motion.p 
                    className="text-lg text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {testimonials[currentTestimonial].text}
                  </motion.p>
                  <motion.div 
                    className="flex items-center space-x-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 200,
                          delay: 1.0 + i * 0.1 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.3 }
                        }}
                      >
                        <Star className="h-5 w-5 text-yellow-400 fill-current shadow-glow" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    viewport={{ once: true }}
                  >
                    <img 
                      src="/images/Rectangle 19478.png" 
                      alt="Profile picture" 
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonials[currentTestimonial].author}</div>
                      <div className="text-gray-300">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

                {/* Testimonial Navigation */}
                <motion.div 
                  className="flex justify-center space-x-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 will-change-transform ${
                        index === currentTestimonial ? 'bg-gradient-blue shadow-glow' : 'bg-gray-300'
                      }`}
                      whileHover={{ 
                        scale: 1.4,
                        boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      animate={index === currentTestimonial ? {
                        scale: [1, 1.2, 1],
                        transition: { duration: 2, repeat: Infinity }
                      } : {}}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </FloatingElement>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="scroll-snap-section relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 overflow-hidden">
        {/* Particle Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-30">
          <ParticleBackground className="w-full h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
          <motion.div 
            className="grid md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Logo and Description */}
            <div className="space-y-4 glass-card-strong rounded-2xl p-6">
              <div className="flex items-center space-x-2">
                <FileText className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold text-white">Resume Builder</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Create professional resumes with AI-powered assistance. Get hired faster with our proven templates and tools.
              </p>
               <motion.div 
                 className="flex space-x-4"
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true }}
               >
                 <FloatingElement duration={3} delay={0}>
                   <motion.div 
                     className="w-10 h-10 bg-gradient-blue rounded-full flex items-center justify-center cursor-pointer shadow-glow will-change-transform"
                     whileHover={{ 
                       scale: 1.2,
                       rotate: [0, -15, 15, 0],
                       boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                       transition: { duration: 0.3 }
                     }}
                     whileTap={{ scale: 0.9 }}
                   >
                     <Facebook className="h-5 w-5 text-white" />
                   </motion.div>
                 </FloatingElement>
                 <FloatingElement duration={3} delay={0.2}>
                   <motion.div 
                     className="w-10 h-10 bg-gradient-blue rounded-full flex items-center justify-center cursor-pointer shadow-glow will-change-transform"
                     whileHover={{ 
                       scale: 1.2,
                       rotate: [0, -15, 15, 0],
                       boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                       transition: { duration: 0.3 }
                     }}
                     whileTap={{ scale: 0.9 }}
                   >
                     <Instagram className="h-5 w-5 text-white" />
                   </motion.div>
                 </FloatingElement>
                 <FloatingElement duration={3} delay={0.4}>
                   <motion.div 
                     className="w-10 h-10 bg-gradient-blue rounded-full flex items-center justify-center cursor-pointer shadow-glow will-change-transform"
                     whileHover={{ 
                       scale: 1.2,
                       rotate: [0, -15, 15, 0],
                       boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                       transition: { duration: 0.3 }
                     }}
                     whileTap={{ scale: 0.9 }}
                   >
                     <Linkedin className="h-5 w-5 text-white" />
                   </motion.div>
                 </FloatingElement>
                 <FloatingElement duration={3} delay={0.6}>
                   <motion.div 
                     className="w-10 h-10 bg-gradient-blue rounded-full flex items-center justify-center cursor-pointer shadow-glow will-change-transform"
                     whileHover={{ 
                       scale: 1.2,
                       rotate: [0, -15, 15, 0],
                       boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                       transition: { duration: 0.3 }
                     }}
                     whileTap={{ scale: 0.9 }}
                   >
                     <div className="w-5 h-5 bg-white rounded"></div>
                   </motion.div>
                 </FloatingElement>
               </motion.div>
            </div>

            {/* Product Links */}
            <div className="space-y-4 glass-card-strong rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white">Product</h3>
              <div className="space-y-2">
                <a href="#templates" className="block text-gray-300 hover:text-blue-400 transition-colors">Templates</a>
                <a href="#pricing" className="block text-gray-300 hover:text-blue-400 transition-colors">Pricing</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Give Feedback</a>
              </div>
            </div>

            {/* Resources Links */}
            <div className="space-y-4 glass-card-strong rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Blog</a>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-4 glass-card-strong rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Terms</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Privacy</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="border-t border-gray-700/50 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300">© 2023 Resume Builder. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
