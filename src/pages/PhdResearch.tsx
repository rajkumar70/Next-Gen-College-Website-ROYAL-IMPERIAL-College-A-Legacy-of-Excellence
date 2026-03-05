import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Microscope, BookOpen, Users, Award, FileText, ShieldCheck } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const researchAreas = [
  { name: 'Artificial Intelligence', value: 35, color: '#1e3a8a' },
  { name: 'Renewable Energy', value: 25, color: '#d4af37' },
  { name: 'Nanotechnology', value: 20, color: '#0f172a' },
  { name: 'Biomedical Engineering', value: 15, color: '#64748b' },
  { name: 'Structural Engineering', value: 5, color: '#94a3b8' },
];

const facilities = [
  { icon: <Microscope size={24} />, title: 'Advanced Labs', desc: 'State-of-the-art research laboratories equipped with modern instruments.' },
  { icon: <BookOpen size={24} />, title: 'Digital Library Access', desc: 'Unrestricted access to premium journals and research databases.' },
  { icon: <Users size={24} />, title: 'Expert Guidance', desc: 'Supervision by highly qualified faculty with extensive research experience.' },
  { icon: <Award size={24} />, title: 'Research Grants', desc: 'Financial support for attending international conferences and publishing papers.' },
];

export default function PhdResearch() {
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
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
            alt="Research" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Ph.D. Research Programs</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Fostering a culture of innovation and discovery. Join our vibrant community of scholars pushing the boundaries of knowledge.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-royal-navy mb-8">Key Research Areas</h2>
            <div className="h-[400px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={researchAreas}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {researchAreas.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}% Scholars`} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold text-royal-navy mb-8">Research Facilities</h2>
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
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-royal-navy text-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-serif font-bold mb-6">Admission Process</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-royal-navy text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold text-sm">1</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5">
                  <h4 className="font-bold text-royal-gold text-sm mb-1">Application</h4>
                  <p className="text-xs text-white/70">Submit online application with research proposal.</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-royal-navy text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold text-sm">2</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5">
                  <h4 className="font-bold text-royal-gold text-sm mb-1">Entrance Test</h4>
                  <p className="text-xs text-white/70">Clear the university research entrance examination.</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-royal-navy text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold text-sm">3</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5">
                  <h4 className="font-bold text-royal-gold text-sm mb-1">Interview</h4>
                  <p className="text-xs text-white/70">Defend your proposal before the research committee.</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-royal-navy text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold text-sm">4</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5">
                  <h4 className="font-bold text-royal-gold text-sm mb-1">Enrollment</h4>
                  <p className="text-xs text-white/70">Complete registration and begin coursework.</p>
                </div>
              </div>
            </div>
            <Link to="/admissions" className="mt-8 w-full py-4 gold-gradient text-royal-navy font-bold rounded-lg hover:scale-105 transition-transform inline-block text-center">
              APPLY FOR PH.D.
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-royal-navy mb-4 flex items-center gap-2">
              <FileText className="text-royal-gold" size={20} />
              Eligibility Criteria
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Master's degree in relevant discipline with at least 55% marks (50% for reserved category).</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Candidates with valid NET/JRF/GATE scores are exempted from the entrance test.</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Compliance Note */}
        <div className="mt-16 bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center flex flex-col items-center justify-center gap-3">
          <ShieldCheck className="text-royal-gold w-8 h-8" />
          <p className="text-sm text-slate-600">
            Our Ph.D. programs adhere to the UGC (Minimum Standards and Procedure for Award of M.Phil./Ph.D. Degrees) Regulations.
          </p>
          <Link to="/disclosures" className="text-royal-navy font-bold text-xs hover:text-royal-gold transition-colors uppercase tracking-widest underline underline-offset-4">
            View Mandatory Disclosures
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
