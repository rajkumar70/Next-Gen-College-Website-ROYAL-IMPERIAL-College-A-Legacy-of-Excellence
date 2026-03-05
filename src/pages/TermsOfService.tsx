import React from 'react';
import { Scale, BookOpen, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-royal-blue mb-4">Terms of Service & Code of Conduct</h1>
            <p className="text-slate-600">Governed by AICTE and UGC Regulations</p>
          </div>

          <div className="space-y-8 text-slate-700">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-royal-gold" />
                <h2 className="text-2xl font-semibold text-royal-blue">1. General Terms</h2>
              </div>
              <p className="leading-relaxed">
                By enrolling at Anand Engineering College (AEC), students agree to abide by the rules, regulations, and statutes of the college, Dr. A.P.J. Abdul Kalam Technical University (AKTU), the All India Council for Technical Education (AICTE), and the University Grants Commission (UGC). The institution reserves the right to modify these terms in accordance with statutory directives.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-semibold text-royal-blue">2. Anti-Ragging Policy</h2>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-red-800 font-medium">Zero Tolerance for Ragging</p>
                <p className="text-red-700 text-sm mt-1">Strictly adhering to the UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009.</p>
              </div>
              <p className="leading-relaxed mb-3">
                Ragging in any form is strictly prohibited inside and outside the campus. Any student found guilty of ragging or abetting ragging will face severe disciplinary action, which may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellation of admission and suspension from attending classes.</li>
                <li>Withholding/withdrawing scholarship/fellowship and other benefits.</li>
                <li>Debarring from appearing in any test/examination.</li>
                <li>Filing of an FIR with local police as mandated by the Supreme Court of India.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-royal-gold" />
                <h2 className="text-2xl font-semibold text-royal-blue">3. Academic Requirements & Attendance</h2>
              </div>
              <p className="leading-relaxed mb-3">As per AICTE and university norms, academic rigor is strictly maintained:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Minimum Attendance:</strong> A minimum of 75% attendance in lectures, tutorials, and practicals is mandatory to be eligible to appear for the end-semester university examinations.</li>
                <li><strong>Academic Integrity:</strong> Plagiarism, cheating in examinations, and fabrication of project data are serious offenses leading to disciplinary action under the Unfair Means (UFM) rules.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-royal-gold" />
                <h2 className="text-2xl font-semibold text-royal-blue">4. Fee Payment & Refund Policy</h2>
              </div>
              <p className="leading-relaxed">
                All tuition and hostel fees must be paid within the stipulated deadlines. The college strictly follows the fee refund policy as prescribed by the AICTE Approval Process Handbook and UGC guidelines. In the event of a student withdrawing before the starting of the course, the waitlisted candidate will be given admission, and the fee collected will be refunded after a deduction of the processing fee as per AICTE norms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-royal-blue mb-4">5. Campus Code of Conduct</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Students must wear their ID cards at all times within the campus.</li>
                <li>Use of mobile phones in classrooms, laboratories, and the library is strictly prohibited.</li>
                <li>Consumption of alcohol, tobacco, and narcotic substances is banned on campus and in hostels.</li>
                <li>Students must respect the college property; any damage caused will be recovered from the responsible individuals.</li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
