import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnnouncementBar from './components/AnnouncementBar';
import MandatoryDisclosures from './components/MandatoryDisclosures';
import Admissions from './pages/Admissions';
import Research from './pages/Research';
import About from './pages/About';
import Academics from './pages/Academics';
import StudentLife from './pages/StudentLife';
import AcademicCalendar from './pages/AcademicCalendar';
import ExaminationResults from './pages/ExaminationResults';
import LibraryResources from './pages/LibraryResources';
import HostelFacilities from './pages/HostelFacilities';
import AlumniAssociation from './pages/AlumniAssociation';
import UndergraduatePrograms from './pages/UndergraduatePrograms';
import PostgraduatePrograms from './pages/PostgraduatePrograms';
import PhdResearch from './pages/PhdResearch';
import FeeStructure from './pages/FeeStructure';
import Scholarships from './pages/Scholarships';
import QuickLinks from './pages/QuickLinks';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';
import MandatoryDisclosuresPage from './pages/MandatoryDisclosures';
import Portal from './pages/Portal';
import ForgotPassword from './pages/ForgotPassword';
import StudentDashboard from './pages/StudentDashboard';
import ProjectDetails from './pages/ProjectDetails';
import CanvasDashboard from './pages/CanvasDashboard';
import { motion, AnimatePresence } from 'motion/react';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-royal-navy"
    >
      <div className="pt-24 lg:pt-28">
        <AnnouncementBar />
      </div>
      <Hero />
      
      {/* Chancellor Message Section */}
      <section className="py-24 bg-royal-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-royal-gold rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-royal-gold/50 rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-royal-gold/20 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Chancellor"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-royal-navy to-transparent">
                <h3 className="text-2xl font-serif font-bold text-royal-gold">Dr. Vikramaditya Singh</h3>
                <p className="text-sm text-white/60 uppercase tracking-widest">Chancellor & Founder</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-royal-gold" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-royal-gold" />
          </div>
          
          <div>
            <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Leadership Message</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">A Legacy of Excellence, <br />A Vision for the Future.</h2>
            <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed italic">
              <p>
                "At Royal Imperial, we believe that education is not just about acquiring knowledge, 
                but about building character and fostering innovation. Our century-old legacy 
                is a testament to our commitment to academic rigor and holistic development."
              </p>
              <p>
                "We invite you to be part of a community that values tradition while embracing 
                the technological advancements of the 21st century. Together, we shall create 
                a future that is as grand as our past."
              </p>
            </div>
            <Link to="/about" className="mt-10 px-8 py-4 gold-gradient text-royal-navy font-bold rounded-sm hover:scale-105 transition-transform inline-block text-center">
              READ FULL MESSAGE
            </Link>
          </div>
        </div>
      </section>

      <MandatoryDisclosures />

      {/* Footer */}
      <footer className="bg-royal-navy pt-24 pb-12 text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center">
                  <span className="text-royal-navy font-serif font-bold text-xl">R</span>
                </div>
                <span className="font-serif font-bold text-xl tracking-tight">ROYAL IMPERIAL</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                A premier institution of higher learning dedicated to academic excellence, 
                research innovation, and the holistic development of future leaders.
              </p>
              <div className="flex gap-4">
                {['FB', 'TW', 'IG', 'LN'].map(social => (
                  <div key={social} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold hover:bg-royal-gold hover:text-royal-navy transition-all cursor-pointer">
                    {social}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg mb-8 text-royal-gold">Contact Us</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li className="flex flex-col">
                  <span className="text-white/30 uppercase text-[10px] tracking-widest mb-1">Address</span>
                  Imperial Campus, Knowledge Park III, <br />New Delhi, India - 110001
                </li>
                <li className="flex flex-col">
                  <span className="text-white/30 uppercase text-[10px] tracking-widest mb-1">Email</span>
                  admissions@royalimperial.edu.in
                </li>
                <li className="flex flex-col">
                  <span className="text-white/30 uppercase text-[10px] tracking-widest mb-1">Phone</span>
                  +91 (011) 2345-6789
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-[0.2em]">
            <p>© 2026 Royal Imperial College. All Rights Reserved.</p>
            <div className="flex gap-8">
              <Link to="/privacy-policy" className="hover:text-royal-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-royal-gold transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-royal-gold transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

function GenericPage({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 bg-royal-navy flex flex-col items-center justify-center text-center px-6"
    >
      <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">{title}</h1>
      <p className="text-white/60 text-lg max-w-2xl">
        This section is currently under development. Please check back later for updates.
      </p>
      <Link to="/" className="mt-10 px-8 py-4 gold-gradient text-royal-navy font-bold rounded-sm hover:scale-105 transition-transform inline-block">
        RETURN HOME
      </Link>
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/research" element={<Research />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/student-life/projects/:id" element={<ProjectDetails />} />
        <Route path="/academic-calendar" element={<AcademicCalendar />} />
        <Route path="/examination-results" element={<ExaminationResults />} />
        <Route path="/library-resources" element={<LibraryResources />} />
        <Route path="/hostel-facilities" element={<HostelFacilities />} />
        <Route path="/alumni-association" element={<AlumniAssociation />} />
        <Route path="/undergraduate-programs" element={<UndergraduatePrograms />} />
        <Route path="/postgraduate-programs" element={<PostgraduatePrograms />} />
        <Route path="/phd-research" element={<PhdResearch />} />
        <Route path="/fee-structure" element={<FeeStructure />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/quick-links" element={<QuickLinks />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/disclosures" element={<MandatoryDisclosuresPage />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/canvas" element={<CanvasDashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname === '/student-dashboard' || location.pathname === '/canvas';

  return (
    <>
      {!isDashboard && <Navbar />}
      <AnimatedRoutes />
    </>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}
