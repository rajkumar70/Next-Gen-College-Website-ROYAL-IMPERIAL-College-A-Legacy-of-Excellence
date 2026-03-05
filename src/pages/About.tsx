import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Award, BookOpen, Globe, Users, X, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import DocumentaryPlayer from '../components/DocumentaryPlayer';

export default function About() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-royal-navy pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-royal-navy/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop" 
            alt="Historic College Building"
            className="w-full h-full object-cover object-center grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-royal-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our Heritage</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              A Legacy of <span className="italic text-royal-gold">Excellence</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl font-light leading-relaxed">
              Since 1965, Royal Imperial College has been at the forefront of academic innovation, shaping the minds that shape our world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Founding Story */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Beginning</span>
            <h2 className="text-4xl md:text-5xl font-serif text-royal-navy mb-8 leading-tight">Founded on a Vision of Progress.</h2>
            <div className="space-y-6 text-royal-navy/70 text-lg font-light leading-relaxed">
              <p>
                Established in the transformative era of 1965, Royal Imperial College was born from a bold vision: to create an institution where rigorous academic inquiry meets practical innovation. 
              </p>
              <p>
                Our founders, a coalition of visionary educators and civic leaders, recognized the need for a university that didn't just preserve knowledge, but actively created it. They laid the cornerstone of our first building, Heritage Hall, with a commitment to accessible, world-class education.
              </p>
              <p>
                What began as a modest campus with just 300 students and three faculties has blossomed into a globally recognized center of excellence, while remaining true to its founding principles of intellectual curiosity and public service.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?q=80&w=2070&auto=format&fit=crop" 
                alt="Vintage College Archives"
                className="w-full h-full object-cover sepia-[.3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 bg-white p-4 shadow-xl max-w-xs">
                <p className="font-serif text-royal-navy font-bold text-lg mb-1">1965</p>
                <p className="text-xs text-royal-navy/60 uppercase tracking-wider">The Inaugural Class</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-royal-gold" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-royal-gold" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-royal-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Through the Decades</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Watch our journey from a regional college to a global research powerhouse.</p>
          </div>
          
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
            {!isVideoPlaying ? (
              <div 
                className="absolute inset-0 group cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                <img 
                  src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop" 
                  alt="College Video Thumbnail"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-royal-gold/90 rounded-full flex items-center justify-center text-royal-navy group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(197,160,89,0.5)]">
                    <Play size={32} className="ml-2" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-royal-gold text-sm font-bold tracking-widest uppercase mb-2 block">Documentary</span>
                  <h3 className="text-2xl font-serif">The Royal Imperial Story: 1965 - Present</h3>
                </div>
              </div>
            ) : (
              <div className="w-full h-full relative">
                <DocumentaryPlayer onClose={() => setIsVideoPlaying(false)} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Milestones</span>
          <h2 className="text-4xl font-serif text-royal-navy">Moments that Defined Us</h2>
        </div>

        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          
          {/* 1965 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-royal-gold text-royal-navy shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 bg-royal-navy rounded-full" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif font-bold text-xl text-royal-navy">Foundation</h3>
                <span className="text-royal-gold font-bold">1965</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                The college opens its doors with 300 students in the historic Heritage Hall, offering degrees in Arts, Sciences, and Commerce.
              </p>
            </div>
          </div>

          {/* 1982 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-royal-navy text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 bg-royal-gold rounded-full" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif font-bold text-xl text-royal-navy">Research Expansion</h3>
                <span className="text-royal-gold font-bold">1982</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Inauguration of the Advanced Sciences Wing, marking the transition from a teaching-focused college to a major research institution.
              </p>
            </div>
          </div>

          {/* 2001 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-royal-navy text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 bg-royal-gold rounded-full" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif font-bold text-xl text-royal-navy">Global Recognition</h3>
                <span className="text-royal-gold font-bold">2001</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Awarded the prestigious "Institution of Excellence" status and established our first international exchange programs.
              </p>
            </div>
          </div>

          {/* 2024 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-royal-navy text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 bg-royal-gold rounded-full" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif font-bold text-xl text-royal-navy">Innovation Hub</h3>
                <span className="text-royal-gold font-bold">2024</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Launch of the state-of-the-art AI and Robotics Center, cementing our position as a leader in future technologies.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values / Stats */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-royal-navy">
                <Globe size={32} />
              </div>
              <h3 className="text-4xl font-serif text-royal-navy mb-2">120+</h3>
              <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">Global Partnerships</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-royal-navy">
                <Users size={32} />
              </div>
              <h3 className="text-4xl font-serif text-royal-navy mb-2">50k+</h3>
              <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">Alumni Worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-royal-navy">
                <BookOpen size={32} />
              </div>
              <h3 className="text-4xl font-serif text-royal-navy mb-2">200+</h3>
              <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">Academic Programs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-royal-navy">
                <Award size={32} />
              </div>
              <h3 className="text-4xl font-serif text-royal-navy mb-2">Top 1%</h3>
              <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">Global Ranking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Transparency */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ShieldCheck className="w-12 h-12 text-royal-gold mx-auto mb-6" />
          <h2 className="text-3xl font-serif text-royal-navy mb-4">Commitment to Transparency</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            As an institution of excellence, we are fully committed to transparency and compliance with all statutory bodies. We maintain up-to-date records of our approvals, accreditations, and policies as mandated by AICTE and UGC.
          </p>
          <Link to="/disclosures" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-royal-navy text-royal-navy font-bold rounded-sm hover:bg-royal-navy hover:text-white transition-all">
            VIEW MANDATORY DISCLOSURES <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
