import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, TrendingUp, CheckCircle, FileText, ShieldCheck } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const performanceData = [
  { year: '2021', passPercentage: 88, distinction: 45 },
  { year: '2022', passPercentage: 91, distinction: 50 },
  { year: '2023', passPercentage: 93, distinction: 55 },
  { year: '2024', passPercentage: 95, distinction: 62 },
  { year: '2025', passPercentage: 96, distinction: 68 },
];

const gradingSystem = [
  { grade: 'O', points: 10, description: 'Outstanding', marks: '90-100' },
  { grade: 'A+', points: 9, description: 'Excellent', marks: '80-89' },
  { grade: 'A', points: 8, description: 'Very Good', marks: '70-79' },
  { grade: 'B+', points: 7, description: 'Good', marks: '60-69' },
  { grade: 'B', points: 6, description: 'Above Average', marks: '50-59' },
  { grade: 'C', points: 5, description: 'Average', marks: '45-49' },
  { grade: 'P', points: 4, description: 'Pass', marks: '40-44' },
  { grade: 'F', points: 0, description: 'Fail', marks: '< 40' },
];

export default function ExaminationResults() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 bg-slate-50"
    >
      <div className="bg-royal-navy text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Examination Results</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Transparent, timely, and accurate evaluation system based on AICTE's Choice Based Credit System (CBCS).
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-serif font-bold text-royal-navy mb-6 flex items-center gap-2">
              <TrendingUp className="text-royal-gold" />
              Academic Performance Trends
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
                  <Tooltip cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '3 3' }} />
                  <Legend />
                  <Line type="monotone" dataKey="passPercentage" stroke="#1e3a8a" strokeWidth={3} name="Overall Pass %" dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="distinction" stroke="#d4af37" strokeWidth={3} name="Distinction %" dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-slate-500 mt-4">Consistent improvement in academic outcomes over the last 5 years.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-serif font-bold text-royal-navy mb-6 flex items-center gap-2">
              <Award className="text-royal-gold" />
              CBCS Grading System
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider">
                    <th className="p-4 rounded-tl-lg font-semibold">Letter Grade</th>
                    <th className="p-4 font-semibold">Grade Point</th>
                    <th className="p-4 font-semibold">Description</th>
                    <th className="p-4 rounded-tr-lg font-semibold">Marks Range (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {gradingSystem.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 font-bold text-royal-navy">{item.grade}</td>
                      <td className="p-4 text-slate-600">{item.points}</td>
                      <td className="p-4 text-slate-600">{item.description}</td>
                      <td className="p-4 text-slate-600">{item.marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-royal-navy text-white p-8 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-serif font-bold mb-4">Student Portal Login</h3>
            <p className="text-sm text-white/70 mb-6">Access your individual semester results, SGPA, CGPA, and download provisional marksheets.</p>
            <Link to="/portal" className="w-full py-3 gold-gradient text-royal-navy font-bold rounded-lg hover:scale-105 transition-transform inline-block text-center">
              CHECK RESULTS
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-royal-navy mb-4 flex items-center gap-2">
              <CheckCircle className="text-emerald-600" size={20} />
              Recent Declarations
            </h3>
            <ul className="space-y-4">
              <li className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                <p className="font-medium text-slate-800 text-sm">B.Tech Semester VI (Regular)</p>
                <p className="text-xs text-slate-500 mt-1">Declared on: Aug 15, 2026</p>
              </li>
              <li className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                <p className="font-medium text-slate-800 text-sm">MBA Semester II (Regular)</p>
                <p className="text-xs text-slate-500 mt-1">Declared on: Aug 10, 2026</p>
              </li>
              <li className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                <p className="font-medium text-slate-800 text-sm">M.Tech Semester IV (Final)</p>
                <p className="text-xs text-slate-500 mt-1">Declared on: Jul 28, 2026</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-royal-navy mb-4">Downloads</h3>
            <div className="space-y-3">
              <button className="w-full py-3 px-4 border border-slate-200 rounded-lg flex items-center justify-between hover:border-royal-gold hover:text-royal-navy transition-colors group">
                <span className="font-medium text-slate-700 group-hover:text-royal-navy text-sm">Re-evaluation Form</span>
                <FileText size={18} className="text-slate-400 group-hover:text-royal-gold" />
              </button>
              <button className="w-full py-3 px-4 border border-slate-200 rounded-lg flex items-center justify-between hover:border-royal-gold hover:text-royal-navy transition-colors group">
                <span className="font-medium text-slate-700 group-hover:text-royal-navy text-sm">Transcript Request</span>
                <FileText size={18} className="text-slate-400 group-hover:text-royal-gold" />
              </button>
            </div>
          </div>
        </div>
        {/* Compliance Note */}
        <div className="mt-16 bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center flex flex-col items-center justify-center gap-3">
          <ShieldCheck className="text-royal-gold w-8 h-8" />
          <p className="text-sm text-slate-600">
            Examination processes and grading systems strictly follow the guidelines prescribed by Dr. A.P.J. Abdul Kalam Technical University (AKTU) and UGC.
          </p>
          <Link to="/disclosures" className="text-royal-navy font-bold text-xs hover:text-royal-gold transition-colors uppercase tracking-widest underline underline-offset-4">
            View Mandatory Disclosures
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
