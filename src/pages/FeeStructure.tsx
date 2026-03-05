import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CreditCard, FileText, Download, Info } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const feeData = [
  { category: 'Tuition Fee', amount: 120000, color: '#1e3a8a' },
  { category: 'Development Fee', amount: 18000, color: '#d4af37' },
  { category: 'University Exam Fee', amount: 5000, color: '#0f172a' },
  { category: 'Library & Lab Fee', amount: 10000, color: '#64748b' },
  { category: 'Student Activity Fee', amount: 3000, color: '#94a3b8' },
];

export default function FeeStructure() {
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
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop" 
            alt="Finance" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Fee Structure</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Transparent and approved fee structure as per the State Fee Regulatory Committee and AICTE guidelines for the academic year 2026-27.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-royal-navy mb-8">B.Tech Annual Fee Breakdown</h2>
            <div className="h-[400px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={feeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `₹${value / 1000}k`} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} formatter={(value) => `₹${new Intl.NumberFormat('en-IN').format(value as number)}`} />
                  <Bar dataKey="amount" fill="#1e3a8a" radius={[4, 4, 0, 0]} name="Amount (INR)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold text-royal-navy mb-8">Detailed Fee Table (Per Annum)</h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider">
                    <th className="p-4 rounded-tl-lg font-semibold">Particulars</th>
                    <th className="p-4 font-semibold text-right">B.Tech (₹)</th>
                    <th className="p-4 font-semibold text-right">M.Tech (₹)</th>
                    <th className="p-4 rounded-tr-lg font-semibold text-right">MBA (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-medium text-slate-800">Tuition Fee</td>
                    <td className="p-4 text-slate-600 text-right">1,20,000</td>
                    <td className="p-4 text-slate-600 text-right">90,000</td>
                    <td className="p-4 text-slate-600 text-right">1,50,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-medium text-slate-800">Development Fee</td>
                    <td className="p-4 text-slate-600 text-right">18,000</td>
                    <td className="p-4 text-slate-600 text-right">13,500</td>
                    <td className="p-4 text-slate-600 text-right">22,500</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-medium text-slate-800">University Exam Fee</td>
                    <td className="p-4 text-slate-600 text-right">5,000</td>
                    <td className="p-4 text-slate-600 text-right">5,000</td>
                    <td className="p-4 text-slate-600 text-right">5,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-medium text-slate-800">Library & Lab Fee</td>
                    <td className="p-4 text-slate-600 text-right">10,000</td>
                    <td className="p-4 text-slate-600 text-right">10,000</td>
                    <td className="p-4 text-slate-600 text-right">10,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-medium text-slate-800">Student Activity Fee</td>
                    <td className="p-4 text-slate-600 text-right">3,000</td>
                    <td className="p-4 text-slate-600 text-right">3,000</td>
                    <td className="p-4 text-slate-600 text-right">3,000</td>
                  </tr>
                  <tr className="bg-slate-50 font-bold text-royal-navy">
                    <td className="p-4 rounded-bl-lg">Total Annual Fee</td>
                    <td className="p-4 text-right">1,56,000</td>
                    <td className="p-4 text-right">1,21,500</td>
                    <td className="p-4 rounded-br-lg text-right">1,90,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 italic">* One-time refundable caution money of ₹10,000 is applicable for all new admissions.</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-royal-navy text-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
              <CreditCard className="text-royal-gold" />
              Payment Options
            </h3>
            <ul className="space-y-4 text-sm text-white/80 leading-relaxed mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Online Payment Gateway (Credit/Debit Card, Net Banking, UPI)</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Demand Draft in favor of "Royal Imperial College" payable at New Delhi</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>NEFT/RTGS Transfer to College Bank Account</p>
              </li>
            </ul>
            <Link to="/portal" className="w-full py-4 gold-gradient text-royal-navy font-bold rounded-lg hover:scale-105 transition-transform inline-block text-center">
              PAY FEES ONLINE
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-royal-navy mb-4 flex items-center gap-2">
              <Info className="text-royal-gold" size={20} />
              Important Notes
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Fees must be paid before the commencement of each semester.</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Late fee fine of ₹100 per day will be charged after the due date.</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Hostel and Transport fees are separate and optional.</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-royal-navy mb-4">Downloads</h3>
            <div className="space-y-3">
              <Link to="/disclosures" className="w-full py-3 px-4 border border-slate-200 rounded-lg flex items-center justify-between hover:border-royal-gold hover:text-royal-navy transition-colors group">
                <span className="font-medium text-slate-700 group-hover:text-royal-navy text-sm">Fee Structure PDF</span>
                <Download size={18} className="text-slate-400 group-hover:text-royal-gold" />
              </Link>
              <Link to="/disclosures" className="w-full py-3 px-4 border border-slate-200 rounded-lg flex items-center justify-between hover:border-royal-gold hover:text-royal-navy transition-colors group">
                <span className="font-medium text-slate-700 group-hover:text-royal-navy text-sm">Refund Policy</span>
                <FileText size={18} className="text-slate-400 group-hover:text-royal-gold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
