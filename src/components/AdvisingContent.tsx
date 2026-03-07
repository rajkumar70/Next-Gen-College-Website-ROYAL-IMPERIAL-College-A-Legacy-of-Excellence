import React, { useState } from 'react';
import { Calendar, Clock, Video, MessageSquare, User, CheckCircle } from 'lucide-react';

const advisors = [
  { id: 1, name: 'Dr. Sarah Jenkins', role: 'Academic Advisor', department: 'Computer Science', availability: 'Mon, Wed, Fri', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop' },
  { id: 2, name: 'Prof. Michael Chen', role: 'Career Counselor', department: 'Career Services', availability: 'Tue, Thu', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop' },
  { id: 3, name: 'Dr. Emily Rodriguez', role: 'Research Mentor', department: 'AI & Machine Learning', availability: 'Wed, Fri', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop' },
];

export default function AdvisingContent() {
  const [selectedAdvisor, setSelectedAdvisor] = useState<number | null>(null);
  const [bookingStep, setBookingStep] = useState(1); // 1: Select Advisor, 2: Select Time, 3: Confirm

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-royal-navy">Academic Advising</h1>
          <p className="text-slate-600">Schedule appointments with your academic advisors and career counselors.</p>
        </div>
        <button className="px-4 py-2 bg-royal-navy text-white text-sm font-bold rounded-lg shadow-md hover:bg-royal-navy/90 transition-colors flex items-center gap-2">
          <Calendar size={16} />
          My Appointments
        </button>
      </div>

      {bookingStep === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.map(advisor => (
            <div key={advisor.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <img src={advisor.image} alt={advisor.name} className="w-16 h-16 rounded-full object-cover border-2 border-royal-gold/30" />
                <div>
                  <h3 className="text-lg font-bold text-royal-navy group-hover:text-royal-gold transition-colors">{advisor.name}</h3>
                  <p className="text-sm font-medium text-slate-500">{advisor.role}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <User size={16} className="text-royal-navy/50" />
                  {advisor.department}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock size={16} className="text-royal-navy/50" />
                  Available: {advisor.availability}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => { setSelectedAdvisor(advisor.id); setBookingStep(2); }}
                  className="flex-1 py-2 bg-royal-navy text-white text-sm font-bold rounded-lg hover:bg-royal-navy/90 transition-colors"
                >
                  Schedule
                </button>
                <button className="p-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                  <MessageSquare size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {bookingStep === 2 && selectedAdvisor && (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
            <h2 className="text-2xl font-serif font-bold text-royal-navy">Select a Time</h2>
            <button onClick={() => setBookingStep(1)} className="text-sm font-bold text-royal-gold hover:text-royal-navy transition-colors">Back to Advisors</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-bold text-royal-navy mb-4">Available Dates</h3>
              <div className="space-y-2">
                {['Oct 24, 2024', 'Oct 26, 2024', 'Oct 28, 2024'].map((date, i) => (
                  <button key={i} className={`w-full text-left px-4 py-3 rounded-xl border font-medium transition-colors ${i === 0 ? 'border-royal-navy bg-royal-navy/5 text-royal-navy' : 'border-slate-200 text-slate-600 hover:border-royal-gold/50'}`}>
                    {date}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-royal-navy mb-4">Available Times</h3>
              <div className="grid grid-cols-2 gap-2">
                {['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map((time, i) => (
                  <button key={i} className={`px-3 py-2 rounded-lg border text-sm font-bold transition-colors ${i === 1 ? 'border-royal-navy bg-royal-navy text-white' : 'border-slate-200 text-slate-600 hover:border-royal-gold/50'}`}>
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="font-bold text-royal-navy mb-4">Meeting Type</h3>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 p-3 border border-royal-navy bg-royal-navy/5 rounded-xl cursor-pointer flex-1">
                <input type="radio" name="meetingType" defaultChecked className="text-royal-navy focus:ring-royal-navy" />
                <Video size={18} className="text-royal-navy" />
                <span className="font-bold text-royal-navy text-sm">Virtual (Zoom)</span>
              </label>
              <label className="flex items-center gap-2 p-3 border border-slate-200 rounded-xl cursor-pointer flex-1 hover:border-royal-gold/50 transition-colors">
                <input type="radio" name="meetingType" className="text-royal-navy focus:ring-royal-navy" />
                <User size={18} className="text-slate-500" />
                <span className="font-bold text-slate-600 text-sm">In-Person</span>
              </label>
            </div>
          </div>
          
          <button onClick={() => setBookingStep(3)} className="w-full py-3 bg-royal-navy text-white font-bold rounded-xl hover:bg-royal-navy/90 transition-colors shadow-md">
            Confirm Appointment
          </button>
        </div>
      )}

      {bookingStep === 3 && (
        <div className="bg-white p-12 rounded-2xl border border-slate-200 shadow-sm max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-royal-navy mb-4">Appointment Confirmed!</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            Your advising session with {advisors.find(a => a.id === selectedAdvisor)?.name} has been scheduled for <strong>Oct 24, 2024 at 10:30 AM</strong>. A calendar invite has been sent to your student email.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => { setBookingStep(1); setSelectedAdvisor(null); }} className="px-6 py-2 border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-slate-50 transition-colors">
              Book Another
            </button>
            <button onClick={() => { setBookingStep(1); setSelectedAdvisor(null); }} className="px-6 py-2 bg-royal-navy text-white font-bold rounded-lg hover:bg-royal-navy/90 transition-colors">
              View My Schedule
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
