'use client';

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Dummy data
const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Next.js', level: 85 },
  { name: 'TailwindCSS', level: 90 },
];

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    period: '2021 - Present',
    description: 'Led development of multiple web applications using React and Next.js',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Inc',
    period: '2019 - 2021',
    description: 'Developed and maintained full-stack applications using MERN stack',
  },
];

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js and Stripe',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS'],
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'Real-time task management application with team collaboration features',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: '#',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 space-y-32 py-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  )
} 