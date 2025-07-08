
import React from 'react';
import { ExternalLink, TrendingUp, Users, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "GrowthSchool Social Revival",
      description: "Brought dead Instagram, LinkedIn & YouTube accounts back to life with viral hooks and community-driven content",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      metrics: ["240K → 580K followers", "Viral content creation", "Cross-platform strategy"],
      role: "Social Media Strategist",
      period: "Dec 2024 – Present"
    },
    {
      title: "Vaquill Brand Scaling",
      description: "Scaled brand engagement by 30% through strategic content pillars and platform-native storytelling",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      metrics: ["30% engagement increase", "Product Hunt launch", "Meta & Google Ads"],
      role: "Creative Strategist",
      period: "Feb 2023 – Nov 2024"
    },
    {
      title: "Meta & Google Ad Creatives",
      description: "Designed high-converting video and static ad creatives for Indian and global markets",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=500&h=300&fit=crop",
      metrics: ["Multi-market targeting", "Video + Static ads", "High conversion rates"],
      role: "Creative Strategist",
      period: "Ongoing"
    },
    {
      title: "Tech Content Writing",
      description: "Wrote developer-focused blogs & docs for YC-backed startups, mastering technical storytelling",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=500&h=300&fit=crop",
      metrics: ["B2B SaaS content", "Technical storytelling", "Developer tooling"],
      role: "Freelance Content Writer",
      period: "Jan 2024 – Mar 2024"
    },
    {
      title: "OPJU TechFest Leadership",
      description: "Convenor role where I raised sponsorships and grew event funding by 15%",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
      metrics: ["15% funding increase", "Sponsorship management", "Event leadership"],
      role: "Convenor",
      period: "University Project"
    },
    {
      title: "Community Building & Engagement",
      description: "Built engaged communities through authentic storytelling and purpose-driven content creation",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      metrics: ["Community growth", "Authentic engagement", "Purpose-driven content"],
      role: "Community Strategist",
      period: "Ongoing"
    }
  ];

  const getIcon = (index: number) => {
    const icons = [TrendingUp, Users, Award];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Here's how I've helped brands grow and communities thrive through strategic content and creative storytelling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="p-2 bg-white/20 backdrop-blur-lg rounded-full">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-400 font-medium">{project.role}</span>
                  <span className="text-xs text-gray-400">{project.period}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-2">
                      <div className="text-purple-400">
                        {getIcon(metricIndex)}
                      </div>
                      <span className="text-xs text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
