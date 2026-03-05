import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, GraduationCap, Users, FileText, CheckCircle, ShieldCheck } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const scholarshipData = [
  { name: 'Merit-Based', value: 45, color: '#1e3a8a' },
  { name: 'Need-Based', value: 30, color: '#d4af37' },
  { name: 'Sports Quota', value: 10, color: '#0f172a' },
  { name: 'Defense Wards', value: 10, color: '#64748b' },
  { name: 'Alumni Sponsored', value: 5, color: '#94a3b8' },
];

const scholarships = [
  { icon: <Award size={24} />, title: 'Chancellor\'s Merit Scholarship', amount: 'Up to 100% Tuition Waiver', eligibility: 'Top 1% rankers in JEE Main or >95% in 10+2 board exams.', deadline: 'July 31, 2026' },
  { icon: <Users size={24} />, title: 'EWS Financial Aid', amount: '50% - 100% Tuition Waiver', eligibility: 'Family income < ₹8 Lakhs per annum. Valid income certificate required.', deadline: 'August 15, 2026' },
  { icon: <GraduationCap size={24} />, title: 'Women in STEM Grant', amount: '₹50,000 per annum', eligibility: 'Female candidates pursuing core engineering branches with >85% in 10+2.', deadline: 'August 10, 2026' },
  { icon: <CheckCircle size={24} />, title: 'Sports Excellence Award', amount: 'Full Tuition + Hostel Waiver', eligibility: 'National or International level sports medalists.', deadline: 'July 20, 2026' },
];

export default function Scholarships() {
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
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
            alt="Graduation" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Scholarships & Financial Aid</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Empowering deserving students to pursue their dreams without financial constraints. Over ₹5 Crores disbursed annually.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-royal-navy mb-8">Available Scholarships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-royal-navy mb-4 group-hover:bg-royal-gold group-hover:text-white transition-colors">
                    {scholarship.icon}
                  </div>
                  <h3 className="text-xl font-bold text-royal-navy mb-2 leading-tight">{scholarship.title}</h3>
                  <p className="text-royal-gold font-bold text-sm mb-4">{scholarship.amount}</p>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Eligibility</span>
                      <p className="text-sm text-slate-600 leading-relaxed">{scholarship.eligibility}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Deadline</span>
                      <p className="text-sm text-slate-800 font-medium">{scholarship.deadline}</p>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-2 border border-royal-navy text-royal-navy font-bold rounded-lg hover:bg-royal-navy hover:text-white transition-colors text-sm">
                    VIEW DETAILS
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold text-royal-navy mb-8">Scholarship Distribution</h2>
            <div className="h-[400px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={scholarshipData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {scholarshipData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-royal-navy text-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-serif font-bold mb-6">Application Process</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-royal-navy text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold text-sm">1</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5">
                  <h4 className="font-bold text-royal-gold text-sm mb-1">Register Online</h4>
                  <p className="text-xs text-white/70">Create an account on the scholarship portal.</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-royal-navy text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold text-sm">2</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5">
                  <h4 className="font-bold text-royal-gold text-sm mb-1">Upload Documents</h4>
                  <p className="text-xs text-white/70">Submit marksheets, income certificates, etc.</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-royal-navy text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold text-sm">3</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5">
                  <h4 className="font-bold text-royal-gold text-sm mb-1">Verification</h4>
                  <p className="text-xs text-white/70">Committee reviews applications.</p>
                </div>
              </div>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-royal-navy text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold text-sm">4</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5">
                  <h4 className="font-bold text-royal-gold text-sm mb-1">Disbursement</h4>
                  <p className="text-xs text-white/70">Amount credited to fee account.</p>
                </div>
              </div>
            </div>
            <Link to="/portal" className="mt-8 w-full py-4 gold-gradient text-royal-navy font-bold rounded-lg hover:scale-105 transition-transform inline-block text-center">
              APPLY FOR SCHOLARSHIP
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-royal-navy mb-4 flex items-center gap-2">
              <FileText className="text-royal-gold" size={20} />
              Required Documents
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>10th and 12th Marksheets</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Valid Income Certificate (for Need-Based)</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Caste Certificate (if applicable)</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Aadhar Card & Bank Details</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Compliance Note */}
        <div className="mt-16 bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center flex flex-col items-center justify-center gap-3">
          <ShieldCheck className="text-royal-gold w-8 h-8" />
          <p className="text-sm text-slate-600">
            All scholarship programs are administered in compliance with AICTE and UGC guidelines for financial assistance.
          </p>
          <Link to="/disclosures" className="text-royal-navy font-bold text-xs hover:text-royal-gold transition-colors uppercase tracking-widest underline underline-offset-4">
            View Mandatory Disclosures
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
