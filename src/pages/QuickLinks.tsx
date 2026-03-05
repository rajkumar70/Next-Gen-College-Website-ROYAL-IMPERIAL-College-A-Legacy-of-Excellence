import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  FileText, 
  BookOpen, 
  Home, 
  Users, 
  GraduationCap, 
  Book, 
  Microscope, 
  CreditCard, 
  Award,
  ExternalLink,
  Download
} from 'lucide-react';

const quickLinks = [
  { title: 'Academic Calendar', icon: <Calendar size={24} />, path: '/academic-calendar', color: 'bg-blue-50 text-blue-600', desc: 'View semester schedules and holidays.' },
  { title: 'Examination Results', icon: <FileText size={24} />, path: '/examination-results', color: 'bg-emerald-50 text-emerald-600', desc: 'Check your latest academic performance.' },
  { title: 'Library Resources', icon: <BookOpen size={24} />, path: '/library-resources', color: 'bg-amber-50 text-amber-600', desc: 'Access digital and physical library catalogs.' },
  { title: 'Hostel Facilities', icon: <Home size={24} />, path: '/hostel-facilities', color: 'bg-purple-50 text-purple-600', desc: 'Information about accommodation and mess.' },
  { title: 'Alumni Association', icon: <Users size={24} />, path: '/alumni-association', color: 'bg-rose-50 text-rose-600', desc: 'Connect with our global alumni network.' },
  { title: 'Admissions', icon: <GraduationCap size={24} />, path: '/admissions', color: 'bg-indigo-50 text-indigo-600', desc: 'Apply for upcoming academic sessions.' },
  { title: 'Undergraduate Programs', icon: <Book size={24} />, path: '/undergraduate-programs', color: 'bg-cyan-50 text-cyan-600', desc: 'Explore our B.Tech degree offerings.' },
  { title: 'Postgraduate Programs', icon: <GraduationCap size={24} />, path: '/postgraduate-programs', color: 'bg-teal-50 text-teal-600', desc: 'Discover M.Tech and MBA programs.' },
  { title: 'Ph.D. Research', icon: <Microscope size={24} />, path: '/phd-research', color: 'bg-fuchsia-50 text-fuchsia-600', desc: 'Join our advanced research initiatives.' },
  { title: 'Fee Structure', icon: <CreditCard size={24} />, path: '/fee-structure', color: 'bg-orange-50 text-orange-600', desc: 'Detailed breakdown of academic fees.' },
  { title: 'Scholarships', icon: <Award size={24} />, path: '/scholarships', color: 'bg-yellow-50 text-yellow-600', desc: 'Financial aid and merit-based awards.' },
  { title: 'Mandatory Disclosures', icon: <FileText size={24} />, path: '/disclosures', color: 'bg-slate-50 text-slate-600', desc: 'AICTE and UGC compliance documents.' },
];

const externalLinks = [
  { title: 'AICTE Official Website', url: 'https://www.aicte-india.org/' },
  { title: 'UGC Official Website', url: 'https://www.ugc.gov.in/' },
  { title: 'Ministry of Education', url: 'https://www.education.gov.in/' },
  { title: 'National Scholarship Portal', url: 'https://scholarships.gov.in/' },
];

export default function QuickLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 bg-slate-50"
    >
      <div className="bg-royal-navy text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-royal-gold/40 via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Quick Links Directory</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Fast access to all essential academic, administrative, and student life resources.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-royal-gold/30 transition-all group flex flex-col h-full"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${link.color} group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                <h3 className="text-lg font-bold text-royal-navy mb-2 group-hover:text-royal-gold transition-colors">{link.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">{link.desc}</p>
                <div className="mt-4 flex items-center text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-royal-navy transition-colors">
                  Access Portal <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-royal-navy mb-4 flex items-center gap-2">
              <ExternalLink className="text-royal-gold" size={20} />
              Important Portals
            </h3>
            <ul className="space-y-3">
              {externalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors group"
                  >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-royal-navy">{link.title}</span>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-royal-gold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-royal-navy text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-serif font-bold mb-4">Essential Downloads</h3>
            <div className="space-y-3">
              <Link to="/disclosures" className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between hover:bg-white/10 transition-colors group">
                <span className="font-medium text-sm text-white/90">Student Handbook 2026</span>
                <Download size={16} className="text-royal-gold" />
              </Link>
              <Link to="/disclosures" className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between hover:bg-white/10 transition-colors group">
                <span className="font-medium text-sm text-white/90">Anti-Ragging Affidavit</span>
                <Download size={16} className="text-royal-gold" />
              </Link>
              <Link to="/disclosures" className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between hover:bg-white/10 transition-colors group">
                <span className="font-medium text-sm text-white/90">Medical Fitness Form</span>
                <Download size={16} className="text-royal-gold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
