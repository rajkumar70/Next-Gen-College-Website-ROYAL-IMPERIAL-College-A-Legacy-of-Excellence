import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, CreditCard, FileText, AlertCircle, Lock } from 'lucide-react';

export default function ExamRegistrationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    semester: 'Fall 2026',
    examCenter: 'Main Campus',
    exams: [] as string[],
    paymentMethod: 'credit_card',
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardName: '',
    billingAddress: ''
  });

  const availableExams = [
    { id: 'CS410', name: 'Artificial Intelligence', date: 'Dec 10, 2026', fee: 50 },
    { id: 'CS415', name: 'Computer Vision', date: 'Dec 12, 2026', fee: 50 },
    { id: 'HU305', name: 'Modern Philosophy', date: 'Dec 14, 2026', fee: 50 },
    { id: 'MA301', name: 'Probability Theory', date: 'Dec 16, 2026', fee: 50 },
    { id: 'PH201', name: 'Quantum Physics', date: 'Dec 18, 2026', fee: 50 },
  ];

  const handleExamToggle = (examId: string) => {
    setFormData(prev => ({
      ...prev,
      exams: prev.exams.includes(examId)
        ? prev.exams.filter(id => id !== examId)
        : [...prev.exams, examId]
    }));
  };

  const calculateTotalFee = () => {
    const examFee = formData.exams.reduce((total, examId) => {
      const exam = availableExams.find(e => e.id === examId);
      return total + (exam?.fee || 0);
    }, 0);
    const processingFee = 15; // Base processing fee
    return examFee + processingFee;
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setStep(4);
    }, 1500);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-royal-navy mb-6">Exam Registration</h2>
        
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 -z-10 rounded-full"></div>
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-royal-gold -z-10 rounded-full transition-all duration-500"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          ></div>
          
          {[1, 2, 3, 4].map((s) => (
            <div 
              key={s}
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                step >= s ? 'bg-royal-gold text-royal-navy' : 'bg-slate-200 text-slate-500'
              }`}
            >
              {step > s ? <CheckCircle size={16} /> : s}
            </div>
          ))}
        </div>

        {/* Step 1: Details */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h3 className="font-bold text-lg text-royal-navy border-b border-slate-100 pb-2">1. Exam Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Semester</label>
                <select 
                  value={formData.semester}
                  onChange={(e) => setFormData({...formData, semester: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-royal-gold/20 outline-none"
                >
                  <option value="Fall 2026">Fall 2026</option>
                  <option value="Spring 2027">Spring 2027</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Exam Center</label>
                <select 
                  value={formData.examCenter}
                  onChange={(e) => setFormData({...formData, examCenter: e.target.value})}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-royal-gold/20 outline-none"
                >
                  <option value="Main Campus">Main Campus</option>
                  <option value="North Campus">North Campus</option>
                  <option value="South Campus">South Campus</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button 
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-royal-navy text-white font-bold rounded-xl hover:bg-royal-navy/90 transition-colors"
              >
                Next: Select Exams
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Exam Selection */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h3 className="font-bold text-lg text-royal-navy border-b border-slate-100 pb-2">2. Select Exams</h3>
            <div className="space-y-3">
              {availableExams.map(exam => (
                <label key={exam.id} className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${
                  formData.exams.includes(exam.id) ? 'border-royal-gold bg-royal-gold/5' : 'border-slate-200 hover:border-slate-300'
                }`}>
                  <div className="flex items-center gap-4">
                    <input 
                      type="checkbox" 
                      checked={formData.exams.includes(exam.id)}
                      onChange={() => handleExamToggle(exam.id)}
                      className="w-5 h-5 text-royal-gold rounded focus:ring-royal-gold"
                    />
                    <div>
                      <p className="font-bold text-royal-navy">{exam.code || exam.id} - {exam.name}</p>
                      <p className="text-sm text-slate-500">Date: {exam.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-royal-navy">${exam.fee}</p>
                    <p className="text-xs text-slate-500">Exam Fee</p>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex justify-between pt-4">
              <button 
                onClick={() => setStep(1)}
                className="px-6 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors"
              >
                Back
              </button>
              <button 
                onClick={() => setStep(3)}
                disabled={formData.exams.length === 0}
                className="px-6 py-3 bg-royal-navy text-white font-bold rounded-xl hover:bg-royal-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next: Billing
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Billing & Payment */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h3 className="font-bold text-lg text-royal-navy border-b border-slate-100 pb-2">3. Billing & Payment</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Fee Breakdown */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-fit">
                <h4 className="font-bold text-royal-navy mb-4">Fee Breakdown</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Processing Fee</span>
                    <span className="font-medium">$15.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Exam Fees ({formData.exams.length} exams)</span>
                    <span className="font-medium">
                      ${formData.exams.reduce((sum, id) => sum + (availableExams.find(e => e.id === id)?.fee || 0), 0).toFixed(2)}
                    </span>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200 flex justify-between items-center">
                    <span className="font-bold text-royal-navy text-lg">Total Amount Due</span>
                    <span className="font-bold text-royal-navy text-2xl">${calculateTotalFee().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <form onSubmit={handlePayment} className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-700 mb-3 text-sm">Select Payment Method</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <label className={`flex flex-col items-center gap-2 p-3 border rounded-xl cursor-pointer transition-all ${
                      formData.paymentMethod === 'credit_card' ? 'border-royal-gold bg-royal-gold/5 ring-1 ring-royal-gold' : 'border-slate-200 hover:border-slate-300'
                    }`}>
                      <input type="radio" name="payment" value="credit_card" checked={formData.paymentMethod === 'credit_card'} onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})} className="hidden" />
                      <CreditCard className={formData.paymentMethod === 'credit_card' ? 'text-royal-gold' : 'text-slate-400'} size={20} />
                      <span className="font-medium text-xs">Card</span>
                    </label>
                    <label className={`flex flex-col items-center gap-2 p-3 border rounded-xl cursor-pointer transition-all ${
                      formData.paymentMethod === 'bank_transfer' ? 'border-royal-gold bg-royal-gold/5 ring-1 ring-royal-gold' : 'border-slate-200 hover:border-slate-300'
                    }`}>
                      <input type="radio" name="payment" value="bank_transfer" checked={formData.paymentMethod === 'bank_transfer'} onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})} className="hidden" />
                      <FileText className={formData.paymentMethod === 'bank_transfer' ? 'text-royal-gold' : 'text-slate-400'} size={20} />
                      <span className="font-medium text-xs">Bank Transfer</span>
                    </label>
                    <label className={`flex flex-col items-center gap-2 p-3 border rounded-xl cursor-pointer transition-all ${
                      formData.paymentMethod === 'financial_aid' ? 'border-royal-gold bg-royal-gold/5 ring-1 ring-royal-gold' : 'border-slate-200 hover:border-slate-300'
                    }`}>
                      <input type="radio" name="payment" value="financial_aid" checked={formData.paymentMethod === 'financial_aid'} onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})} className="hidden" />
                      <AlertCircle className={formData.paymentMethod === 'financial_aid' ? 'text-royal-gold' : 'text-slate-400'} size={20} />
                      <span className="font-medium text-xs">Financial Aid</span>
                    </label>
                  </div>
                </div>

                {formData.paymentMethod === 'credit_card' && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Cardholder Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.cardName}
                        onChange={(e) => setFormData({...formData, cardName: e.target.value})}
                        placeholder="John Doe"
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-royal-gold/20 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                          type="text" 
                          required
                          maxLength={19}
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({...formData, cardNumber: e.target.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim()})}
                          placeholder="0000 0000 0000 0000"
                          className="w-full pl-10 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-royal-gold/20 outline-none font-mono"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Expiry Date</label>
                        <input 
                          type="text" 
                          required
                          maxLength={5}
                          value={formData.expiry}
                          onChange={(e) => setFormData({...formData, expiry: e.target.value.replace(/\W/gi, '').replace(/(.{2})/, '$1/').trim()})}
                          placeholder="MM/YY"
                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-royal-gold/20 outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">CVV</label>
                        <input 
                          type="text" 
                          required
                          maxLength={4}
                          value={formData.cvv}
                          onChange={(e) => setFormData({...formData, cvv: e.target.value.replace(/\D/g, '')})}
                          placeholder="123"
                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-royal-gold/20 outline-none font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Billing Address</label>
                      <input 
                        type="text" 
                        required
                        value={formData.billingAddress}
                        onChange={(e) => setFormData({...formData, billingAddress: e.target.value})}
                        placeholder="123 University Ave, City, State, ZIP"
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-royal-gold/20 outline-none"
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-4 border-t border-slate-100">
                  <button 
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors flex items-center gap-2"
                  >
                    <Lock size={16} /> Pay ${calculateTotalFee().toFixed(2)}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="text-center py-12 animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-2xl font-bold text-royal-navy mb-2">Registration Successful!</h3>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Your exam registration for {formData.semester} has been confirmed. A receipt has been sent to your student email.
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 max-w-sm mx-auto text-left mb-8">
              <p className="text-sm text-slate-500 mb-1">Registration ID</p>
              <p className="font-mono font-bold text-royal-navy mb-4">EXM-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              <p className="text-sm text-slate-500 mb-1">Amount Paid</p>
              <p className="font-bold text-emerald-600">${calculateTotalFee().toFixed(2)}</p>
            </div>
            <button 
              onClick={() => {
                setStep(1);
                setFormData({...formData, exams: []});
              }}
              className="px-6 py-3 bg-slate-100 text-royal-navy font-bold rounded-xl hover:bg-slate-200 transition-colors"
            >
              Start New Registration
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
