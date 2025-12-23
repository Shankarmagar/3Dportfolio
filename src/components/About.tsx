const About = () => {
  return (
    <div id="about" className="pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Software Engineer & Problem Solver</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Software Engineer with expertise in full-stack development. 
              I love creating innovative solutions that solve real-world problems and provide 
              exceptional user experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a strong foundation in modern technologies and a keen eye for detail, 
              I strive to write clean, maintainable code that scales. I'm constantly learning 
              and adapting to new technologies to stay at the forefront of software development.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-white mb-4">Core Skills</h4>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">What I Do</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Full-Stack Web Development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  API Design & Integration
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Database Optimization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cloud Deployment & DevOps
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
              <p className="text-gray-300">
                <span className="font-semibold">Bachelor of Science in Computer Science</span><br/>
                Technology University<br/>
                <span className="text-sm text-gray-400">2019 - 2023</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About