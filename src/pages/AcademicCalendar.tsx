import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, BookOpen, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const scheduleData = [
  { event: 'Commencement of Classes', odd: 'Aug 1, 2026', even: 'Jan 15, 2027' },
  { event: 'Mid-Term Examinations', odd: 'Oct 5-10, 2026', even: 'Mar 15-20, 2027' },
  { event: 'Last Working Day', odd: 'Nov 30, 2026', even: 'May 10, 2027' },
  { event: 'Practical Examinations', odd: 'Dec 1-10, 2026', even: 'May 12-22, 2027' },
  { event: 'Theory Examinations', odd: 'Dec 12-30, 2026', even: 'May 25 - Jun 15, 2027' },
  { event: 'Winter/Summer Vacation', odd: 'Jan 1-14, 2027', even: 'Jun 16 - Jul 31, 2027' },
];

const workingDaysData = [
  { month: 'Aug', days: 22 },
  { month: 'Sep', days: 24 },
  { month: 'Oct', days: 20 },
  { month: 'Nov', days: 24 },
  { month: 'Dec', days: 10 },
];

export default function AcademicCalendar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 bg-slate-50"
    >
      <div className="bg-royal-navy text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Academic Calendar 2026-27</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Structured in accordance with AICTE guidelines, ensuring a minimum of 90 working days per semester for optimal academic delivery.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-serif font-bold text-royal-navy mb-6 flex items-center gap-2">
              <Calendar className="text-royal-gold" />
              Semester Schedule
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider">
                    <th className="p-4 rounded-tl-lg font-semibold">Academic Event</th>
                    <th className="p-4 font-semibold">Odd Semester</th>
                    <th className="p-4 rounded-tr-lg font-semibold">Even Semester</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {scheduleData.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 font-medium text-slate-800">{item.event}</td>
                      <td className="p-4 text-slate-600">{item.odd}</td>
                      <td className="p-4 text-slate-600">{item.even}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-serif font-bold text-royal-navy mb-6">Working Days Distribution (Odd Sem)</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={workingDaysData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} />
                  <Bar dataKey="days" fill="#1e3a8a" radius={[4, 4, 0, 0]} name="Working Days" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-slate-500 mt-4">Total Working Days: 100 (Exceeds AICTE minimum of 90 days)</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-royal-navy text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="text-royal-gold" size={20} />
              Important Guidelines
            </h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>75% attendance is mandatory as per AICTE norms to appear for end-semester examinations.</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Continuous Internal Evaluation (CIE) carries 40% weightage.</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Semester End Examination (SEE) carries 60% weightage.</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-royal-navy mb-4">Download Resources</h3>
            <div className="space-y-3">
              <Link to="/disclosures" className="w-full py-3 px-4 border border-slate-200 rounded-lg flex items-center justify-between hover:border-royal-gold hover:text-royal-navy transition-colors group">
                <span className="font-medium text-slate-700 group-hover:text-royal-navy">Full Calendar PDF</span>
                <BookOpen size={18} className="text-slate-400 group-hover:text-royal-gold" />
              </Link>
              <Link to="/disclosures" className="w-full py-3 px-4 border border-slate-200 rounded-lg flex items-center justify-between hover:border-royal-gold hover:text-royal-navy transition-colors group">
                <span className="font-medium text-slate-700 group-hover:text-royal-navy">Holiday List 2026</span>
                <Calendar size={18} className="text-slate-400 group-hover:text-royal-gold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
