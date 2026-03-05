import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight, Award, Users, BookOpen } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the building
      gsap.to(buildingRef.current, {
        yPercent: 30,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Fade out content on scroll
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "50% top",
          scrub: true
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[120vh] w-full overflow-hidden bg-royal-navy">
      {/* Background Building with Parallax */}
      <div 
        ref={buildingRef}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-royal-navy/40 via-transparent to-royal-navy z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
          alt="Grand College Building"
          className="w-full h-full object-cover object-center opacity-60"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Floating Particles/Elements for 3D depth */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 1000 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [Math.random() * 1000, Math.random() * 1000 - 200]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-royal-gold rounded-full"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div ref={contentRef} className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 text-center pt-32 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1 border border-royal-gold/30 rounded-full text-royal-gold text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6 bg-royal-gold/5 backdrop-blur-sm">
            Established 1945 • Centenary Excellence
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white leading-[1.1] mb-8">
            Where Tradition Meets <br />
            <span className="text-gold italic">Future Innovation</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/70 text-base md:text-xl font-light leading-relaxed mb-12">
            Empowering the next generation of leaders through world-class education, 
            cutting-edge research, and a legacy of royal distinction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-16"
        >
          <Link to="/admissions" className="group relative px-8 py-4 gold-gradient text-royal-navy font-bold rounded-sm overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] w-full sm:w-auto inline-block">
            <span className="relative z-10 flex items-center justify-center gap-2">
              EXPLORE ADMISSIONS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link to="/student-life" className="px-8 py-4 border border-white/20 text-white font-bold rounded-sm hover:bg-white/5 transition-all backdrop-blur-sm w-full sm:w-auto inline-block text-center">
            VIRTUAL CAMPUS TOUR
          </Link>
        </motion.div>

        {/* Quick Stats - Now relative to content flow to avoid overlap */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 px-6"
        >
          <div className="flex flex-col items-center">
            <Award className="text-royal-gold mb-2" size={24} />
            <span className="text-xl md:text-2xl font-serif text-white">#12</span>
            <span className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest">NIRF Ranking</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="text-royal-gold mb-2" size={24} />
            <span className="text-xl md:text-2xl font-serif text-white">15k+</span>
            <span className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest">Global Alumni</span>
          </div>
          <div className="flex flex-col items-center">
            <BookOpen className="text-royal-gold mb-2" size={24} />
            <span className="text-xl md:text-2xl font-serif text-white">98%</span>
            <span className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest">Placement Rate</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-royal-gold rounded-full flex items-center justify-center mb-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-royal-gold rounded-full animate-pulse" />
            </div>
            <span className="text-xl md:text-2xl font-serif text-white">A++</span>
            <span className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest">NAAC Grade</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Positioned relative to bottom of section */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-royal-gold" size={20} />
        </motion.div>
      </div>

    </section>
  );
}
