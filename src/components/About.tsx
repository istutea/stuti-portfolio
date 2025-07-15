
import React from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';

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
              I’m a <strong>Social Media Manager</strong> turned <strong>Creative Strategist</strong> with a passion for creating content that not only stops the scroll—but starts conversations. 
              My strength lies in building founder-led brands and reviving social accounts with content that drives both engagement and conversions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              At <strong>Vaquill</strong>, I worked directly with the founder to craft a sharp, purpose-driven personal brand across Instagram and LinkedIn. 
              At <strong>GrowthSchool</strong>, I led content efforts for both the founder’s personal channels and the brand’s main Instagram page—developing a 
              consistent voice, driving community engagement, and building topical, high-performing reels.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My background spans content writing, video ideation, and scriptwriting across Instagram, YouTube, and LinkedIn. Whether it’s structuring a <strong>viral hook</strong>,
               editing a compelling narrative, or turning a founder’s thought leadership into shareable content—I bring both <strong>strategy</strong> and <strong>soul</strong> to the process.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              At the core of my work is a commitment to <strong>storytelling that feels real</strong> . I'm especially drawn to content that challenges systems, centers marginalized voices, and scales access to knowledge.
               Content, for me, is not just about visibility—it’s about <strong>purpose, clarity, and impact.</strong>
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
      </div>
    </section>
  );
};

export default About;
