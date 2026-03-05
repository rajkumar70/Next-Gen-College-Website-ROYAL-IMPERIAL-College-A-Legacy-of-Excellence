import React from 'react';
import { ShieldCheck, FileText, Users, Scale, AlertTriangle, Landmark, Download, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const disclosureCategories = [
  {
    title: "AICTE/UGC Approvals",
    icon: ShieldCheck,
    documents: [
      { name: "AICTE Extension of Approval (EoA) 2025-26", size: "2.4 MB", date: "Jan 2026" },
      { name: "UGC Autonomous Status Letter", size: "1.1 MB", date: "Aug 2025" },
      { name: "AKTU Affiliation Letter", size: "850 KB", date: "Sep 2025" }
    ]
  },
  {
    title: "Accreditation Status",
    icon: Landmark,
    documents: [
      { name: "NAAC A++ Accreditation Certificate", size: "1.8 MB", date: "Mar 2025" },
      { name: "NBA Accreditation - Computer Science", size: "1.2 MB", date: "Nov 2025" },
      { name: "NBA Accreditation - Mechanical Engg", size: "1.2 MB", date: "Nov 2025" },
      { name: "NIRF Ranking Data 2025", size: "3.5 MB", date: "Feb 2026" }
    ]
  },
  {
    title: "Mandatory Committees",
    icon: Users,
    documents: [
      { name: "Anti-Ragging Committee Members & Policy", size: "500 KB", date: "Jul 2025" },
      { name: "Internal Complaints Committee (ICC)", size: "450 KB", date: "Jul 2025" },
      { name: "SC/ST Committee Details", size: "400 KB", date: "Jul 2025" },
      { name: "Student Grievance Redressal Committee", size: "600 KB", date: "Aug 2025" }
    ]
  },
  {
    title: "Financial Statements",
    icon: FileText,
    documents: [
      { name: "Audited Balance Sheet 2024-25", size: "4.2 MB", date: "Oct 2025" },
      { name: "Income & Expenditure Statement 2024-25", size: "3.1 MB", date: "Oct 2025" },
      { name: "Research Grants Utilization Report", size: "1.5 MB", date: "Dec 2025" }
    ]
  },
  {
    title: "Statutory Bodies",
    icon: Scale,
    documents: [
      { name: "Board of Governors (BoG) Composition", size: "350 KB", date: "Jan 2026" },
      { name: "Academic Council Members", size: "300 KB", date: "Jan 2026" },
      { name: "Minutes of the Last BoG Meeting", size: "1.2 MB", date: "Feb 2026" }
    ]
  },
  {
    title: "Policies & Regulations",
    icon: AlertTriangle,
    documents: [
      { name: "IT Policy & Cyber Security Guidelines", size: "800 KB", date: "May 2025" },
      { name: "Research Promotion Policy", size: "1.4 MB", date: "Jun 2025" },
      { name: "Code of Conduct for Faculty & Students", size: "900 KB", date: "Jul 2025" }
    ]
  }
];

export default function MandatoryDisclosuresPage() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-royal-navy text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-royal-gold/10 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Compliance & Transparency</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Mandatory Disclosures</h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
            In strict compliance with the regulations set forth by the All India Council for Technical Education (AICTE), 
            University Grants Commission (UGC), and Dr. A.P.J. Abdul Kalam Technical University (AKTU), we provide 
            public access to our institutional records, approvals, and policies.
          </p>
        </div>
      </div>

      {/* Disclosures Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {disclosureCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-royal-navy/5 flex items-center justify-center text-royal-navy">
                  <category.icon size={24} />
                </div>
                <h2 className="text-xl font-bold text-royal-navy">{category.title}</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {category.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-start justify-between group">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-slate-400 mt-0.5 group-hover:text-royal-gold transition-colors" />
                        <div>
                          <p className="text-slate-700 font-medium group-hover:text-royal-navy transition-colors">
                            {doc.name}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {doc.size} • Updated: {doc.date}
                          </p>
                        </div>
                      </div>
                      <button className="p-2 text-slate-400 hover:text-royal-navy hover:bg-slate-50 rounded-md transition-all">
                        <Download size={18} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Links Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-royal-navy mb-6 border-b border-slate-100 pb-4">Important Statutory Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-royal-gold hover:shadow-md transition-all group">
              <span className="font-medium text-slate-700 group-hover:text-royal-navy">AICTE Official Website</span>
              <ExternalLink size={18} className="text-slate-400 group-hover:text-royal-gold" />
            </a>
            <a href="https://www.ugc.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-royal-gold hover:shadow-md transition-all group">
              <span className="font-medium text-slate-700 group-hover:text-royal-navy">UGC Official Website</span>
              <ExternalLink size={18} className="text-slate-400 group-hover:text-royal-gold" />
            </a>
            <a href="https://aktu.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-royal-gold hover:shadow-md transition-all group">
              <span className="font-medium text-slate-700 group-hover:text-royal-navy">AKTU Official Website</span>
              <ExternalLink size={18} className="text-slate-400 group-hover:text-royal-gold" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
