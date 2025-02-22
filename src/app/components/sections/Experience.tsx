'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: 'Lead developer for multiple high-traffic web applications. Implemented microservices architecture and improved system performance by 40%.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2019 - 2021',
      description: 'Developed and maintained various web applications. Collaborated with cross-functional teams to deliver projects on time.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Agency',
      period: '2018 - 2019',
      description: 'Created responsive and interactive web interfaces. Worked closely with designers to implement pixel-perfect designs.',
      technologies: ['React', 'JavaScript', 'SASS', 'Redux'],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in web development, where I've had the opportunity
            to work with amazing teams and create impactful solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>

                {/* Content */}
                <div className="ml-6 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {experience.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{experience.company}</p>
                    <p className="text-gray-500 text-sm mb-4">{experience.period}</p>
                    <p className="text-gray-600 mb-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 