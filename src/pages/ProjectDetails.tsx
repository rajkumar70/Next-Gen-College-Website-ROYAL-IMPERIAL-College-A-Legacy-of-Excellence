import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Target, Lightbulb, Cpu, Users, Calendar, BarChart3, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-20">
        <h1 className="text-4xl font-serif text-royal-navy mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8">The project you are looking for does not exist or has been removed.</p>
        <button 
          onClick={() => navigate('/student-life')}
          className="px-6 py-3 bg-royal-navy text-white rounded-md hover:bg-royal-navy/90 transition-colors"
        >
          Return to Student Life
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-end pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link 
            to="/student-life" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium uppercase tracking-wider"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-gradient-to-r ${project.color} text-white shadow-lg`}>
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl leading-relaxed font-light">
              {project.shortDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left Column: Main Narrative */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Overview */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif text-royal-navy mb-6 flex items-center gap-3">
                  <Target className="text-royal-gold" /> Project Overview
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {project.overview}
                </p>
              </motion.div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
                >
                  <h3 className="text-xl font-serif text-royal-navy mb-4 flex items-center gap-2">
                    <Lightbulb className="text-red-500" size={20} /> The Problem
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-royal-navy/5 p-8 rounded-2xl border border-royal-navy/10"
                >
                  <h3 className="text-xl font-serif text-royal-navy mb-4 flex items-center gap-2">
                    <Lightbulb className="text-emerald-500" size={20} /> The Solution
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.solution}
                  </p>
                </motion.div>
              </div>

              {/* Technologies */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif text-royal-navy mb-6 flex items-center gap-3">
                  <Cpu className="text-royal-gold" /> Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm hover:border-royal-gold hover:text-royal-navy transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Milestones */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif text-royal-navy mb-8 flex items-center gap-3">
                  <Calendar className="text-royal-gold" /> Project Timeline
                </h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                  {project.milestones.map((milestone, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-royal-gold text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-royal-navy text-lg">{milestone.title}</h4>
                          <span className="text-xs font-bold text-royal-gold uppercase tracking-wider">{milestone.date}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif text-royal-navy mb-6 flex items-center gap-3">
                  <ImageIcon className="text-royal-gold" /> Media Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((img, i) => (
                    <div key={i} className={`rounded-2xl overflow-hidden shadow-sm ${i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}>
                      <img src={img} alt={`Gallery ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              
              {/* Impact Metrics */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-royal-navy text-white p-8 rounded-3xl shadow-xl"
              >
                <h3 className="text-2xl font-serif mb-6 flex items-center gap-2">
                  <BarChart3 className="text-royal-gold" /> Impact & Results
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {project.impactMetrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-3xl font-light text-royal-gold mb-1">{metric.value}</div>
                      <div className="text-xs font-bold uppercase tracking-wider text-white/60">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Team Members */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
              >
                <h3 className="text-2xl font-serif text-royal-navy mb-6 flex items-center gap-2">
                  <Users className="text-royal-gold" /> The Team
                </h3>
                <div className="space-y-6">
                  {project.team.map((member, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <div>
                        <h4 className="font-bold text-royal-navy">{member.name}</h4>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-royal-gold to-yellow-600 p-8 rounded-3xl text-royal-navy text-center"
              >
                <h3 className="text-2xl font-serif font-bold mb-4">Interested in this research?</h3>
                <p className="text-royal-navy/80 mb-6 text-sm">
                  Our innovation labs are always looking for passionate students and industry partners.
                </p>
                <button className="w-full py-3 bg-royal-navy text-white rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-black transition-colors flex items-center justify-center gap-2">
                  Get Involved <ExternalLink size={16} />
                </button>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
