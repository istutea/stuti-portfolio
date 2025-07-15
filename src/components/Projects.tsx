import React, { useState } from 'react';
import { ExternalLink, TrendingUp, Users, Award, Play, Eye } from 'lucide-react';
import ReelsModal from './ReelsModal';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Updated reels data with actual Instagram links
  const projectReels = {
    growthschool: [
      {
        id: '1',
        title: 'Instagram Growth Strategy',
        embedUrl: 'https://www.instagram.com/reel/DGiRLlhzAiV/embed'
      },
      {
        id: '2',
        title: 'Viral Content Creation',
        embedUrl: 'https://www.instagram.com/reel/DGnj5SFTTXl/embed'
      },
      {
        id: '3',
        title: 'Community Engagement',
        embedUrl: 'https://www.instagram.com/reel/DHQurXAS70w/embed'
      },
      {
        id: '4',
        title: 'Cross-Platform Strategy',
        embedUrl: 'https://www.instagram.com/reel/DJ52r1ou8sM/embed'
      }
    ],
    vaibhav: [
      {
        id: '1',
        title: 'Growth Strategy Implementation',
        embedUrl: 'https://www.instagram.com/reel/DIdwtewRyGt/embed'
      },
      {
        id: '2',
        title: 'Content Optimization',
        embedUrl: 'https://www.instagram.com/reel/DGVmlHxTNhb/embed'
      },
      {
        id: '3',
        title: 'Engagement Tactics',
        embedUrl: 'https://www.instagram.com/reel/DFh6LrGiCQs/embed'
      },
      {
        id: '4',
        title: 'Follower Acquisition',
        embedUrl: 'https://www.instagram.com/reel/DFXl7-wTu6T/embed'
      },
      {
        id: '5',
        title: 'Analytics & Insights',
        embedUrl: 'https://www.instagram.com/reel/DFP2hrFzHhy/embed'
      },
      {
        id: '6',
        title: 'Content Performance',
        embedUrl: 'https://www.instagram.com/reel/DEyvSJVzxv6/embed'
      },
      {
        id: '7',
        title: 'Strategic Growth',
        embedUrl: 'https://www.instagram.com/reel/DEw83TJT3tX/embed'
      }
    ]
  };

  const projects = [
    {
      id: 'growthschool',
      title: "Creative Strategy at GS",
      description: "Brought dormant Instagram, LinkedIn & YouTube accounts back to life with viral hooks and community-driven content",
      image: "images/Growthschool_Project_logo.png",
      metrics: ["240K → 580K followers", "Viral content creation", "Cross-platform strategy"],
      role: "Social Media Strategist",
      period: "Dec 2024 – Present",
      type: "Instagram Campaign",
      preview: "📱 IG Carousel Series",
      hasReels: true
    },
    {
      id: 'vaibhav',
      title: "Vaibhav Sisinty's Instagram Growth",
      description: "Scaled Vaibhav Sisinty's Instagram profile from 200K to 700K+ through strategic content and engagement optimization",
      image: "images/vaibhav_sisinty_log.jpg",
      metrics: ["200K → 700K+ followers", "Strategic content planning", "High engagement rates"],
      role: "Growth Strategist",
      period: "Ongoing",
      type: "Instagram Growth",
      preview: "📈 Growth Strategy",
      hasReels: true
    },
    {
      id: 'vaquill',
      title: "Vaquill Brand Scaling",
      description: "Scaled brand engagement by 30% through strategic content pillars and platform-native storytelling",
      image: "images/vaquill_logo.jpeg",
      metrics: ["30% engagement increase", "Product Hunt launch", "Meta & Google Ads"],
      role: "Creative Strategist",
      period: "Feb 2023 – Nov 2024",
      type: "Brand Campaign",
      preview: "🎥 Video Ad Creative",
      hasReels: false,
      link: "https://docs.google.com/document/d/1ETBZrHLBrhCJ4flcBRM45o3206DCEe836VARDW5PmgI/edit?usp=sharing"
    },
    {
      id: 'meta-google',
      title: "Meta & Google Ad Creatives",
      description: "Designed high-converting video and static ad creatives for Indian and global markets",
      image: "images/meta_google_ads_logo.png",
      metrics: ["Multi-market targeting", "2x CTR improvement", "High conversion rates"],
      role: "Creative Strategist",
      period: "Ongoing",
      type: "Ad Creative",
      preview: "📊 Performance Overlay",
      hasReels: false,
      link: "https://docs.google.com/document/d/1gx2cOWrbqJg2T8OAlPnWKcy8UJbaHwTckTr2sNtxQ34/edit?usp=sharing"
    }
  ];

  const handleProjectClick = (project: any) => {
    if (project.hasReels) {
      setSelectedProject(project);
      setModalOpen(true);
    } else if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  const getIcon = (index: number) => {
    const icons = [TrendingUp, Users, Award];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-5 h-5" />;
  };

  const getPreviewIcon = (type: string) => {
    switch (type) {
      case 'Instagram Campaign':
      case 'Video Ad Creative':
        return <Play className="w-4 h-4" />;
      case 'Performance Overlay':
        return <Eye className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <>
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
                className={`group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105 ${
                  project.hasReels || project.link ? 'cursor-pointer' : ''
                }`}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Preview Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white">
                    {getPreviewIcon(project.type)}
                    <span>{project.preview}</span>
                  </div>

                  {/* Reels indicator for clickable projects */}
                  {project.hasReels && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                      View Reels
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="p-2 bg-white/20 backdrop-blur-lg rounded-full">
                      {project.hasReels ? <Play className="w-5 h-5 text-white" /> : <ExternalLink className="w-5 h-5 text-white" />}
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

      {/* Reels Modal */}
      {selectedProject && (
        <ReelsModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          projectTitle={selectedProject.title}
          reels={projectReels[selectedProject.id as keyof typeof projectReels] || []}
        />
      )}
    </>
  );
};

export default Projects;
