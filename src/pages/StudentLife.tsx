import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Trophy, Star, Code, Zap, Heart, Music, Coffee, Globe, Award, Play, Calendar, MapPin, Filter, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';

const achievements = [
  {
    name: "Aisha Sharma",
    batch: "Class of 2025",
    title: "Global Hackathon Winner",
    desc: "Secured 1st place at the MIT Reality Hack for developing an AR-based surgical assistance tool.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    cert: "MIT Reality Hack 2024 - Grand Prize"
  },
  {
    name: "Rahul Verma",
    batch: "Class of 2024",
    title: "Google Women Techmakers Scholar",
    desc: "Awarded the prestigious scholarship for outstanding contributions to open-source AI projects.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
    cert: "Google Tech Scholar 2024"
  },
  {
    name: "Team Innovators",
    batch: "Robotics Club",
    title: "NASA Space Apps Challenge",
    desc: "Global Nominees for designing a deployable lunar habitat using origami-inspired folding techniques.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    cert: "NASA Global Nominee 2023"
  }
];

const eventCategories = ["All", "Academic", "Cultural", "Sports", "Workshop", "Seminar"];

const upcomingEvents = [
  {
    id: 1,
    title: "IMPERIA '26 - Annual Cultural Fest",
    date: "2026-03-15",
    category: "Cultural",
    description: "The biggest cultural extravaganza featuring EDM nights, battle of bands, and 50+ inter-college competitions.",
    location: "Main Amphitheater",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Global AI Summit 2026",
    date: "2026-03-22",
    category: "Academic",
    description: "A 2-day summit featuring keynote speakers from top tech companies discussing the future of Artificial Intelligence.",
    location: "Auditorium Block B",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Inter-University Sports Meet",
    date: "2026-04-05",
    category: "Sports",
    description: "Annual sports competition with over 20 universities participating in athletics, basketball, and football.",
    location: "University Sports Complex",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Web3 & Blockchain Workshop",
    date: "2026-03-10",
    category: "Workshop",
    description: "Hands-on workshop on building decentralized applications and smart contracts using Solidity.",
    location: "Innovation Lab 3",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Entrepreneurship Seminar: Zero to One",
    date: "2026-03-28",
    category: "Seminar",
    description: "Learn how to build a startup from scratch. Guest lecture by successful alumni founders.",
    location: "Seminar Hall A",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Spring Art Exhibition",
    date: "2026-04-12",
    category: "Cultural",
    description: "Showcasing the finest artwork, sculptures, and digital art created by our fine arts students.",
    location: "Creative Arts Gallery",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "National Robotics Championship",
    date: "2026-04-20",
    category: "Academic",
    description: "Watch autonomous robots battle it out in the arena. Teams from across the country compete for the grand prize.",
    location: "Indoor Stadium",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Design Thinking Workshop",
    date: "2026-03-18",
    category: "Workshop",
    description: "An interactive session on applying design thinking principles to solve complex engineering problems.",
    location: "Design Studio",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function StudentLife() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const filteredEvents = upcomingEvents.filter(event => 
    activeCategory === "All" ? true : event.category === activeCategory
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white overflow-hidden"
    >
      {/* Immersive Hero Section */}
      <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-royal-navy/50 to-royal-navy z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60 mix-blend-screen"
            poster="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
          >
            {/* Simulated video background using a high-quality campus life image as fallback */}
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" alt="Campus Life Drone Shot" className="w-full h-full object-cover" />
          </video>
        </motion.div>

        {/* 3D Floating Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "100vh", x: Math.random() * window.innerWidth, rotate: 0 }}
              animate={{ 
                y: "-20vh", 
                x: Math.random() * window.innerWidth,
                rotate: 360 
              }}
              transition={{ 
                duration: 15 + Math.random() * 20, 
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10
              }}
              className="absolute w-16 h-16 bg-gradient-to-tr from-royal-gold/20 to-transparent rounded-xl backdrop-blur-md border border-white/10"
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <span className="inline-block px-6 py-2 border border-white/20 rounded-full text-white text-sm font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-md bg-white/5">
              Experience The Extraordinary
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-royal-gold-light to-white mb-6">
              Living the <br /> <span className="italic font-light">Best Life.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/80 text-xl md:text-2xl font-light leading-relaxed">
              Beyond classrooms. Beyond textbooks. A vibrant ecosystem where passion meets opportunity.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] mb-2">Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-royal-gold to-transparent" />
        </motion.div>
      </section>

      {/* Campus Life Bento Grid */}
      <section className="py-32 bg-royal-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-royal-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">A Campus That Never Sleeps</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">From late-night coding sessions in the innovation lab to impromptu jam sessions at the amphitheater, life here is a continuous celebration of youth and creativity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Large Feature */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=2070&auto=format&fit=crop" alt="Cultural Fest" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center mb-4 text-royal-navy">
                  <Music size={24} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-2">IMPERIA: The Annual Fest</h3>
                <p className="text-white/70 max-w-md">The largest cultural festival in the region, attracting over 20,000 footfalls, featuring international artists, EDM nights, and 50+ events.</p>
              </div>
            </motion.div>

            {/* Small Feature 1 */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="rounded-3xl overflow-hidden relative group cursor-pointer bg-gradient-to-br from-blue-900 to-royal-navy border border-white/10 p-8 flex flex-col justify-between"
            >
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400">
                <Code size={20} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">24/7 Hackerspace</h3>
                <p className="text-white/60 text-sm">Fully equipped labs open round the clock for those midnight sparks of genius.</p>
              </div>
            </motion.div>

            {/* Small Feature 2 */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="rounded-3xl overflow-hidden relative group cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=2000&auto=format&fit=crop" alt="Sports" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-serif font-bold mb-1">Olympic-grade Sports</h3>
                <p className="text-white/70 text-sm">40-acre sports complex.</p>
              </div>
            </motion.div>

            {/* Wide Feature */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 rounded-3xl overflow-hidden relative group cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070&auto=format&fit=crop" alt="Graduation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 max-w-lg">
                <div className="w-10 h-10 bg-royal-gold rounded-full flex items-center justify-center mb-4 text-royal-navy">
                  <Heart size={20} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2">Premium Residences</h3>
                <p className="text-white/70 text-sm">Air-conditioned suites, high-speed Wi-Fi, multi-cuisine dining, and vibrant common rooms that feel like home.</p>
              </div>
            </motion.div>

            {/* Small Feature 3 */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="rounded-3xl overflow-hidden relative group cursor-pointer bg-royal-gold p-8 flex flex-col justify-between text-royal-navy"
            >
              <div className="w-10 h-10 bg-royal-navy/10 rounded-full flex items-center justify-center">
                <Coffee size={20} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Café Culture</h3>
                <p className="text-royal-navy/70 text-sm">7 distinct cafes and food courts serving global cuisines.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Event Calendar */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Mark Your Calendar</span>
              <h2 className="text-4xl md:text-5xl font-serif text-royal-navy">Upcoming Events</h2>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {eventCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category 
                      ? 'bg-royal-navy text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Event (First in filtered list) */}
            {filteredEvents.length > 0 && (
              <motion.div 
                layoutId={`event-${filteredEvents[0].id}`}
                className="lg:col-span-2 rounded-3xl overflow-hidden relative group h-[500px]"
              >
                <img 
                  src={filteredEvents[0].image} 
                  alt={filteredEvents[0].title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-navy via-royal-navy/40 to-transparent" />
                
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 text-center min-w-[80px] shadow-lg">
                  <span className="block text-royal-gold font-bold text-sm uppercase">{new Date(filteredEvents[0].date).toLocaleString('default', { month: 'short' })}</span>
                  <span className="block text-3xl font-serif text-royal-navy">{new Date(filteredEvents[0].date).getDate()}</span>
                </div>

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-royal-gold text-royal-navy text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {filteredEvents[0].category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-3">{filteredEvents[0].title}</h3>
                  <p className="text-white/80 max-w-2xl mb-4 line-clamp-2">{filteredEvents[0].description}</p>
                  <div className="flex items-center gap-4 text-white/60 text-sm">
                    <div className="flex items-center gap-1"><MapPin size={16} /> {filteredEvents[0].location}</div>
                    <div className="flex items-center gap-1"><Calendar size={16} /> {new Date(filteredEvents[0].date).toLocaleDateString()}</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Other Events List */}
            <div className="flex flex-col gap-4 h-[500px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
              <AnimatePresence mode="popLayout">
                {filteredEvents.slice(1).map((event) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={event.id}
                    className="bg-gray-50 rounded-2xl p-4 flex gap-4 border border-gray-100 hover:border-royal-gold/30 hover:shadow-md transition-all group cursor-pointer shrink-0"
                  >
                    <div className="bg-white rounded-xl p-3 text-center min-w-[70px] h-fit shadow-sm border border-gray-100 group-hover:border-royal-gold/50 transition-colors">
                      <span className="block text-royal-gold font-bold text-xs uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                      <span className="block text-2xl font-serif text-royal-navy">{new Date(event.date).getDate()}</span>
                    </div>
                    
                    <div className="flex-1">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">{event.category}</span>
                      <h4 className="text-lg font-serif text-royal-navy mb-1 group-hover:text-royal-gold transition-colors">{event.title}</h4>
                      <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                        <MapPin size={12} /> {event.location}
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
                {filteredEvents.length === 1 && (
                   <div className="h-full flex items-center justify-center text-gray-400 text-sm italic">
                     No more events in this category.
                   </div>
                )}
                {filteredEvents.length === 0 && (
                  <div className="h-full flex items-center justify-center text-gray-400 text-sm italic">
                    No events found for this category.
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Hall of Fame</span>
            <h2 className="text-4xl md:text-5xl font-serif text-royal-navy mb-6">Student Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our students consistently prove their mettle on global platforms, bringing laurels to the institution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achieve, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={achieve.image} 
                    alt={achieve.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-royal-navy flex items-center gap-1 shadow-sm">
                    <Trophy size={12} className="text-royal-gold" /> Winner
                  </div>
                </div>
                <div className="p-8 relative">
                  {/* Certificate Badge */}
                  <div className="absolute -top-8 right-8 w-16 h-16 bg-royal-navy rounded-full border-4 border-white flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform">
                    <Award className="text-royal-gold" size={24} />
                  </div>
                  
                  <span className="text-royal-gold text-xs font-bold uppercase tracking-wider mb-2 block">{achieve.batch}</span>
                  <h3 className="text-2xl font-serif text-royal-navy mb-1">{achieve.name}</h3>
                  <h4 className="text-sm font-bold text-gray-800 mb-4">{achieve.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {achieve.desc}
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center gap-3">
                    <Star className="text-royal-gold shrink-0" size={16} fill="currentColor" />
                    <span className="text-xs font-medium text-gray-700">{achieve.cert}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* World's Best Projects */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Innovation Showcase</span>
              <h2 className="text-4xl md:text-5xl font-serif text-royal-navy">World-Class Projects</h2>
            </div>
            <p className="text-gray-600 max-w-md text-sm md:text-base">
              Groundbreaking research and prototypes developed entirely by our undergraduate and postgraduate students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => navigate(`/student-life/projects/${project.id}`)}
                className="relative p-1 rounded-2xl bg-gradient-to-br hover:shadow-2xl transition-shadow duration-500 group cursor-pointer"
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              >
                {/* The gradient border effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-100 transition-opacity blur-sm`} />
                
                <div className="relative h-full bg-white rounded-xl p-8 md:p-10 z-10 flex flex-col justify-between">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-gradient-to-r ${project.color} text-white`}>
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-serif text-royal-navy mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-royal-navy group-hover:to-royal-gold transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {project.shortDesc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-royal-navy font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                    View Project Details <Globe size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-royal-navy text-center px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Ready to live your best life?</h2>
        <Link 
          to="/admissions"
          className="inline-block px-10 py-5 gold-gradient text-royal-navy font-bold rounded-sm hover:scale-105 transition-transform shadow-[0_0_40px_rgba(197,160,89,0.4)] text-lg mb-12"
        >
          APPLY NOW FOR 2026
        </Link>
        
        <div className="max-w-2xl mx-auto pt-12 border-t border-white/10">
          <ShieldCheck className="w-8 h-8 text-royal-gold mx-auto mb-4" />
          <h3 className="text-xl font-serif text-white mb-2">Student Welfare & Compliance</h3>
          <p className="text-white/60 text-sm mb-6">
            We prioritize the safety and well-being of our students. Our campus operates in strict adherence to UGC and AICTE guidelines, including zero tolerance for ragging.
          </p>
          <Link to="/disclosures" className="text-royal-gold text-sm font-bold uppercase tracking-widest hover:text-white transition-colors underline underline-offset-4">
            View Mandatory Disclosures
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
