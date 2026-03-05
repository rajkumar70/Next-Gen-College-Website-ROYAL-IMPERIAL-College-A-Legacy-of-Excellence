import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, Users, Scale, AlertTriangle, Landmark } from 'lucide-react';

const disclosures = [
  { title: "AICTE/UGC Approvals", icon: ShieldCheck, desc: "Extension of Approval (EoA) letters for all courses." },
  { title: "Accreditation Status", icon: Landmark, desc: "NAAC A++, NBA, and NIRF ranking data reports." },
  { title: "Mandatory Committees", icon: Users, desc: "Anti-Ragging, ICC, and Student Grievance cells." },
  { title: "Financial Statements", icon: FileText, desc: "Audited balance sheets and annual financial reports." },
  { title: "Statutory Bodies", icon: Scale, desc: "University Act, Statutes, and Governing Body details." },
  { title: "Grievance Redressal", icon: AlertTriangle, desc: "Online portal for student and faculty complaints." },
];

export default function MandatoryDisclosures() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-royal-navy/[0.02] -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Compliance & Transparency</span>
            <h2 className="text-4xl md:text-5xl font-serif text-royal-navy mb-6">Mandatory Disclosures</h2>
            <p className="text-royal-navy/60 text-lg leading-relaxed">
              In accordance with the guidelines of UGC and AICTE, we maintain full transparency 
              regarding our institutional approvals, committees, and financial standing.
            </p>
          </div>
          <Link to="/disclosures" className="px-8 py-4 border-2 border-royal-navy text-royal-navy font-bold hover:bg-royal-navy hover:text-white transition-all inline-block">
            VIEW ALL DOCUMENTS
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disclosures.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-white border border-royal-navy/10 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-sm bg-royal-navy/5 flex items-center justify-center mb-6 group-hover:gold-gradient transition-colors">
                <item.icon className="text-royal-navy group-hover:text-royal-navy" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-royal-navy mb-3">{item.title}</h3>
              <p className="text-royal-navy/50 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <Link to="/disclosures" className="text-royal-gold font-bold text-xs tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all inline-flex">
                Access Portal <div className="w-8 h-[1px] bg-royal-gold" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
