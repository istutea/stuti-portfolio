
import React from 'react';
import { ArrowDown, Instagram, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="text-2xl text-purple-400 font-medium">I'm</div>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Stuti
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I transform{' '}
              <span className="text-purple-400 font-semibold">social media accounts into audience magnets</span>
              {' '}— with content that captivates, educates, and converts.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Currently elevating GrowthSchool's Instagram, YouTube, and LinkedIn — one viral hook at a time.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-purple-400">+340K</div>
              <div className="text-sm text-gray-300">Followers in 5 Months</div>
            </div>
            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-pink-400">30%</div>
              <div className="text-sm text-gray-300">Engagement Growth</div>
            </div>
            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-blue-400">2x</div>
              <div className="text-sm text-gray-300">Ad CTR Improvement</div>
            </div>
            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-green-400">15%</div>
              <div className="text-sm text-gray-300">Sponsorship Uplift</div>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/istutipriv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <Instagram className="w-6 h-6 text-white group-hover:text-pink-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/stuti-pathak-b40a001a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:stutipathak1111@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              See My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
