import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Code, Cpu, Wrench, Zap, Building, HeartPulse, ShieldCheck } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const intakeData = [
  { program: 'Computer Science', intake: 180 },
  { program: 'Electronics', intake: 120 },
  { program: 'Mechanical', intake: 120 },
  { program: 'Civil', intake: 60 },
  { program: 'Electrical', intake: 60 },
  { program: 'Biotechnology', intake: 60 },
];

const programs = [
  { icon: <Code size={32} />, title: 'B.Tech in Computer Science & Engineering', duration: '4 Years', intake: 180, desc: 'Focuses on AI, Machine Learning, Data Science, and Software Development.' },
  { icon: <Cpu size={32} />, title: 'B.Tech in Electronics & Communication', duration: '4 Years', intake: 120, desc: 'Covers VLSI Design, IoT, Embedded Systems, and Signal Processing.' },
  { icon: <Wrench size={32} />, title: 'B.Tech in Mechanical Engineering', duration: '4 Years', intake: 120, desc: 'Specializations in Robotics, Automation, and Thermal Engineering.' },
  { icon: <Building size={32} />, title: 'B.Tech in Civil Engineering', duration: '4 Years', intake: 60, desc: 'Focus on Smart Cities, Structural Engineering, and Environmental Sustainability.' },
  { icon: <Zap size={32} />, title: 'B.Tech in Electrical Engineering', duration: '4 Years', intake: 60, desc: 'Emphasizes Renewable Energy, Smart Grids, and Power Electronics.' },
  { icon: <HeartPulse size={32} />, title: 'B.Tech in Biotechnology', duration: '4 Years', intake: 60, desc: 'Advanced research in Bioinformatics, Genetics, and Biochemical Engineering.' },
];

export default function UndergraduatePrograms() {
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
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
            alt="Students" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Undergraduate Programs</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            AICTE-approved B.Tech programs designed to foster innovation, critical thinking, and industry readiness.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-royal-navy mb-8">AICTE Approved Intake</h2>
            <div className="h-[400px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={intakeData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
                  <XAxis type="number" axisLine={false} tickLine={false} />
                  <YAxis dataKey="program" type="category" axisLine={false} tickLine={false} width={120} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} />
                  <Legend />
                  <Bar dataKey="intake" fill="#1e3a8a" name="Approved Intake Seats" radius={[0, 4, 4, 0]} />
                </BarChart>
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
            <ul className="space-y-4 text-sm text-white/80 leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/ Biotechnology/ Biology/ Technical Vocational subject.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Obtained at least 45% marks (40% in case of candidates belonging to reserved category) in the above subjects taken together.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Valid score in JEE Main or State Level Engineering Entrance Examination.</p>
              </li>
            </ul>
            <Link to="/admissions" className="mt-8 w-full py-4 gold-gradient text-royal-navy font-bold rounded-lg hover:scale-105 transition-transform inline-block text-center">
              APPLY NOW
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-royal-navy mb-4">Lateral Entry (Direct 2nd Year)</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Passed Diploma examination with at least 45% marks (40% for reserved category) in appropriate branch of Engineering and Technology.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Passed B.Sc. Degree from a recognized University as defined by UGC, with at least 45% marks (40% for reserved category) and passed 10+2 examination with Mathematics as a subject.
            </p>
          </div>
        </div>
        {/* Compliance Note */}
        <div className="mt-16 bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center flex flex-col items-center justify-center gap-3">
          <ShieldCheck className="text-royal-gold w-8 h-8" />
          <p className="text-sm text-slate-600">
            All undergraduate programs are approved by AICTE and affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU).
          </p>
          <Link to="/disclosures" className="text-royal-navy font-bold text-xs hover:text-royal-gold transition-colors uppercase tracking-widest underline underline-offset-4">
            View Mandatory Disclosures
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
