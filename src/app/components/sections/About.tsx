'use client';

import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Satisfied Clients', value: '30+' },
  ];

  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-600 mb-6">
              I am a passionate Full Stack Developer with 5+ years of experience in creating
              modern web applications. My journey in web development started with a
              curiosity about how websites work, which led me to dive deep into
              various technologies and frameworks.
            </p>
            <p className="text-gray-600">
              I specialize in building scalable web applications using modern
              technologies like React, Next.js, Node.js, and various databases. I'm
              always eager to learn new technologies and stay up-to-date with the
              latest trends in web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-white p-6 rounded-lg shadow-lg ${
                  index === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 