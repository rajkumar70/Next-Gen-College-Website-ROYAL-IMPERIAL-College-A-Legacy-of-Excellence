import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Database, Shield, Cpu, Factory, BarChart, Users, ShieldCheck } from 'lucide-react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const intakeData = [
  { program: 'Data Science', intake: 30 },
  { program: 'Cyber Security', intake: 30 },
  { program: 'VLSI Design', intake: 18 },
  { program: 'Manufacturing', intake: 18 },
  { program: 'MBA (Finance)', intake: 60 },
  { program: 'MBA (HR)', intake: 60 },
];

const programs = [
  { icon: <Database size={32} />, title: 'M.Tech in Data Science & AI', duration: '2 Years', intake: 30, desc: 'Advanced algorithms, Big Data analytics, and Deep Learning applications.' },
  { icon: <Shield size={32} />, title: 'M.Tech in Cyber Security', duration: '2 Years', intake: 30, desc: 'Cryptography, Network Security, and Ethical Hacking methodologies.' },
  { icon: <Cpu size={32} />, title: 'M.Tech in VLSI Design', duration: '2 Years', intake: 18, desc: 'ASIC design, FPGA prototyping, and mixed-signal IC design.' },
  { icon: <Factory size={32} />, title: 'M.Tech in Advanced Manufacturing', duration: '2 Years', intake: 18, desc: 'Industry 4.0, Additive Manufacturing, and Robotics.' },
  { icon: <BarChart size={32} />, title: 'MBA in Finance', duration: '2 Years', intake: 60, desc: 'Corporate Finance, Investment Banking, and FinTech.' },
  { icon: <Users size={32} />, title: 'MBA in Human Resources', duration: '2 Years', intake: 60, desc: 'Talent Acquisition, Organizational Behavior, and HR Analytics.' },
];

export default function PostgraduatePrograms() {
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
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
            alt="Postgraduate" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Postgraduate Programs</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Specialized M.Tech and MBA programs designed to create industry leaders and research innovators.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-royal-navy mb-8">AICTE Approved Intake</h2>
            <div className="h-[400px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={intakeData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
                  <XAxis type="number" axisLine={false} tickLine={false} />
                  <YAxis dataKey="program" type="category" axisLine={false} tickLine={false} width={120} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} />
                  <Legend />
                  <Bar dataKey="intake" fill="#d4af37" name="Approved Intake Seats" radius={[0, 4, 4, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold text-royal-navy mb-8">Program Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((prog, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center text-royal-navy mb-6 group-hover:bg-royal-gold group-hover:text-white transition-colors">
                    {prog.icon}
                  </div>
                  <h3 className="text-xl font-bold text-royal-navy mb-2 leading-tight">{prog.title}</h3>
                  <div className="flex gap-4 mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <span className="bg-slate-100 px-2 py-1 rounded">{prog.duration}</span>
                    <span className="bg-slate-100 px-2 py-1 rounded">Intake: {prog.intake}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{prog.desc}</p>
                  <button className="text-royal-navy font-bold text-sm hover:text-royal-gold transition-colors flex items-center gap-1">
                    View Curriculum <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-royal-navy text-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-serif font-bold mb-6">Eligibility Criteria</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-royal-gold text-sm uppercase tracking-wider mb-2">M.Tech Programs</h4>
                <ul className="space-y-3 text-sm text-white/80 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                    <p>B.E./B.Tech in relevant discipline with minimum 50% marks (45% for reserved category).</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                    <p>Valid GATE score is preferred and eligible for AICTE stipend.</p>
                  </li>
                </ul>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-bold text-royal-gold text-sm uppercase tracking-wider mb-2">MBA Programs</h4>
                <ul className="space-y-3 text-sm text-white/80 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                    <p>Bachelor's Degree of minimum 3 years duration with at least 50% marks (45% for reserved category).</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                    <p>Valid score in CAT/MAT/XAT/CMAT or State Level Entrance Test.</p>
                  </li>
                </ul>
              </div>
            </div>
            <Link to="/admissions" className="mt-8 w-full py-4 gold-gradient text-royal-navy font-bold rounded-lg hover:scale-105 transition-transform inline-block text-center">
              APPLY NOW
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-royal-navy mb-4">AICTE PG Scholarship</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              GATE qualified students admitted to AICTE approved M.Tech programs are eligible for a monthly stipend of ₹12,400/- for 24 months.
            </p>
            <Link to="/scholarships" className="text-royal-navy font-bold text-sm hover:text-royal-gold transition-colors flex items-center gap-1">
              Check Eligibility <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        {/* Compliance Note */}
        <div className="mt-16 bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center flex flex-col items-center justify-center gap-3">
          <ShieldCheck className="text-royal-gold w-8 h-8" />
          <p className="text-sm text-slate-600">
            All postgraduate programs are approved by AICTE and affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU).
          </p>
          <Link to="/disclosures" className="text-royal-navy font-bold text-xs hover:text-royal-gold transition-colors uppercase tracking-widest underline underline-offset-4">
            View Mandatory Disclosures
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
