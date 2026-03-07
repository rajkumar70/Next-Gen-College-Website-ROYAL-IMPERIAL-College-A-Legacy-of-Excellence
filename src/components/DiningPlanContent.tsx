import React, { useState } from 'react';
import { CreditCard, Utensils, Coffee, Clock, AlertCircle, PlusCircle, CheckCircle } from 'lucide-react';

const diningLocations = [
  { id: 1, name: 'Main Dining Hall', type: 'All-You-Care-To-Eat', status: 'Open', hours: '7:00 AM - 9:00 PM', capacity: '75% Full', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=300&auto=format&fit=crop' },
  { id: 2, name: 'Tech Cafe', type: 'Grab & Go', status: 'Open', hours: '8:00 AM - 10:00 PM', capacity: '30% Full', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=300&auto=format&fit=crop' },
  { id: 3, name: 'Library Coffee Shop', type: 'Cafe', status: 'Closed', hours: '9:00 AM - 11:00 PM', capacity: '0% Full', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=300&auto=format&fit=crop' },
];

export default function DiningPlanContent() {
  const [balance, setBalance] = useState(450.25);
  const [swipes, setSwipes] = useState(12);
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [addAmount, setAddAmount] = useState('50');

  const handleAddFunds = () => {
    setBalance(prev => prev + parseFloat(addAmount));
    setShowAddFunds(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-royal-navy">Dining Plan</h1>
          <p className="text-slate-600">Manage your meal plan, view balances, and check dining hall status.</p>
        </div>
        <button onClick={() => setShowAddFunds(true)} className="px-4 py-2 bg-royal-gold text-royal-navy text-sm font-bold rounded-lg shadow-md hover:bg-royal-gold-light transition-colors flex items-center gap-2">
          <PlusCircle size={16} />
          Add Dining Dollars
        </button>
      </div>

      {/* Balances Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-royal-navy p-8 rounded-2xl text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-royal-gold/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          <div className="flex items-center justify-between mb-6 relative z-10">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <CreditCard className="text-royal-gold" size={24} />
              Dining Dollars
            </h2>
            <span className="text-sm font-medium text-white/70 bg-white/10 px-3 py-1 rounded-full">Current Balance</span>
          </div>
          <div className="text-5xl font-serif font-bold mb-4 relative z-10">${balance.toFixed(2)}</div>
          <p className="text-sm text-white/80 relative z-10">Expires at the end of the Spring semester.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          <div className="flex items-center justify-between mb-6 relative z-10">
            <h2 className="text-xl font-bold text-royal-navy flex items-center gap-2">
              <Utensils className="text-emerald-600" size={24} />
              Meal Swipes
            </h2>
            <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Remaining This Week</span>
          </div>
          <div className="text-5xl font-serif font-bold text-royal-navy mb-4 relative z-10">{swipes}</div>
          <div className="w-full bg-slate-100 rounded-full h-2 mb-2 relative z-10">
            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${(swipes / 21) * 100}%` }}></div>
          </div>
          <p className="text-sm text-slate-500 relative z-10">Resets every Sunday at midnight.</p>
        </div>
      </div>

      {/* Add Funds Modal/Overlay */}
      {showAddFunds && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95">
            <h2 className="text-2xl font-serif font-bold text-royal-navy mb-6">Add Dining Dollars</h2>
            <div className="space-y-4 mb-8">
              <label className="block text-sm font-bold text-slate-700">Select Amount</label>
              <div className="grid grid-cols-3 gap-3">
                {['25', '50', '100'].map(amt => (
                  <button 
                    key={amt}
                    onClick={() => setAddAmount(amt)}
                    className={`py-3 rounded-xl border-2 font-bold transition-colors ${addAmount === amt ? 'border-royal-navy bg-royal-navy/5 text-royal-navy' : 'border-slate-200 text-slate-600 hover:border-royal-gold/50'}`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>
              <div className="relative mt-4">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                <input 
                  type="number" 
                  value={addAmount}
                  onChange={(e) => setAddAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-royal-navy focus:ring-1 focus:ring-royal-navy font-bold text-royal-navy"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowAddFunds(false)} className="flex-1 py-3 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                Cancel
              </button>
              <button onClick={handleAddFunds} className="flex-1 py-3 bg-royal-navy text-white font-bold rounded-xl hover:bg-royal-navy/90 transition-colors shadow-md">
                Add Funds
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dining Locations */}
      <h2 className="text-2xl font-serif font-bold text-royal-navy pt-6 border-t border-slate-200">Dining Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {diningLocations.map(loc => (
          <div key={loc.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="h-40 relative overflow-hidden">
              <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className={`px-2 py-1 text-xs font-bold rounded-md flex items-center gap-1 ${loc.status === 'Open' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                  {loc.status === 'Open' ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                  {loc.status}
                </span>
                <span className="px-2 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-md">
                  {loc.type}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-royal-navy mb-2 group-hover:text-royal-gold transition-colors">{loc.name}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock size={16} className="text-slate-400" />
                  {loc.hours}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Utensils size={16} className="text-slate-400" />
                  Capacity: {loc.capacity}
                </div>
              </div>
              <button disabled={loc.status === 'Closed'} className="w-full py-2 border border-slate-200 text-royal-navy font-bold rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                View Menu
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
