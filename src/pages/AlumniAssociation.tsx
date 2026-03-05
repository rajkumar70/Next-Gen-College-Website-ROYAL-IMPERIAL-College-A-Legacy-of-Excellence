import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Users, Globe, Briefcase, Calendar, MapPin, ShieldCheck } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const alumniData = [
  { name: 'North America', value: 3500, color: '#1e3a8a' },
  { name: 'Europe', value: 2000, color: '#d4af37' },
  { name: 'Asia Pacific', value: 1500, color: '#0f172a' },
  { name: 'India', value: 8000, color: '#64748b' },
  { name: 'Middle East', value: 1000, color: '#94a3b8' },
];

const notableAlumni = [
  { name: 'Dr. Ananya Sharma', role: 'VP Engineering, Google', year: '2005', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop' },
  { name: 'Rahul Verma', role: 'Founder & CEO, TechNova', year: '2010', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop' },
  { name: 'Priya Patel', role: 'Chief Scientist, ISRO', year: '1998', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop' },
  { name: 'Arjun Singh', role: 'Managing Director, Goldman Sachs', year: '2002', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop' },
];

export default function AlumniAssociation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 bg-slate-50"
    >
      <div className="bg-royal-navy text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
            alt="Alumni" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Alumni Association</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            A global network of 16,000+ proud graduates driving innovation and leadership across industries worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-royal-navy mb-8">Global Footprint</h2>
            <div className="h-[400px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={alumniData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {alumniData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => new Intl.NumberFormat('en-IN').format(value as number)} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold text-royal-navy mb-8">Notable Alumni</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {notableAlumni.map((alumnus, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <img src={alumnus.img} alt={alumnus.name} className="w-20 h-20 rounded-full object-cover border-2 border-royal-gold" referrerPolicy="no-referrer" />
                  <div>
                    <h3 className="text-lg font-bold text-royal-navy">{alumnus.name}</h3>
                    <p className="text-sm text-slate-600 mb-1">{alumnus.role}</p>
                    <p className="text-xs text-slate-400 font-medium">Class of {alumnus.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-royal-navy text-white p-8 rounded-2xl shadow-md text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-royal-gold" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Join the Network</h3>
            <p className="text-sm text-white/70 mb-8 leading-relaxed">
              Stay connected with your alma mater, mentor current students, and unlock exclusive networking opportunities.
            </p>
            <Link to="/portal" className="w-full py-4 gold-gradient text-royal-navy font-bold rounded-lg hover:scale-105 transition-transform inline-block text-center">
              REGISTER NOW
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-royal-navy mb-6 flex items-center gap-2">
              <Calendar className="text-royal-gold" size={20} />
              Upcoming Events
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex flex-col items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-slate-500 uppercase">Oct</span>
                  <span className="text-lg font-bold text-royal-navy leading-none">15</span>
                </div>
                <div>
                  <h4 className="font-bold text-royal-navy text-sm mb-1">Annual Alumni Meet 2026</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1"><MapPin size={12} /> Main Campus Auditorium</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex flex-col items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-slate-500 uppercase">Nov</span>
                  <span className="text-lg font-bold text-royal-navy leading-none">05</span>
                </div>
                <div>
                  <h4 className="font-bold text-royal-navy text-sm mb-1">Silicon Valley Chapter Dinner</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1"><MapPin size={12} /> San Francisco, CA</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex flex-col items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-slate-500 uppercase">Dec</span>
                  <span className="text-lg font-bold text-royal-navy leading-none">20</span>
                </div>
                <div>
                  <h4 className="font-bold text-royal-navy text-sm mb-1">Mentorship Drive Kickoff</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1"><Globe size={12} /> Virtual Event</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-8 text-center">
            <ShieldCheck className="w-10 h-10 text-royal-gold mx-auto mb-3" />
            <h3 className="text-lg font-bold text-royal-navy mb-2">Institutional Compliance</h3>
            <p className="text-xs text-slate-500 mb-4">
              View our statutory approvals and compliance reports as mandated by AICTE and UGC.
            </p>
            <Link to="/disclosures" className="text-royal-navy font-bold text-sm hover:text-royal-gold transition-colors underline underline-offset-4">
              Mandatory Disclosures
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
