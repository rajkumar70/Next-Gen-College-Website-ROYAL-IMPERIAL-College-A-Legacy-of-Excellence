import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Upload, CheckCircle, AlertCircle, Printer, FileText } from 'lucide-react';

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');
  
  const [formData, setFormData] = useState({
    level: '',
    program: '',
    fullName: '',
    dob: '',
    gender: '',
    category: '',
    nationality: 'Indian',
    email: '',
    mobile: '',
    address: '',
    board10: '',
    year10: '',
    score10: '',
    board12: '',
    year12: '',
    score12: ''
  });

  const [files, setFiles] = useState({
    photo: null as File | null,
    marksheet10: null as File | null,
    marksheet12: null as File | null,
    idProof: null as File | null
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: keyof typeof files) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFiles(prev => ({ ...prev, [type]: file }));
      
      if (type === 'photo') {
        const url = URL.createObjectURL(file);
        setPhotoPreview(url);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `APP-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppId(generatedId);
    setSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-32 pb-24 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200 relative overflow-hidden print:shadow-none print:border-none print:p-0">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <span className="text-9xl font-serif font-bold text-royal-navy transform -rotate-45 whitespace-nowrap">ROYAL IMPERIAL</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-royal-navy pb-8 mb-8 relative z-10">
              <div className="flex items-center gap-4 mb-6 md:mb-0">
                <div className="w-16 h-16 gold-gradient rounded-sm flex items-center justify-center shadow-lg">
                  <span className="text-royal-navy font-serif font-bold text-3xl">R</span>
                </div>
                <div>
                  <h1 className="text-2xl font-serif font-bold text-royal-navy">ROYAL IMPERIAL</h1>
                  <p className="text-xs uppercase tracking-[0.2em] text-royal-gold font-bold">College of Excellence</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-1">Application ID</p>
                <p className="text-2xl font-mono text-royal-navy font-bold">{appId}</p>
                <p className="text-xs text-green-600 font-bold mt-2 flex items-center justify-end gap-1">
                  <CheckCircle size={12} /> STATUS: SUBMITTED
                </p>
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-12 relative z-10">
              <div className="flex-1 space-y-8">
                <section>
                  <h3 className="text-sm font-bold text-royal-gold uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Program Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Level of Study</p>
                      <p className="font-medium text-royal-navy">{formData.level.toUpperCase()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Program/Course</p>
                      <p className="font-medium text-royal-navy">{formData.program.replace('_', ' ').toUpperCase()}</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-bold text-royal-gold uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Personal Details</h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <div className="col-span-2">
                      <p className="text-xs text-gray-500 uppercase">Full Name</p>
                      <p className="font-medium text-royal-navy text-lg">{formData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Date of Birth</p>
                      <p className="font-medium text-royal-navy">{formData.dob}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Gender</p>
                      <p className="font-medium text-royal-navy capitalize">{formData.gender}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Category</p>
                      <p className="font-medium text-royal-navy uppercase">{formData.category}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Nationality</p>
                      <p className="font-medium text-royal-navy">{formData.nationality}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Email</p>
                      <p className="font-medium text-royal-navy">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Mobile</p>
                      <p className="font-medium text-royal-navy">{formData.mobile}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-gray-500 uppercase">Permanent Address</p>
                      <p className="font-medium text-royal-navy">{formData.address}</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-bold text-royal-gold uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Academic History</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 bg-gray-50 p-3 rounded-md border border-gray-100">
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase">10th Board</p>
                        <p className="font-medium text-sm text-royal-navy">{formData.board10}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase">Year</p>
                        <p className="font-medium text-sm text-royal-navy">{formData.year10}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase">Score</p>
                        <p className="font-medium text-sm text-royal-navy">{formData.score10}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 bg-gray-50 p-3 rounded-md border border-gray-100">
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase">12th Board</p>
                        <p className="font-medium text-sm text-royal-navy">{formData.board12}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase">Year</p>
                        <p className="font-medium text-sm text-royal-navy">{formData.year12}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase">Score</p>
                        <p className="font-medium text-sm text-royal-navy">{formData.score12}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="shrink-0 flex flex-col items-center">
                <div className="w-32 h-40 border-2 border-gray-300 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center mb-4">
                  {photoPreview ? (
                    <img src={photoPreview} alt="Applicant" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs text-gray-400 text-center px-2">Photo Not Uploaded</span>
                  )}
                </div>
                <div className="w-32 h-16 border-2 border-gray-300 rounded-md bg-gray-50 flex items-center justify-center">
                  <span className="text-xs text-gray-400 italic">Signature</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center print:hidden relative z-10">
              <div className="flex justify-center gap-4">
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-6 py-3 border border-royal-navy text-royal-navy font-bold rounded-sm hover:bg-gray-50 transition-colors"
                >
                  <Printer size={18} /> PRINT FORM
                </button>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setPhotoPreview(null);
                    setFiles({ photo: null, marksheet10: null, marksheet12: null, idProof: null });
                    setFormData({
                      level: '', program: '', fullName: '', dob: '', gender: '', category: '', nationality: 'Indian', email: '', mobile: '', address: '', board10: '', year10: '', score10: '', board12: '', year12: '', score12: ''
                    });
                  }}
                  className="px-6 py-3 gold-gradient text-royal-navy font-bold rounded-sm hover:scale-105 transition-transform"
                >
                  NEW APPLICATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Admissions 2026-27</span>
          <h1 className="text-4xl md:text-5xl font-serif text-royal-navy mb-6">Application Form</h1>
          <p className="text-royal-navy/60 text-lg">
            Please fill out all mandatory fields accurately. This form complies with UGC and AICTE guidelines for transparent admissions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Program Selection */}
          <section className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-serif text-royal-navy mb-6 border-b border-gray-200 pb-4">1. Program Selection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-royal-navy mb-2">Level of Study *</label>
                <select name="level" value={formData.level} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all bg-white">
                  <option value="">Select Level</option>
                  <option value="ug">Undergraduate (UG)</option>
                  <option value="pg">Postgraduate (PG)</option>
                  <option value="phd">Doctoral (Ph.D)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-royal-navy mb-2">Program/Course *</label>
                <select name="program" value={formData.program} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all bg-white">
                  <option value="">Select Program</option>
                  <option value="btech_cs">B.Tech Computer Science</option>
                  <option value="btech_ec">B.Tech Electronics</option>
                  <option value="bba">Bachelor of Business Administration</option>
                  <option value="mba">Master of Business Administration</option>
                  <option value="mca">Master of Computer Applications</option>
                </select>
              </div>
            </div>
          </section>

          {/* Personal Details */}
          <section className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-serif text-royal-navy mb-6 border-b border-gray-200 pb-4">2. Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-royal-navy mb-2">Full Name (as per 10th Certificate) *</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-royal-navy mb-2">Date of Birth *</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-royal-navy mb-2">Gender *</label>
                <select name="gender" value={formData.gender} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all bg-white">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-royal-navy mb-2">Category *</label>
                <select name="category" value={formData.category} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all bg-white">
                  <option value="">Select Category</option>
                  <option value="general">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  <option value="ews">EWS</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-royal-navy mb-2">Nationality *</label>
                <input type="text" name="nationality" value={formData.nationality} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-royal-navy mb-2">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-royal-navy mb-2">Mobile Number *</label>
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} required pattern="[0-9]{10}" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all" placeholder="10-digit mobile number" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-royal-navy mb-2">Permanent Address *</label>
                <textarea name="address" value={formData.address} onChange={handleInputChange} required rows={3} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all resize-none" placeholder="Enter your full address"></textarea>
              </div>
            </div>
          </section>

          {/* Academic History */}
          <section className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-serif text-royal-navy mb-6 border-b border-gray-200 pb-4">3. Academic History</h2>
            
            <div className="space-y-8">
              {/* 10th Standard */}
              <div>
                <h3 className="text-lg font-medium text-royal-navy mb-4">Class X (10th) Details *</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Board/University</label>
                    <input type="text" name="board10" value={formData.board10} onChange={handleInputChange} required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-royal-gold outline-none" placeholder="e.g. CBSE" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Year of Passing</label>
                    <input type="number" name="year10" value={formData.year10} onChange={handleInputChange} required min="2000" max="2026" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-royal-gold outline-none" placeholder="YYYY" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Percentage/CGPA</label>
                    <input type="text" name="score10" value={formData.score10} onChange={handleInputChange} required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-royal-gold outline-none" placeholder="e.g. 95%" />
                  </div>
                </div>
              </div>

              {/* 12th Standard */}
              <div>
                <h3 className="text-lg font-medium text-royal-navy mb-4">Class XII (12th) / Diploma Details *</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Board/University</label>
                    <input type="text" name="board12" value={formData.board12} onChange={handleInputChange} required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-royal-gold outline-none" placeholder="e.g. CBSE" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Year of Passing</label>
                    <input type="number" name="year12" value={formData.year12} onChange={handleInputChange} required min="2000" max="2026" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-royal-gold outline-none" placeholder="YYYY" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Percentage/CGPA</label>
                    <input type="text" name="score12" value={formData.score12} onChange={handleInputChange} required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-royal-gold outline-none" placeholder="e.g. 92%" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Document Uploads */}
          <section className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-serif text-royal-navy mb-6 border-b border-gray-200 pb-4">4. Document Uploads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-royal-gold transition-colors cursor-pointer bg-white block">
                {files.photo ? (
                  <div className="flex flex-col items-center">
                    <CheckCircle className="text-green-500 mb-2" size={24} />
                    <p className="text-sm font-medium text-royal-navy truncate w-full px-4">{files.photo.name}</p>
                  </div>
                ) : (
                  <>
                    <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                    <p className="text-sm font-medium text-royal-navy">Passport Size Photo *</p>
                    <p className="text-xs text-gray-500 mt-1">JPG/PNG up to 2MB</p>
                  </>
                )}
                <input type="file" required={!files.photo} accept="image/*" onChange={(e) => handleFileChange(e, 'photo')} className="hidden" />
              </label>
              
              <label className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-royal-gold transition-colors cursor-pointer bg-white block">
                {files.marksheet10 ? (
                  <div className="flex flex-col items-center">
                    <FileText className="text-blue-500 mb-2" size={24} />
                    <p className="text-sm font-medium text-royal-navy truncate w-full px-4">{files.marksheet10.name}</p>
                  </div>
                ) : (
                  <>
                    <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                    <p className="text-sm font-medium text-royal-navy">10th Marksheet *</p>
                    <p className="text-xs text-gray-500 mt-1">PDF/JPG up to 5MB</p>
                  </>
                )}
                <input type="file" required={!files.marksheet10} accept=".pdf,image/*" onChange={(e) => handleFileChange(e, 'marksheet10')} className="hidden" />
              </label>

              <label className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-royal-gold transition-colors cursor-pointer bg-white block">
                {files.marksheet12 ? (
                  <div className="flex flex-col items-center">
                    <FileText className="text-blue-500 mb-2" size={24} />
                    <p className="text-sm font-medium text-royal-navy truncate w-full px-4">{files.marksheet12.name}</p>
                  </div>
                ) : (
                  <>
                    <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                    <p className="text-sm font-medium text-royal-navy">12th Marksheet *</p>
                    <p className="text-xs text-gray-500 mt-1">PDF/JPG up to 5MB</p>
                  </>
                )}
                <input type="file" required={!files.marksheet12} accept=".pdf,image/*" onChange={(e) => handleFileChange(e, 'marksheet12')} className="hidden" />
              </label>

              <label className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-royal-gold transition-colors cursor-pointer bg-white block">
                {files.idProof ? (
                  <div className="flex flex-col items-center">
                    <FileText className="text-blue-500 mb-2" size={24} />
                    <p className="text-sm font-medium text-royal-navy truncate w-full px-4">{files.idProof.name}</p>
                  </div>
                ) : (
                  <>
                    <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                    <p className="text-sm font-medium text-royal-navy">Aadhar Card / ID Proof *</p>
                    <p className="text-xs text-gray-500 mt-1">PDF/JPG up to 5MB</p>
                  </>
                )}
                <input type="file" required={!files.idProof} accept=".pdf,image/*" onChange={(e) => handleFileChange(e, 'idProof')} className="hidden" />
              </label>
            </div>
          </section>

          {/* Declarations */}
          <section className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-serif text-royal-navy mb-6 border-b border-gray-200 pb-4">5. Declarations (UGC/AICTE Compliance)</h2>
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 w-4 h-4 text-royal-gold border-gray-300 rounded focus:ring-royal-gold" />
                <span className="text-sm text-gray-700">
                  I hereby declare that all the information provided by me in this application is true and correct to the best of my knowledge and belief.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 w-4 h-4 text-royal-gold border-gray-300 rounded focus:ring-royal-gold" />
                <span className="text-sm text-gray-700">
                  <strong>Anti-Ragging Declaration:</strong> I have read the <Link to="/disclosures" className="text-royal-navy font-bold hover:text-royal-gold underline">UGC Regulations on Curbing the Menace of Ragging</Link> in Higher Educational Institutions, 2009, and I agree to abide by them. I understand that ragging is a criminal offense.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 w-4 h-4 text-royal-gold border-gray-300 rounded focus:ring-royal-gold" />
                <span className="text-sm text-gray-700">
                  I agree to abide by the rules and regulations of Royal Imperial College and understand that my admission may be cancelled if any information is found to be false.
                </span>
              </label>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-md flex gap-3">
              <AlertCircle className="text-blue-500 shrink-0" size={20} />
              <p className="text-xs text-blue-800 leading-relaxed">
                As per AICTE/UGC guidelines, submission of this form does not guarantee admission. Admissions are subject to eligibility verification, merit list generation, and document authentication during counseling. <Link to="/disclosures" className="font-bold underline hover:text-royal-navy">View Mandatory Disclosures</Link>.
              </p>
            </div>
          </section>

          <div className="flex justify-end pt-6">
            <button type="submit" className="px-10 py-4 gold-gradient text-royal-navy font-bold rounded-sm hover:scale-105 transition-transform shadow-lg">
              SUBMIT APPLICATION
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
