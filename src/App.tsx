import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Code, Briefcase } from 'lucide-react';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kayra Berk Tuncer</h1>
            <h2 className="text-xl md:text-2xl mb-6">Software Developer</h2>
            <p className="text-lg opacity-90 mb-8">
              I build modern, responsive, and user-friendly web applications with a focus on clean code and great user experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kayrabtuncer@gmail.com" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="aspect-square rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <User size={80} className="text-gray-400" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <User className="mr-2" size={24} /> About Me
              </h2>
              <p className="text-gray-700 mb-4">
                Hello! I'm Kayra, a passionate software developer with expertise in building web applications. 
                I enjoy solving complex problems and creating intuitive user experiences.
              </p>
              <p className="text-gray-700 mb-4">
                With a strong foundation in modern web technologies, I strive to write clean, maintainable code 
                that delivers real value to users and businesses alike.
              </p>
              <p className="text-gray-700">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying outdoor activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Code className="mr-2" size={24} /> Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML/CSS', 'Tailwind CSS', 'Git', 'RESTful APIs'].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-center">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Briefcase className="mr-2" size={24} /> Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'A full-featured online store with product management, cart functionality, and payment processing.',
                tech: ['React', 'Node.js', 'MongoDB']
              },
              {
                title: 'Task Management App',
                description: 'A productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.',
                tech: ['React', 'Firebase', 'Tailwind CSS']
              },
              {
                title: 'Portfolio Website',
                description: 'A responsive portfolio website showcasing projects and skills with a contact form.',
                tech: ['React', 'Tailwind CSS', 'EmailJS']
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Briefcase size={48} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
            <Mail className="mr-2" size={24} /> Contact Me
          </h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Kayra Berk Tuncer. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://github.com" className="hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kayrabtuncer@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;