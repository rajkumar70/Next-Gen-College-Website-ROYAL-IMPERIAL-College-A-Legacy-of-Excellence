import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, Shield, Utensils, Wifi, Activity, Coffee } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const capacityData = [
  { type: 'Boys Hostel A', capacity: 400, occupied: 380 },
  { type: 'Boys Hostel B', capacity: 500, occupied: 450 },
  { type: 'Girls Hostel A', capacity: 350, occupied: 340 },
  { type: 'Girls Hostel B', capacity: 450, occupied: 400 },
  { type: 'PG Residence', capacity: 200, occupied: 180 },
];

const amenities = [
  { icon: <Shield size={24} />, title: '24/7 Security', desc: 'CCTV surveillance and round-the-clock security personnel.' },
  { icon: <Utensils size={24} />, title: 'Hygienic Mess', desc: 'Nutritious meals prepared in modern, mechanized kitchens.' },
  { icon: <Wifi size={24} />, title: 'High-Speed Wi-Fi', desc: 'Dedicated internet connectivity in all rooms.' },
  { icon: <Activity size={24} />, title: 'Recreation Rooms', desc: 'Indoor games, TV, and reading rooms for relaxation.' },
  { icon: <Coffee size={24} />, title: 'Cafeteria', desc: 'Late-night canteen facilities for midnight cravings.' },
  { icon: <Home size={24} />, title: 'Laundry Service', desc: 'In-house mechanized laundry and ironing services.' },
];

export default function HostelFacilities() {
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
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop" 
            alt="Hostel" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Hostel Facilities</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            A home away from home. Safe, comfortable, and conducive to academic excellence and personal growth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-3xl font-serif font-bold text-royal-navy mb-8">Accommodation Capacity</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={capacityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="type" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} />
                  <Legend />
                  <Bar dataKey="capacity" fill="#1e3a8a" name="Total Capacity" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="occupied" fill="#d4af37" name="Currently Occupied" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif font-bold text-royal-navy mb-8">Amenities & Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-royal-navy mb-4">
                    {amenity.icon}
                  </div>
                  <h3 className="text-lg font-bold text-royal-navy mb-2">{amenity.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{amenity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-royal-navy text-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-serif font-bold mb-6">Fee Structure (Annual)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/80">Triple Seater (Non-AC)</span>
                <span className="font-bold text-royal-gold">₹85,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/80">Double Seater (Non-AC)</span>
                <span className="font-bold text-royal-gold">₹1,05,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/80">Double Seater (AC)</span>
                <span className="font-bold text-royal-gold">₹1,45,000</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-white/80">Mess Charges</span>
                <span className="font-bold text-royal-gold">₹45,000</span>
              </div>
            </div>
            <p className="text-xs text-white/50 mt-6 italic">* Fees are subject to revision as per management decision.</p>
            <Link to="/admissions" className="mt-8 w-full py-4 gold-gradient text-royal-navy font-bold rounded-lg hover:scale-105 transition-transform inline-block text-center">
              APPLY FOR HOSTEL
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-royal-navy mb-4">Rules & Regulations</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Strict adherence to in-time (9:00 PM for Girls, 10:00 PM for Boys).</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Zero tolerance policy towards ragging and substance abuse.</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
                <p>Prior permission required for night-outs and leaves.</p>
              </li>
            </ul>
            <Link to="/disclosures" className="mt-6 text-royal-navy font-bold text-sm hover:text-royal-gold transition-colors flex items-center gap-1">
              Download Rulebook <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
