
import React, { useState, useEffect } from 'react';

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
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "React", level: 85, color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700" },
    { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
    { name: "Python", level: 75, color: "from-green-500 to-green-700" },
    { name: "CSS/Tailwind", level: 90, color: "from-purple-400 to-purple-600" },
    { name: "MongoDB", level: 70, color: "from-green-600 to-green-800" },
    { name: "Git/GitHub", level: 85, color: "from-gray-400 to-gray-600" }
  ];

  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Vue.js", "Angular", "HTML5", "CSS3", "Sass", "Tailwind CSS", "JavaScript", "TypeScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "PHP", "MySQL", "MongoDB", "PostgreSQL", "Redis"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Photoshop", "REST APIs", "GraphQL", "Jest"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Progress Bars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Proficiency</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Categories */}
          <div className="space-y-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium hover:bg-purple-500/30 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
