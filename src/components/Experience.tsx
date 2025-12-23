
const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      location: "Remote",
      description: "Developing scalable web applications using React, Node.js, and cloud technologies. Led the development of a customer management system serving 10,000+ users.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Docker"]
    },
    {
      title: "Software Developer Intern",
      company: "Innovation Labs",
      period: "2022 - 2023",
      location: "San Francisco, CA",
      description: "Contributed to front-end development using React and Redux. Implemented responsive designs and improved application performance by 30%.",
      technologies: ["React", "Redux", "JavaScript", "SCSS", "Git", "Jest"]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency Pro",
      period: "2021 - 2022",
      location: "New York, NY",
      description: "Built and maintained client websites using modern web technologies. Collaborated with design teams to create pixel-perfect implementations.",
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP", "MySQL"]
    }
  ];

  return (
    <div id="experience" className="pt-20 pb-10 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My professional journey in software development, featuring key roles and achievements.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-black border border-gray-700 rounded-lg p-8 hover:border-blue-500 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-xl text-blue-400 mb-2">{exp.company}</h4>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 font-medium">{exp.period}</p>
                  <p className="text-gray-500 text-sm">{exp.location}</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-black border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Career Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
                <p className="text-gray-300">Users Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience