import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-royal-blue mb-4">Privacy Policy</h1>
            <p className="text-slate-600">In compliance with AICTE and UGC Guidelines</p>
          </div>

          <div className="space-y-8 text-slate-700">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-royal-gold" />
                <h2 className="text-2xl font-semibold text-royal-blue">1. Introduction</h2>
              </div>
              <p className="leading-relaxed">
                Anand Engineering College (AEC) is committed to protecting the privacy and security of the personal information of our students, faculty, staff, and visitors. This Privacy Policy outlines our practices concerning the collection, use, and protection of personal data, strictly adhering to the norms and guidelines set forth by the All India Council for Technical Education (AICTE) and the University Grants Commission (UGC).
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-royal-gold" />
                <h2 className="text-2xl font-semibold text-royal-blue">2. Information Collection</h2>
              </div>
              <p className="leading-relaxed mb-3">We collect information necessary for academic and administrative purposes, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Admission Data:</strong> Personal details, academic records, identity proofs, and demographic data required for AICTE/UGC enrollment and AISHE reporting.</li>
                <li><strong>Academic Records:</strong> Examination results, attendance data (including biometric), and performance metrics.</li>
                <li><strong>Financial Data:</strong> Fee payment records and scholarship details (processed securely).</li>
                <li><strong>Health & Emergency:</strong> Medical history and emergency contact details for student safety on campus.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-royal-gold" />
                <h2 className="text-2xl font-semibold text-royal-blue">3. Use of Information</h2>
              </div>
              <p className="leading-relaxed mb-3">The collected data is utilized exclusively for institutional purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Facilitating the academic curriculum and examination processes.</li>
                <li>Mandatory reporting to statutory bodies like AICTE, UGC, and Dr. A.P.J. Abdul Kalam Technical University (AKTU).</li>
                <li>Managing scholarships, grants, and financial aid.</li>
                <li>Ensuring campus security and managing grievance redressal mechanisms.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-royal-gold" />
                <h2 className="text-2xl font-semibold text-royal-blue">4. Data Protection & Confidentiality</h2>
              </div>
              <p className="leading-relaxed">
                AEC employs robust physical, electronic, and managerial procedures to safeguard and secure the information we collect. Access to student records is strictly restricted to authorized personnel. We do not sell, trade, or rent personal identification information to third parties. Data sharing is limited to statutory requirements mandated by the Government of India, AICTE, and UGC.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-royal-blue mb-4">5. Student Rights & Grievance Redressal</h2>
              <p className="leading-relaxed">
                Students have the right to access their personal academic records and request corrections for any inaccuracies. In case of privacy concerns or data-related grievances, students can approach the Institutional Grievance Redressal Committee (IGRC) established as per UGC (Grievance Redressal) Regulations.
              </p>
            </section>

            <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-500">
              <p>Last updated: March 2026. This policy is subject to periodic review to ensure ongoing compliance with evolving AICTE, UGC, and governmental data protection regulations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
