
import React, { useState, useEffect } from 'react';
import { skillCategories } from '@/lib/skills-data';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Content Strategy & Viral Hooks", color: "from-purple-400 to-purple-600" },
    { name: "Short-form Video (Reels, Shorts, TikTok)", color: "from-pink-400 to-pink-600" },
    { name: "Copywriting that Converts", color: "from-blue-400 to-blue-600" },
    { name: "Brand Building & Community Growth", color: "from-green-400 to-green-600" },
    { name: "Performance Ads (Meta + Google)", color: "from-red-400 to-red-600" }
  ];

  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Zone of Genius</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Core Competencies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Core Competencies</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? '100%' : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Categories */}
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative group">
                      <span
                        className="px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium hover:bg-purple-500/30 transition-colors cursor-default"
                      >
                        {skill.name}
                      </span>
                      <div className="absolute bottom-full mb-2 w-64 p-3 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {skill.description}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-800"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">🎯 What Drives Me</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm obsessed with making content that moves people — especially when it highlights marginalized voices 
              or sparks conversations around systemic change. My north star? Economic justice, storytelling with purpose, 
              and scaling education access through content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
