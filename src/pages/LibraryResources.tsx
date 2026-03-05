import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Book, Database, Globe, Search, Monitor, Wifi, ShieldCheck } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const resourceData = [
  { name: 'Printed Books', value: 150000, color: '#1e3a8a' },
  { name: 'E-Books', value: 85000, color: '#d4af37' },
  { name: 'Journals (Print)', value: 450, color: '#0f172a' },
  { name: 'E-Journals', value: 12000, color: '#64748b' },
  { name: 'Project Reports', value: 5000, color: '#94a3b8' },
];

const facilities = [
  { icon: <Monitor size={24} />, title: 'Digital Library', desc: '100+ terminals with high-speed internet access to global databases.' },
  { icon: <Wifi size={24} />, title: 'Wi-Fi Enabled', desc: 'Seamless campus-wide connectivity for accessing resources anywhere.' },
  { icon: <Search size={24} />, title: 'OPAC System', desc: 'Online Public Access Catalog for easy search and reservation of books.' },
  { icon: <Book size={24} />, title: 'Reading Halls', desc: 'Spacious, air-conditioned reading halls accommodating 500+ students.' },
];

export default function LibraryResources() {
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
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop" 
            alt="Library" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Central Library</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            A state-of-the-art knowledge hub spanning 50,000 sq.ft., equipped with vast print and digital resources adhering to AICTE standards.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-bold text-royal-navy">Resource Distribution</h2>
          <p className="text-slate-600 leading-relaxed">
            Our library houses an extensive collection of resources catering to various engineering, management, and science disciplines. We continuously update our repository to ensure students and faculty have access to the latest knowledge.
          </p>
          
          <div className="h-[400px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={resourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {resourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => new Intl.NumberFormat('en-IN').format(value as number)} />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-serif font-bold text-royal-navy">Key Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-royal-navy mb-4 group-hover:bg-royal-gold group-hover:text-white transition-colors">
                  {facility.icon}
                </div>
                <h3 className="text-lg font-bold text-royal-navy mb-2">{facility.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{facility.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-royal-navy text-white p-8 rounded-2xl shadow-md mt-8">
            <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
              <Database className="text-royal-gold" />
              Subscribed E-Databases
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-royal-gold" /> IEEE Xplore</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-royal-gold" /> ScienceDirect</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-royal-gold" /> SpringerLink</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-royal-gold" /> ACM Digital Library</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-royal-gold" /> ASCE Journals</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-royal-gold" /> ProQuest</div>
            </div>
            <Link to="/portal" className="mt-8 w-full py-3 border border-white/20 rounded-lg hover:bg-white/10 transition-colors text-sm font-bold tracking-wider inline-block text-center mb-4">
              ACCESS DIGITAL LIBRARY
            </Link>
            <div className="pt-4 border-t border-white/10 text-center">
              <Link to="/disclosures" className="text-xs text-royal-gold hover:text-white transition-colors flex items-center justify-center gap-1">
                <ShieldCheck size={14} /> View AICTE Library Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
