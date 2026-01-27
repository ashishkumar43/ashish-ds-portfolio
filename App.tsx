
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added missing Code2 import from lucide-react
import { Github, Linkedin, Mail, FileText, Download, Send, MapPin, ChevronRight, ExternalLink, Code2 } from 'lucide-react';
import { NAV_LINKS, PROJECTS, SKILLS, STATS, getIcon } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#030712]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-gradient">Ashish Kumar</a>
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-2 text-sm font-medium nav-link ${activeSection === link.href.slice(1) ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative order-2 md:order-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-pulse"></div>
              <img 
                src="/Ashish_Images.jpg" 
                alt="Ashish Kumar" 
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white/5 hover:grayscale-0 transition-all duration-500 shadow-2xl"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 space-y-6"
          >
            <p className="text-slate-400 font-medium">Hi, I am <span className="text-blue-400">Ashish Kumar</span></p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient">AI & Data Science</span><br />
              <span className="text-slate-200">Engineer</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              B.Tech student specializing in Artificial Intelligence and Data Science at GGSIPU. Building intelligent systems through NLP, Computer Vision, and Machine Learning. Passionate about creating real-world AI solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 rounded-xl bg-gradient-primary text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                <FileText size={18} /> View Resume
              </button>
              <button className="px-8 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold flex items-center gap-2 transition-all">
                <Download size={18} /> Download Resume
              </button>
            </div>
            <div className="flex items-center gap-4 pt-6">
              {[
                { icon: <Github size={20} />, href: '#' },
                { icon: <Linkedin size={20} />, href: '#' },
                { icon: <Code2 size={20} />, href: '#' }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-blue-500/50 transition-all text-slate-400 hover:text-white">
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-blue-400">Me</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A data science enthusiast with a passion for uncovering patterns and building predictive models that drive decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img src="https://picsum.photos/id/180/1200/800" alt="Abstract AI" className="w-full h-auto opacity-80" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-400 leading-relaxed">
                I'm currently pursuing my Bachelor of Technology in Artificial Intelligence and Data Science at University School of Automation and Robotics, GGSIPU, New Delhi (CGPA: 8.7). My journey combines strong academic foundations with hands-on experience in cutting-edge AI technologies.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Through internships at AICTE and research work at my university, I've gained practical experience in NLP applications, computer vision systems, and building production-ready ML models. I specialize in developing end-to-end AI solutions from data preprocessing to model deployment.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                {STATS.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(category.icon, "w-6 h-6")}
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-purple-400">Projects</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A showcase of my data science projects, from machine learning models to interactive dashboards and analytical frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="project-card flex flex-col h-full bg-[#111827] rounded-3xl overflow-hidden border border-white/5 group shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    {getIcon(project.icon || 'code', "w-5 h-5")}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 border-t border-white/5 pt-6">
                    <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                      <Github size={18} /> Code
                    </a>
                    <a href={project.demoUrl} className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink size={18} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-rose-400">Connect</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Interested in collaborating on a data science project or just want to chat about ML and analytics? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  I'm currently looking for internship opportunities and open to collaborating on AI/ML projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</div>
                      <div className="text-slate-200 font-medium">ashishkr54434sa@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Location</div>
                      <div className="text-slate-200 font-medium">New Delhi, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-6">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Github size={20} />, href: '#' },
                    { icon: <Linkedin size={20} />, href: '#' },
                    { icon: <Mail size={20} />, href: '#' }
                  ].map((social, i) => (
                    <a key={i} href={social.href} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-blue-500/50 transition-all">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form className="space-y-6 p-8 rounded-3xl bg-[#111827] border border-white/5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-xl bg-[#030712] border border-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email</label>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-[#030712] border border-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Message</label>
                  <textarea 
                    rows={6} 
                    placeholder="Type your message here..."
                    className="w-full px-5 py-4 rounded-xl bg-[#030712] border border-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-gradient-primary text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2025 Ashish Kumar. Built with React & Motion.
          </p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all z-50">
        <span className="text-xs">?</span>
      </button>
    </div>
  );
};

export default App;
