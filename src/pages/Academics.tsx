import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Cpu, 
  Settings, 
  LineChart, 
  Target, 
  Layers, 
  Briefcase, 
  Award, 
  Library, 
  Calendar, 
  FileText, 
  ArrowRight 
} from 'lucide-react';

const departments = [
  {
    name: "School of Computer Science & AI",
    description: "Pioneering research in Artificial Intelligence, Machine Learning, and Quantum Computing.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    stats: "100% Placement | 4 Centers of Excellence"
  },
  {
    name: "School of Electronics & Communication",
    description: "Advancing VLSI design, IoT, and next-generation 6G communication networks.",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    stats: "NBA Accredited | Advanced Robotics Lab"
  },
  {
    name: "School of Mechanical & Automation",
    description: "Focusing on mechatronics, sustainable manufacturing, and electric vehicle technology.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    stats: "Industry 4.0 Ready | 3D Printing Hub"
  },
  {
    name: "School of Management Studies",
    description: "Developing future business leaders with a strong foundation in tech-driven management.",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    stats: "Harvard Case Methodology | Global Tie-ups"
  }
];

const aicteFramework = [
  {
    title: "Outcome-Based Education (OBE)",
    desc: "Curriculum designed around clearly defined outcomes, ensuring students acquire specific skills and knowledge required by the industry.",
    icon: Target
  },
  {
    title: "Choice Based Credit System (CBCS)",
    desc: "Flexibility to choose interdisciplinary electives, minor specializations, and open courses across different departments.",
    icon: Layers
  },
  {
    title: "Mandatory Internships",
    desc: "Integrated industry internships and project work as per AICTE guidelines to bridge the gap between academia and industry.",
    icon: Briefcase
  },
  {
    title: "Continuous Evaluation",
    desc: "A robust assessment system combining practicals, projects, quizzes, and end-semester exams for holistic evaluation.",
    icon: Award
  }
];

export default function Academics() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-royal-navy overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-royal-gold/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 border border-royal-gold/30 rounded-full text-royal-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-royal-gold/5">
                Academic Excellence
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                Rigorous. <br />
                <span className="italic text-royal-gold">Innovative.</span> <br />
                Impactful.
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
                Our curriculum is designed to challenge conventions, foster critical thinking, and prepare students for the complexities of the modern technological landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/undergraduate-programs" className="px-8 py-4 gold-gradient text-royal-navy font-bold rounded-sm hover:scale-105 transition-transform inline-block">
                  EXPLORE PROGRAMS
                </Link>
                <Link to="/academic-calendar" className="px-8 py-4 border border-white/20 text-white font-bold rounded-sm hover:bg-white/5 transition-colors inline-block">
                  ACADEMIC CALENDAR
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-full border border-white/10 absolute -inset-8 animate-[spin_60s_linear_infinite]" />
              <div className="aspect-square rounded-full border border-royal-gold/20 absolute -inset-4 animate-[spin_40s_linear_infinite_reverse]" />
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Students collaborating"
                className="w-full h-full object-cover rounded-full aspect-square grayscale hover:grayscale-0 transition-all duration-700 border-8 border-royal-navy shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AICTE Framework Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">AICTE Aligned Curriculum</span>
            <h2 className="text-4xl font-serif text-royal-navy mb-6">The Academic Framework</h2>
            <p className="text-royal-navy/60 text-lg">
              Our academic structure strictly adheres to the All India Council for Technical Education (AICTE) model curriculum, ensuring global standards and industry relevance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aicteFramework.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-royal-navy/5 flex items-center justify-center mb-6 group-hover:bg-royal-navy transition-colors">
                  <item.icon className="text-royal-navy group-hover:text-royal-gold transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-royal-navy mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools of Excellence (Bento Grid) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Departments</span>
              <h2 className="text-4xl md:text-5xl font-serif text-royal-navy">Schools of Excellence</h2>
            </div>
            <Link to="/undergraduate-programs" className="text-royal-navy font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all group">
              View All Departments <ArrowRight size={16} className="text-royal-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={dept.image} 
                  alt={dept.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-navy via-royal-navy/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 group-hover:bg-royal-gold group-hover:border-royal-gold transition-colors">
                    <dept.icon className="text-white group-hover:text-royal-navy" size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-3">{dept.name}</h3>
                  <p className="text-white/70 text-sm md:text-base mb-6 max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {dept.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                    <span className="text-royal-gold text-xs font-bold tracking-widest uppercase">
                      {dept.stats}
                    </span>
                    <ArrowRight className="text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pedagogy / Experiential Learning */}
      <section className="py-24 bg-royal-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                  alt="Lab Work"
                  className="rounded-lg w-full h-64 object-cover mt-8"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team Collaboration"
                  className="rounded-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Pedagogy</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Experiential Learning at its Core.</h2>
              <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
                <p>
                  We believe that engineering and management are not spectator sports. Our pedagogy shifts the focus from traditional lecturing to active, project-based learning.
                </p>
                <ul className="space-y-4 mt-8">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-royal-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-royal-gold rounded-full" />
                    </div>
                    <div>
                      <strong className="text-white block mb-1">Flipped Classrooms</strong>
                      <span className="text-sm">Theory is learned at home; classrooms are reserved for problem-solving and discussions.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-royal-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-royal-gold rounded-full" />
                    </div>
                    <div>
                      <strong className="text-white block mb-1">Industry Co-Taught Modules</strong>
                      <span className="text-sm">20% of the curriculum is delivered directly by industry experts and corporate partners.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-royal-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-royal-gold rounded-full" />
                    </div>
                    <div>
                      <strong className="text-white block mb-1">Capstone Projects</strong>
                      <span className="text-sm">Mandatory final-year projects solving real-world problems, often funded by government grants.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Resources & Quick Links */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-royal-navy mb-4">Academic Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to navigate your academic journey successfully.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/library-resources" className="bg-white p-8 rounded-xl border border-gray-200 hover:border-royal-gold hover:shadow-lg transition-all group text-center block">
              <Library className="mx-auto text-royal-navy mb-4 group-hover:text-royal-gold transition-colors" size={40} />
              <h3 className="text-xl font-serif font-bold text-royal-navy mb-2">Central Library</h3>
              <p className="text-gray-500 text-sm mb-4">Access over 100,000 physical volumes and millions of digital IEEE/Springer journals.</p>
              <span className="text-royal-gold text-xs font-bold uppercase tracking-widest">Access Portal</span>
            </Link>
            
            <Link to="/academic-calendar" className="bg-white p-8 rounded-xl border border-gray-200 hover:border-royal-gold hover:shadow-lg transition-all group text-center block">
              <Calendar className="mx-auto text-royal-navy mb-4 group-hover:text-royal-gold transition-colors" size={40} />
              <h3 className="text-xl font-serif font-bold text-royal-navy mb-2">Academic Calendar</h3>
              <p className="text-gray-500 text-sm mb-4">Important dates for semesters, examinations, holidays, and college events.</p>
              <span className="text-royal-gold text-xs font-bold uppercase tracking-widest">View Calendar</span>
            </Link>

            <Link to="/disclosures" className="bg-white p-8 rounded-xl border border-gray-200 hover:border-royal-gold hover:shadow-lg transition-all group text-center block">
              <FileText className="mx-auto text-royal-navy mb-4 group-hover:text-royal-gold transition-colors" size={40} />
              <h3 className="text-xl font-serif font-bold text-royal-navy mb-2">Rules & Regulations</h3>
              <p className="text-gray-500 text-sm mb-4">Detailed guidelines on attendance, grading system, and academic integrity.</p>
              <span className="text-royal-gold text-xs font-bold uppercase tracking-widest">Download PDF</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
