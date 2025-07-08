
import React from 'react';
import { TrendingUp, Users, Target, Quote } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth-Focused",
      description: "Scaling brand engagement by 30% through strategic content pillars and platform-native storytelling"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Builder",
      description: "Grew niche communities around tech and education by using relatable, mission-driven stories — not trends for the sake of trends"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Conversion-Driven",
      description: "Designed ad creatives (video + static) for Meta & Google Ads targeting both Indian and global markets"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm an <strong>Instagram growth strategist</strong> and <strong>short-form video expert</strong> with a passion for making content that moves people. 
              Currently at GrowthSchool, I specialize in <strong>founder branding</strong> and bringing dead social media accounts back to life 
              with viral content that actually converts.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As a <strong>B2B content marketer</strong>, my work spans across Instagram, LinkedIn, and YouTube, where I craft scroll-stopping hooks, 
              interactive reels, and community-driven content. I'm obsessed with content that highlights 
              marginalized voices and sparks conversations around systemic change.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My north star? Economic justice, storytelling with purpose, and scaling education access through content.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                Content Strategy
              </span>
              <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium">
                Viral Hooks
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                Short-form Video
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                Founder Branding
              </span>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-purple-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16">
          <div className="p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30 backdrop-blur-lg max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-white leading-relaxed mb-4">
                  "Stuti's content 5x'd our engagement in 2 months. She just gets what makes an audience stop scrolling."
                </p>
                <div className="text-purple-400 font-medium">— Founder, GrowthSchool</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
