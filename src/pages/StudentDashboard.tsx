import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, GraduationCap, CreditCard, 
  Library, Settings, LogOut, Bell, Calendar, Clock, 
  ChevronRight, TrendingUp, AlertCircle, Search, Menu, X,
  FileText, Users, MapPin, CheckCircle, CheckSquare, Square, Plus, Calculator, Filter, Trash2, User, Shield, Palette, Link as LinkIcon, Award, Download
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock Data
const gpaData = [
  { semester: 'Fall 23', gpa: 3.6 },
  { semester: 'Spring 24', gpa: 3.75 },
  { semester: 'Fall 24', gpa: 3.82 },
  { semester: 'Spring 25', gpa: 3.9 },
];

const todaySchedule = [
  { id: 1, time: '09:00 AM - 10:30 AM', course: 'Advanced Algorithms', code: 'CS401', room: 'Tech Block - 304', type: 'Lecture', color: 'bg-blue-500' },
  { id: 2, time: '11:00 AM - 12:30 PM', course: 'Machine Learning', code: 'CS405', room: 'Innovation Lab - 102', type: 'Lab', color: 'bg-purple-500' },
  { id: 3, time: '02:00 PM - 03:00 PM', course: 'Tech Ethics', code: 'HU201', room: 'Main Arts - 201', type: 'Seminar', color: 'bg-emerald-500' },
];

const upcomingDeadlines = [
  { id: 1, title: 'Neural Network Model Draft', course: 'CS405', due: 'Today, 11:59 PM', type: 'Assignment' },
  { id: 2, title: 'Algorithms Midterm', course: 'CS401', due: 'Tomorrow, 09:00 AM', type: 'Exam' },
  { id: 3, title: 'Ethics Essay Submission', course: 'HU201', due: 'Friday, 05:00 PM', type: 'Paper' },
];

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: BookOpen, label: 'My Courses', id: 'courses' },
  { icon: GraduationCap, label: 'Grades & Transcripts', id: 'grades' },
  { icon: Calendar, label: 'Registration', id: 'registration' },
  { icon: CreditCard, label: 'Financial Account', id: 'financial' },
  { icon: Library, label: 'Library Services', id: 'library' },
  { icon: FileText, label: 'Career Center', id: 'career' },
  { icon: Award, label: 'Certificates', id: 'certificates' },
];

import CampusMapContent from '../components/CampusMapContent';
import LibraryDBContent from '../components/LibraryDBContent';
import AdvisingContent from '../components/AdvisingContent';
import DiningPlanContent from '../components/DiningPlanContent';
import SemesterRegistrationForm from '../components/SemesterRegistrationForm';
import ExamRegistrationForm from '../components/ExamRegistrationForm';
import StudentSearchOverlay from '../components/StudentSearchOverlay';

// --- Tab Components ---

function DashboardContent({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Read Chapter 4 for OS', completed: false },
    { id: 2, text: 'Submit Math Assignment', completed: true },
    { id: 3, text: 'Email Advisor about Spring Schedule', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <>
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-royal-navy mb-2">Welcome back, Alexander! 👋</h1>
          <p className="text-slate-600">You have <strong className="text-royal-navy">2 classes</strong> and <strong className="text-royal-navy">1 assignment due</strong> today.</p>
        </div>
        <div className="flex gap-3">
          <Link to="/canvas" state={{ activeTab: 'Calendar' }} className="px-4 py-2 bg-white border border-slate-200 text-royal-navy text-sm font-bold rounded-lg shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Calendar size={16} />
            View Full Calendar
          </Link>
          <Link to="/canvas" className="px-4 py-2 bg-royal-navy text-white text-sm font-bold rounded-lg shadow-md hover:bg-royal-navy/90 transition-colors flex items-center gap-2">
            <BookOpen size={16} />
            Go to Canvas
          </Link>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <GraduationCap size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium mb-1">Cumulative GPA</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-royal-navy">3.90</h3>
              <span className="text-xs text-emerald-500 font-medium flex items-center"><TrendingUp size={12} className="mr-0.5"/> +0.08</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <BookOpen size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium mb-1">Credits Earned</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-royal-navy">96<span className="text-sm text-slate-400 font-normal">/120</span></h3>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium mb-1">Attendance</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-royal-navy">94%</h3>
              <span className="text-xs text-slate-400 font-medium">Excellent</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <CreditCard size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium mb-1">Account Balance</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-royal-navy">$0.00</h3>
              <span className="text-xs text-emerald-500 font-medium">Cleared</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Takes up 2/3 on desktop) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Today's Schedule */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-royal-navy flex items-center gap-2">
                <Clock className="text-royal-gold" size={20} />
                Today's Schedule
              </h2>
              <span className="text-sm text-slate-500 font-medium">Wednesday, Oct 24</span>
            </div>
            <div className="p-6">
              <div className="relative border-l-2 border-slate-100 ml-3 space-y-8">
                {todaySchedule.map((item) => (
                  <div key={item.id} className="relative pl-6">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white ${item.color} shadow-sm`} />
                    
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all group">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <span className="text-sm font-bold text-royal-navy">{item.time}</span>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600`}>
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-royal-navy mb-1 group-hover:text-royal-gold transition-colors">{item.course}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><BookOpen size={14} /> {item.code}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> {item.room}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Progress Chart */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-royal-navy flex items-center gap-2">
                <TrendingUp className="text-royal-gold" size={20} />
                GPA Trend
              </h2>
              <button className="text-sm text-royal-gold font-bold hover:text-royal-navy transition-colors">View Transcript</button>
            </div>
            <div className="p-6 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={gpaData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorGpa" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C5A059" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#C5A059" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="semester" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                  <YAxis domain={[3.0, 4.0]} axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ color: '#0A192F', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="gpa" stroke="#C5A059" strokeWidth={3} fillOpacity={1} fill="url(#colorGpa)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Right Column (Takes up 1/3 on desktop) */}
        <div className="space-y-8">
          
          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-lg font-bold text-royal-navy flex items-center gap-2">
                <AlertCircle className="text-red-500" size={20} />
                Action Required
              </h2>
            </div>
            <div className="p-2">
              {upcomingDeadlines.map((item) => (
                <div key={item.id} className="p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-royal-navy text-sm group-hover:text-royal-gold transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{item.course} • {item.type}</p>
                    <p className="text-xs font-bold text-red-500 mt-2 flex items-center gap-1">
                      <Clock size={12} /> Due: {item.due}
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-royal-gold self-center" />
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-slate-100 bg-slate-50">
              <button className="w-full text-sm font-bold text-royal-navy hover:text-royal-gold transition-colors text-center">
                View All Assignments
              </button>
            </div>
          </div>

          {/* Interactive To-Do List */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-royal-navy flex items-center gap-2">
                <CheckSquare className="text-emerald-500" size={20} />
                My Tasks
              </h2>
              <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
                {todos.filter(t => t.completed).length}/{todos.length} Done
              </span>
            </div>
            <div className="p-4">
              <form onSubmit={addTodo} className="flex gap-2 mb-4">
                <input 
                  type="text" 
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="Add a new task..." 
                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold"
                />
                <button type="submit" className="p-2 bg-royal-navy text-white rounded-lg hover:bg-royal-navy/90 transition-colors">
                  <Plus size={20} />
                </button>
              </form>
              <div className="space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar pr-2">
                <AnimatePresence>
                  {todos.map((todo) => (
                    <motion.div 
                      key={todo.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 group"
                    >
                      <div className="flex items-center gap-3 cursor-pointer flex-1" onClick={() => toggleTodo(todo.id)}>
                        {todo.completed ? (
                          <CheckSquare size={18} className="text-emerald-500 flex-shrink-0" />
                        ) : (
                          <Square size={18} className="text-slate-300 group-hover:text-royal-gold transition-colors flex-shrink-0" />
                        )}
                        <span className={`text-sm font-medium transition-all ${todo.completed ? 'text-slate-400 line-through' : 'text-royal-navy'}`}>
                          {todo.text}
                        </span>
                      </div>
                      <button onClick={() => deleteTodo(todo.id)} className="text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Quick Links / Resources */}
          <div className="bg-royal-navy rounded-2xl shadow-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-royal-gold/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
            <div className="p-6 border-b border-white/10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Library className="text-royal-gold" size={20} />
                Campus Resources
              </h2>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3">
              {[
                { icon: BookOpen, label: 'Library DB', id: 'library-db' },
                { icon: Users, label: 'Advising', id: 'advising' },
                { icon: MapPin, label: 'Campus Map', id: 'campus-map' },
                { icon: CreditCard, label: 'Dining Plan', id: 'dining-plan' },
              ].map((resource, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveTab(resource.id)}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-royal-gold/30 transition-all group"
                >
                  <resource.icon size={24} className="text-white/70 group-hover:text-royal-gold transition-colors" />
                  <span className="text-xs font-medium text-white/90">{resource.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

function CoursesContent() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h1 className="text-3xl font-serif font-bold text-royal-navy mb-6">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { code: 'CS401', name: 'Advanced Algorithms', prof: 'Dr. Alan Turing', credits: 4, grade: 'A' },
          { code: 'CS405', name: 'Machine Learning', prof: 'Dr. Geoffrey Hinton', credits: 4, grade: 'A-' },
          { code: 'HU201', name: 'Tech Ethics', prof: 'Dr. moral philosophy', credits: 3, grade: 'B+' },
        ].map((course, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg">{course.code}</span>
              <span className="text-sm font-bold text-slate-500">{course.credits} Credits</span>
            </div>
            <h3 className="text-xl font-bold text-royal-navy mb-2 group-hover:text-royal-gold transition-colors">{course.name}</h3>
            <p className="text-sm text-slate-500 mb-4">{course.prof}</p>
            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
              <span className="text-sm font-medium text-slate-500">Current Grade</span>
              <span className="text-lg font-bold text-emerald-600">{course.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function GradesContent() {
  const [whatIfGrades, setWhatIfGrades] = useState([
    { id: 1, course: 'CS401', credits: 4, grade: 'A' },
    { id: 2, course: 'CS405', credits: 4, grade: 'B+' },
    { id: 3, course: 'HU201', credits: 3, grade: 'A-' },
  ]);

  const gradePoints: Record<string, number> = {
    'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D': 1.0, 'F': 0.0
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    whatIfGrades.forEach(item => {
      totalPoints += (gradePoints[item.grade] || 0) * item.credits;
      totalCredits += item.credits;
    });
    return totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);
  };

  const updateGrade = (id: number, newGrade: string) => {
    setWhatIfGrades(whatIfGrades.map(g => g.id === id ? { ...g, grade: newGrade } : g));
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-3xl font-serif font-bold text-royal-navy">Grades & Transcripts</h1>
        <button className="px-4 py-2 bg-royal-navy text-white text-sm font-bold rounded-lg shadow-md hover:bg-royal-navy/90 transition-colors flex items-center gap-2">
          <FileText size={16} />
          Download Unofficial Transcript
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50">
              <h2 className="text-lg font-bold text-royal-navy">Fall 2024</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-200 text-sm text-slate-500">
                    <th className="p-4 font-medium">Course</th>
                    <th className="p-4 font-medium">Credits</th>
                    <th className="p-4 font-medium">Grade</th>
                    <th className="p-4 font-medium">Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-medium text-royal-navy">CS301 - Operating Systems</td>
                    <td className="p-4 text-slate-600">4.0</td>
                    <td className="p-4 font-bold text-emerald-600">A</td>
                    <td className="p-4 text-slate-600">16.0</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-medium text-royal-navy">CS305 - Database Systems</td>
                    <td className="p-4 text-slate-600">4.0</td>
                    <td className="p-4 font-bold text-emerald-600">A-</td>
                    <td className="p-4 text-slate-600">14.8</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-medium text-royal-navy">MA201 - Linear Algebra</td>
                    <td className="p-4 text-slate-600">3.0</td>
                    <td className="p-4 font-bold text-emerald-600">B+</td>
                    <td className="p-4 text-slate-600">9.9</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <p className="font-bold text-royal-navy">Term GPA: <span className="text-emerald-600">3.82</span></p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
            <h2 className="text-lg font-bold text-royal-navy mb-4 flex items-center gap-2">
              <Calculator className="text-royal-gold" size={20} />
              What-If Calculator
            </h2>
            <p className="text-sm text-slate-500 mb-6">Estimate your GPA for the current semester by selecting expected grades.</p>
            
            <div className="space-y-4 mb-6">
              {whatIfGrades.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div>
                    <p className="text-sm font-bold text-royal-navy">{item.course}</p>
                    <p className="text-xs text-slate-500">{item.credits} Credits</p>
                  </div>
                  <select 
                    value={item.grade}
                    onChange={(e) => updateGrade(item.id, e.target.value)}
                    className="bg-white border border-slate-200 rounded-lg px-2 py-1 text-sm font-bold text-royal-navy focus:outline-none focus:border-royal-gold"
                  >
                    {Object.keys(gradePoints).map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            
            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
              <span className="text-sm font-medium text-slate-500">Estimated Term GPA</span>
              <span className="text-2xl font-bold text-emerald-600">{calculateGPA()}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BonafideForm() {
  const [submitted, setSubmitted] = useState(false);
  
  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h2 className="text-2xl font-bold text-royal-navy mb-2">Request Submitted</h2>
        <p className="text-slate-600 mb-6">Your request for a Bonafide Certificate has been successfully submitted. You will receive an email notification once it is ready for download or collection.</p>
        <button onClick={() => setSubmitted(false)} className="px-6 py-2 bg-slate-100 text-royal-navy font-bold rounded-lg hover:bg-slate-200 transition-colors">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-royal-navy mb-6 flex items-center gap-2">
        <FileText className="text-royal-gold" size={24} />
        Request Bonafide Certificate
      </h2>
      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <input type="text" required defaultValue="John Doe" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Student ID / Roll Number</label>
            <input type="text" required defaultValue="10029384" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Program / Course</label>
            <input type="text" required defaultValue="B.Tech Computer Science" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Current Semester / Year</label>
            <select required className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold">
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Purpose of Certificate</label>
          <select required className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold">
            <option value="">Select Purpose</option>
            <option value="passport">Passport Application</option>
            <option value="visa">Visa Application</option>
            <option value="bank">Bank Loan / Account Opening</option>
            <option value="scholarship">Scholarship Application</option>
            <option value="internship">Internship / Job Application</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Additional Details (Optional)</label>
          <textarea rows={3} className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold" placeholder="Any specific information to be included..."></textarea>
        </div>
        <div className="pt-4 flex justify-end">
          <button type="submit" className="px-6 py-2 bg-royal-navy text-white font-bold rounded-lg shadow-md hover:bg-royal-navy/90 transition-colors">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
}

function RegistrationContent() {
  const [activeRegTab, setActiveRegTab] = useState('courses');
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const availableCourses = [
    { id: 101, code: 'CS410', name: 'Artificial Intelligence', credits: 4, seats: 5, prof: 'Dr. Smith' },
    { id: 102, code: 'CS415', name: 'Computer Vision', credits: 4, seats: 0, prof: 'Dr. Jones' },
    { id: 103, code: 'HU305', name: 'Modern Philosophy', credits: 3, seats: 12, prof: 'Dr. Davis' },
    { id: 104, code: 'MA301', name: 'Probability Theory', credits: 3, seats: 8, prof: 'Dr. Wilson' },
    { id: 105, code: 'PH201', name: 'Quantum Physics', credits: 4, seats: 2, prof: 'Dr. Brown' },
  ];

  const filteredCourses = availableCourses.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(wId => wId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-3xl font-serif font-bold text-royal-navy">Registration Services</h1>
        <div className="bg-royal-gold/10 text-royal-gold px-4 py-2 rounded-lg font-bold text-sm border border-royal-gold/20 flex items-center gap-2">
          <Calendar size={16} /> Spring 2026 Registration Open
        </div>
      </div>

      <div className="flex gap-4 border-b border-slate-200 mb-6 overflow-x-auto custom-scrollbar">
        <button 
          onClick={() => setActiveRegTab('courses')}
          className={`pb-3 px-2 font-bold text-sm transition-colors border-b-2 whitespace-nowrap ${activeRegTab === 'courses' ? 'border-royal-navy text-royal-navy' : 'border-transparent text-slate-500 hover:text-royal-navy'}`}
        >
          Course Registration
        </button>
        <button 
          onClick={() => setActiveRegTab('semester')}
          className={`pb-3 px-2 font-bold text-sm transition-colors border-b-2 whitespace-nowrap ${activeRegTab === 'semester' ? 'border-royal-navy text-royal-navy' : 'border-transparent text-slate-500 hover:text-royal-navy'}`}
        >
          Semester Registration
        </button>
        <button 
          onClick={() => setActiveRegTab('exam')}
          className={`pb-3 px-2 font-bold text-sm transition-colors border-b-2 whitespace-nowrap ${activeRegTab === 'exam' ? 'border-royal-navy text-royal-navy' : 'border-transparent text-slate-500 hover:text-royal-navy'}`}
        >
          Exam Registration
        </button>
        <button 
          onClick={() => setActiveRegTab('bonafide')}
          className={`pb-3 px-2 font-bold text-sm transition-colors border-b-2 whitespace-nowrap ${activeRegTab === 'bonafide' ? 'border-royal-navy text-royal-navy' : 'border-transparent text-slate-500 hover:text-royal-navy'}`}
        >
          Bonafide Certificate
        </button>
      </div>

      {activeRegTab === 'courses' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search courses by code or name..." 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 transition-all outline-none"
                />
              </div>
              <button className="px-6 py-3 bg-slate-100 text-royal-navy font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                <Filter size={18} /> Filters
              </button>
            </div>

            <div className="space-y-4">
              {filteredCourses.map(course => (
                <div key={course.id} className="p-4 border border-slate-100 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-md">{course.code}</span>
                      <h3 className="font-bold text-royal-navy">{course.name}</h3>
                    </div>
                    <p className="text-sm text-slate-500">{course.prof} • {course.credits} Credits</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className={`text-sm font-bold ${course.seats > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                        {course.seats > 0 ? `${course.seats} Seats Left` : 'Waitlist'}
                      </p>
                    </div>
                    <button 
                      onClick={() => toggleWishlist(course.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                        wishlist.includes(course.id) 
                          ? 'bg-royal-navy text-white' 
                          : 'bg-slate-100 text-royal-navy hover:bg-slate-200'
                      }`}
                    >
                      {wishlist.includes(course.id) ? 'Added' : 'Add to Wishlist'}
                    </button>
                  </div>
                </div>
              ))}
              {filteredCourses.length === 0 && (
                <div className="text-center py-8 text-slate-500">
                  No courses found matching "{searchTerm}"
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
            <h2 className="text-lg font-bold text-royal-navy mb-4 flex items-center gap-2">
              <BookOpen className="text-royal-gold" size={20} />
              My Wishlist
            </h2>
            {wishlist.length === 0 ? (
              <p className="text-sm text-slate-500 text-center py-6">Your wishlist is empty. Add courses to plan your schedule.</p>
            ) : (
              <div className="space-y-3 mb-6">
                {wishlist.map(id => {
                  const course = availableCourses.find(c => c.id === id);
                  if (!course) return null;
                  return (
                    <div key={id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div>
                        <p className="text-sm font-bold text-royal-navy">{course.code}</p>
                        <p className="text-xs text-slate-500">{course.credits} Credits</p>
                      </div>
                      <button onClick={() => toggleWishlist(id)} className="text-slate-400 hover:text-red-500 transition-colors">
                        <X size={16} />
                      </button>
                    </div>
                  );
                })}
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-500">Total Credits</span>
                  <span className="text-lg font-bold text-royal-navy">
                    {wishlist.reduce((sum, id) => sum + (availableCourses.find(c => c.id === id)?.credits || 0), 0)}
                  </span>
                </div>
              </div>
            )}
            <button 
              disabled={wishlist.length === 0}
              className="w-full py-3 bg-royal-gold text-royal-navy font-bold rounded-xl hover:bg-royal-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Register for Courses
            </button>
          </div>
        </div>
      </div>
      ) : activeRegTab === 'semester' ? (
        <SemesterRegistrationForm />
      ) : activeRegTab === 'exam' ? (
        <ExamRegistrationForm />
      ) : (
        <BonafideForm />
      )}
    </motion.div>
  );
}

function FinancialContent() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h1 className="text-3xl font-serif font-bold text-royal-navy mb-6">Financial Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-500 font-medium mb-2">Current Balance</p>
          <h3 className="text-3xl font-bold text-royal-navy mb-4">$0.00</h3>
          <button className="w-full py-3 bg-slate-100 text-slate-400 font-bold rounded-lg cursor-not-allowed transition-colors">
            Make a Payment
          </button>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm md:col-span-2 flex flex-col justify-center">
          <p className="text-sm text-slate-500 font-medium mb-2">Next Payment Due</p>
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="text-emerald-500" size={24} />
            <h3 className="text-xl font-bold text-royal-navy">No pending payments</h3>
          </div>
          <p className="text-sm text-slate-600">Your account is clear for the current semester. Thank you!</p>
        </div>
      </div>
      <h2 className="text-xl font-bold text-royal-navy mb-4">Recent Transactions</h2>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center hover:bg-slate-50 transition-colors">
          <div>
            <p className="font-bold text-royal-navy">Fall 2025 Tuition</p>
            <p className="text-sm text-slate-500">Aug 15, 2025</p>
          </div>
          <span className="font-bold text-red-500">-$12,500.00</span>
        </div>
        <div className="p-4 border-b border-slate-100 flex justify-between items-center hover:bg-slate-50 transition-colors">
          <div>
            <p className="font-bold text-royal-navy">Payment - Thank You</p>
            <p className="text-sm text-slate-500">Aug 10, 2025</p>
          </div>
          <span className="font-bold text-emerald-500">+$12,500.00</span>
        </div>
        <div className="p-4 border-b border-slate-100 flex justify-between items-center hover:bg-slate-50 transition-colors">
          <div>
            <p className="font-bold text-royal-navy">Technology Fee</p>
            <p className="text-sm text-slate-500">Aug 01, 2025</p>
          </div>
          <span className="font-bold text-red-500">-$250.00</span>
        </div>
      </div>
    </motion.div>
  );
}

function LibraryContent({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h1 className="text-3xl font-serif font-bold text-royal-navy mb-6">Library Services</h1>
      <div className="bg-royal-navy rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">Search the Catalog</h2>
          <p className="text-white/70 mb-6">Find books, articles, journals, and digital resources.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Search by title, author, or keyword..." 
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-royal-gold"
            />
            <button 
              onClick={() => setActiveTab('library-db')}
              className="px-8 py-3 bg-royal-gold text-royal-navy font-bold rounded-xl hover:bg-royal-gold-light transition-colors shadow-lg"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-royal-navy mb-4 flex items-center gap-2"><BookOpen size={20} className="text-royal-gold"/> Borrowed Items</h3>
          <div className="text-center py-8">
            <BookOpen className="w-12 h-12 text-slate-200 mx-auto mb-3" />
            <p className="text-slate-500 text-sm">You currently have no borrowed items.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-royal-navy mb-4 flex items-center gap-2"><MapPin size={20} className="text-royal-gold"/> Study Rooms</h3>
          <p className="text-slate-600 text-sm mb-6">Reserve a quiet space for individual study or group projects.</p>
          <button className="w-full py-3 border border-slate-200 text-royal-navy font-bold rounded-xl hover:bg-slate-50 transition-colors">
            Book a Room
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function CareerContent() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h1 className="text-3xl font-serif font-bold text-royal-navy mb-6">Career Center</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:border-royal-gold/50 hover:shadow-md transition-all cursor-pointer group">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FileText size={32} />
          </div>
          <h3 className="font-bold text-royal-navy mb-2 text-lg">Resume Review</h3>
          <p className="text-sm text-slate-500">Get feedback on your resume from career advisors.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:border-royal-gold/50 hover:shadow-md transition-all cursor-pointer group">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Users size={32} />
          </div>
          <h3 className="font-bold text-royal-navy mb-2 text-lg">Mock Interviews</h3>
          <p className="text-sm text-slate-500">Practice your interview skills with industry professionals.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:border-royal-gold/50 hover:shadow-md transition-all cursor-pointer group">
          <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Search size={32} />
          </div>
          <h3 className="font-bold text-royal-navy mb-2 text-lg">Job Board</h3>
          <p className="text-sm text-slate-500">Browse exclusive job and internship opportunities.</p>
        </div>
      </div>
      
      <div className="bg-royal-navy text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div>
          <h3 className="text-xl font-bold mb-2">Upcoming Career Fair</h3>
          <p className="text-white/70">Connect with top employers on campus. November 10th, Main Hall.</p>
        </div>
        <button className="px-6 py-3 bg-royal-gold text-royal-navy font-bold rounded-xl hover:bg-royal-gold-light transition-colors whitespace-nowrap">
          Register Now
        </button>
      </div>
    </motion.div>
  );
}

function SettingsContent() {
  const [activeSettingsTab, setActiveSettingsTab] = useState('profile');

  const settingsTabs = [
    { id: 'profile', label: 'Profile & Personal Info', icon: User },
    { id: 'security', label: 'Security & Privacy', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance & Accessibility', icon: Palette },
    { id: 'integrations', label: 'Connected Apps', icon: LinkIcon },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-3xl font-serif font-bold text-royal-navy">Settings</h1>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 bg-slate-50 border-r border-slate-100 p-4">
          <nav className="space-y-1">
            {settingsTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSettingsTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeSettingsTab === tab.id
                    ? 'bg-royal-navy text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-royal-navy'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Settings Content Area */}
        <div className="flex-1 p-6 md:p-8">
          {activeSettingsTab === 'profile' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-royal-navy mb-4">Personal Information</h2>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
                    <span className="text-3xl font-serif text-slate-400">JD</span>
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-slate-100 text-royal-navy text-sm font-bold rounded-lg hover:bg-slate-200 transition-colors">
                      Change Photo
                    </button>
                    <p className="text-xs text-slate-500 mt-2">JPG, GIF or PNG. Max size of 800K</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Preferred First Name</label>
                    <input type="text" defaultValue="John" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Legal Last Name</label>
                    <input type="text" defaultValue="Doe" disabled className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Pronouns</label>
                    <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold">
                      <option>He/Him</option>
                      <option>She/Her</option>
                      <option>They/Them</option>
                      <option>Prefer not to say</option>
                      <option>Custom...</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Student ID</label>
                    <input type="text" defaultValue="10029384" disabled className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed" />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <h2 className="text-xl font-bold text-royal-navy mb-4">Contact Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">University Email</label>
                    <input type="email" defaultValue="j.doe@university.edu" disabled className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Personal Email</label>
                    <input type="email" defaultValue="john.doe@gmail.com" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Mobile Phone</label>
                    <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold" />
                  </div>
                </div>
              </div>
              
              <div className="pt-6 flex justify-end">
                <button className="px-6 py-2 bg-royal-navy text-white font-bold rounded-lg shadow-md hover:bg-royal-navy/90 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeSettingsTab === 'security' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-royal-navy mb-4">Password & Authentication</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                    <div>
                      <p className="font-bold text-royal-navy">Change Password</p>
                      <p className="text-sm text-slate-500">Last changed 3 months ago</p>
                    </div>
                    <button className="px-4 py-2 bg-slate-100 text-royal-navy text-sm font-bold rounded-lg hover:bg-slate-200 transition-colors">
                      Update
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                    <div>
                      <p className="font-bold text-royal-navy">Two-Factor Authentication (2FA)</p>
                      <p className="text-sm text-slate-500">Currently using Duo Mobile</p>
                    </div>
                    <button className="px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-bold rounded-lg hover:bg-emerald-100 transition-colors border border-emerald-200">
                      Manage 2FA
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <h2 className="text-xl font-bold text-royal-navy mb-4">Privacy Preferences</h2>
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative flex items-center mt-1">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-royal-gold rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </div>
                    <div>
                      <p className="font-bold text-royal-navy text-sm">Directory Listing</p>
                      <p className="text-xs text-slate-500">Include my name and university email in the public student directory.</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative flex items-center mt-1">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-royal-gold rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </div>
                    <div>
                      <p className="font-bold text-royal-navy text-sm">Share Data with Career Services</p>
                      <p className="text-xs text-slate-500">Allow career services to view my major and GPA for job matching.</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeSettingsTab === 'notifications' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-royal-navy mb-4">Notification Preferences</h2>
                <p className="text-sm text-slate-500 mb-6">Choose how you want to receive updates from the university.</p>
                
                <div className="space-y-6">
                  {/* Category 1 */}
                  <div>
                    <h3 className="font-bold text-royal-navy mb-3">Academic Updates</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-700">Grades Posted</span>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked className="rounded text-royal-navy focus:ring-royal-navy" /> Email</label>
                          <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked className="rounded text-royal-navy focus:ring-royal-navy" /> SMS</label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-700">Assignment Deadlines (Canvas)</span>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked className="rounded text-royal-navy focus:ring-royal-navy" /> Email</label>
                          <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" className="rounded text-royal-navy focus:ring-royal-navy" /> SMS</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div>
                    <h3 className="font-bold text-royal-navy mb-3">Administrative</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-700">Registration Holds</span>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked className="rounded text-royal-navy focus:ring-royal-navy" /> Email</label>
                          <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked className="rounded text-royal-navy focus:ring-royal-navy" /> SMS</label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-700">Financial Aid Updates</span>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked className="rounded text-royal-navy focus:ring-royal-navy" /> Email</label>
                          <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" className="rounded text-royal-navy focus:ring-royal-navy" /> SMS</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category 3 */}
                  <div>
                    <h3 className="font-bold text-red-600 mb-3 flex items-center gap-2"><AlertCircle size={16} /> Emergency Alerts</h3>
                    <p className="text-xs text-slate-500 mb-3">Emergency alerts are mandatory and sent to all registered contact methods.</p>
                    <div className="flex items-center justify-between p-3 bg-red-50 border border-red-100 rounded-lg">
                      <span className="text-sm font-medium text-red-800">Campus Emergencies & Weather Closures</span>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-sm text-red-800 opacity-70"><input type="checkbox" checked disabled className="rounded text-red-600" /> Email</label>
                        <label className="flex items-center gap-2 text-sm text-red-800 opacity-70"><input type="checkbox" checked disabled className="rounded text-red-600" /> SMS</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 flex justify-end">
                <button className="px-6 py-2 bg-royal-navy text-white font-bold rounded-lg shadow-md hover:bg-royal-navy/90 transition-colors">
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {activeSettingsTab === 'appearance' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-royal-navy mb-4">Theme & Display</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="flex flex-col items-center gap-3 p-4 border-2 border-royal-navy rounded-xl bg-slate-50">
                    <div className="w-full h-24 bg-white rounded border border-slate-200 shadow-sm flex flex-col overflow-hidden">
                      <div className="h-4 bg-royal-navy w-full"></div>
                      <div className="flex-1 p-2 flex gap-2">
                        <div className="w-4 h-full bg-slate-100 rounded"></div>
                        <div className="flex-1 space-y-1">
                          <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                          <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                    <span className="font-bold text-royal-navy text-sm">Light Mode</span>
                  </button>
                  <button className="flex flex-col items-center gap-3 p-4 border-2 border-transparent hover:border-slate-300 rounded-xl bg-slate-50 opacity-60 cursor-not-allowed">
                    <div className="w-full h-24 bg-slate-900 rounded border border-slate-700 shadow-sm flex flex-col overflow-hidden">
                      <div className="h-4 bg-slate-800 w-full"></div>
                      <div className="flex-1 p-2 flex gap-2">
                        <div className="w-4 h-full bg-slate-800 rounded"></div>
                        <div className="flex-1 space-y-1">
                          <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                          <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                    <span className="font-medium text-slate-600 text-sm">Dark Mode (Coming Soon)</span>
                  </button>
                  <button className="flex flex-col items-center gap-3 p-4 border-2 border-transparent hover:border-slate-300 rounded-xl bg-slate-50 opacity-60 cursor-not-allowed">
                    <div className="w-full h-24 bg-slate-100 rounded border border-slate-300 shadow-sm flex flex-col overflow-hidden">
                      <div className="h-4 bg-slate-300 w-full"></div>
                      <div className="flex-1 p-2 flex gap-2">
                        <div className="w-4 h-full bg-slate-200 rounded"></div>
                        <div className="flex-1 space-y-1">
                          <div className="h-2 bg-slate-300 rounded w-3/4"></div>
                          <div className="h-2 bg-slate-300 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                    <span className="font-medium text-slate-600 text-sm">System Default</span>
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <h2 className="text-xl font-bold text-royal-navy mb-4">Accessibility</h2>
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative flex items-center mt-1">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-royal-gold rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </div>
                    <div>
                      <p className="font-bold text-royal-navy text-sm">High Contrast Mode</p>
                      <p className="text-xs text-slate-500">Increase contrast for better readability.</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative flex items-center mt-1">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-royal-gold rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </div>
                    <div>
                      <p className="font-bold text-royal-navy text-sm">Reduce Motion</p>
                      <p className="text-xs text-slate-500">Minimize animations and transitions across the portal.</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeSettingsTab === 'integrations' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-royal-navy mb-4">Connected Applications</h2>
                <p className="text-sm text-slate-500 mb-6">Manage third-party applications connected to your student account.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold text-xl">C</div>
                      <div>
                        <p className="font-bold text-royal-navy">Canvas LMS</p>
                        <p className="text-xs text-slate-500">Connected on Aug 15, 2023</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Active</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">Z</div>
                      <div>
                        <p className="font-bold text-royal-navy">Zoom (University Account)</p>
                        <p className="text-xs text-slate-500">Connected on Aug 15, 2023</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Active</span>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center font-bold text-xl">G</div>
                      <div>
                        <p className="font-bold text-royal-navy">Google Workspace</p>
                        <p className="text-xs text-slate-500">Not connected</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-slate-100 text-royal-navy text-sm font-bold rounded-lg hover:bg-slate-200 transition-colors">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CertificatesContent() {
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!certificateRef.current || isDownloading) return;
    
    try {
      setIsDownloading(true);
      
      // html-to-image uses the browser's native rendering, which supports modern CSS colors like oklch/oklab
      const imgData = await htmlToImage.toPng(certificateRef.current, {
        quality: 1,
        pixelRatio: 2,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left'
        }
      });
      
      // Get the dimensions of the element
      const rect = certificateRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [width, height]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save(`${selectedCert.title.replace(/\s+/g, '_')}_Certificate.pdf`);
    } catch (error) {
      console.error('Error generating certificate PDF:', error);
      alert('Failed to download certificate. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const certificates = Array.from({ length: 16 }).map((_, i) => ({
    id: i + 1,
    title: [
      'Dean\'s List Award',
      'Excellence in Computer Science',
      'Hackathon First Prize',
      'Student Leadership Award',
      'Community Service Certificate',
      'Academic Achievement Award',
      'Research Symposium Winner',
      'Outstanding Project Award',
      'Innovation Challenge Finalist',
      'Best Paper Presentation',
      'Sports Meet Champion',
      'Cultural Fest Organizer',
      'Volunteer Appreciation',
      'Programming Contest Winner',
      'Alumni Association Scholarship',
      'Departmental Honors'
    ][i],
    date: new Date(2023, 11 - (i % 12), 15 - (i % 10)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    issuer: 'University Administration',
    type: i % 3 === 0 ? 'Academic' : i % 3 === 1 ? 'Extracurricular' : 'Achievement'
  }));

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-3xl font-serif font-bold text-royal-navy">My Certificates</h1>
        <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-bold text-sm border border-emerald-200 flex items-center gap-2">
          <Award size={16} /> {certificates.length} Certificates Earned
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certificates.map(cert => (
          <div key={cert.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="h-32 bg-slate-100 relative flex items-center justify-center border-b border-slate-200 overflow-hidden">
              <div className="absolute inset-0 bg-royal-navy/5"></div>
              <img 
                src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=800&auto=format&fit=crop" 
                alt="Certificate Background" 
                className="w-full h-full object-cover opacity-20 absolute inset-0 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center z-10 border-2 border-royal-gold relative">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png" 
                  alt="Certificate Logo" 
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <Award className="text-royal-gold hidden absolute" size={32} />
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-700 border border-slate-200 shadow-sm z-10">
                {cert.type}
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-bold text-royal-navy mb-1 line-clamp-2">{cert.title}</h3>
              <p className="text-xs text-slate-500 mb-4">{cert.issuer} • {cert.date}</p>
              <div className="mt-auto pt-4 border-t border-slate-100 flex gap-2">
                <button 
                  onClick={() => setSelectedCert(cert)}
                  className="flex-1 py-2 bg-royal-navy text-white text-sm font-bold rounded-lg hover:bg-royal-navy/90 transition-colors flex items-center justify-center gap-2"
                >
                  <FileText size={16} /> Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }} 
              className="relative w-full max-w-4xl bg-slate-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-4 bg-white border-b border-slate-200">
                <div>
                  <h3 className="font-bold text-royal-navy">{selectedCert.title}</h3>
                  <p className="text-xs text-slate-500">Issued on {selectedCert.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="p-2 text-slate-500 hover:text-royal-navy hover:bg-slate-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    title="Download Certificate"
                  >
                    {isDownloading ? (
                      <div className="w-5 h-5 border-2 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Download size={20} />
                    )}
                    <span className="hidden sm:inline text-sm font-medium">{isDownloading ? 'Downloading...' : 'Download'}</span>
                  </button>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 p-6 sm:p-12 overflow-y-auto flex items-center justify-center bg-slate-200">
                {/* Mock Certificate Visual */}
                <div 
                  ref={certificateRef}
                  className="w-full max-w-3xl aspect-[1.414/1] bg-white shadow-xl border-8 border-double border-royal-gold/30 p-8 sm:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
                  <div className="absolute top-8 left-8 right-8 bottom-8 border border-royal-gold/20"></div>
                  
                  <div className="mb-6 relative">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png" 
                      alt="Certificate Logo" 
                      className="w-24 h-24 object-contain drop-shadow-md"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <Award className="text-royal-gold hidden absolute inset-0 m-auto" size={64} />
                  </div>
                  
                  <h1 className="text-3xl sm:text-5xl font-serif font-bold text-royal-navy mb-2 uppercase tracking-widest relative z-10">Certificate</h1>
                  <p className="text-sm sm:text-base text-slate-500 uppercase tracking-widest mb-8">of {selectedCert.type}</p>
                  
                  <p className="text-slate-600 mb-4 italic">This is proudly presented to</p>
                  <h2 className="text-2xl sm:text-4xl font-serif font-bold text-royal-navy mb-8 border-b border-slate-300 pb-2 px-12">John Doe</h2>
                  
                  <p className="text-slate-600 max-w-lg mb-12">
                    For outstanding performance and dedication in achieving the 
                    <strong className="text-royal-navy font-bold mx-1">{selectedCert.title}</strong> 
                    during the academic year.
                  </p>
                  
                  <div className="flex justify-between w-full px-8 sm:px-16 mt-auto">
                    <div className="text-center">
                      <div className="w-32 border-b border-slate-400 mb-2"></div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Date</p>
                      <p className="text-sm font-bold text-royal-navy">{selectedCert.date}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-32 border-b border-slate-400 mb-2"></div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Signature</p>
                      <p className="text-sm font-bold text-royal-navy">{selectedCert.issuer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Your transcript request has been processed.', time: '2 hours ago', unread: true },
    { id: 2, text: 'New assignment posted in Machine Learning.', time: '5 hours ago', unread: true },
    { id: 3, text: 'Library book due tomorrow.', time: '1 day ago', unread: false },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const handleLogout = () => {
    navigate('/portal');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardContent setActiveTab={setActiveTab} />;
      case 'courses': return <CoursesContent />;
      case 'grades': return <GradesContent />;
      case 'registration': return <RegistrationContent />;
      case 'financial': return <FinancialContent />;
      case 'library': return <LibraryContent setActiveTab={setActiveTab} />;
      case 'career': return <CareerContent />;
      case 'certificates': return <CertificatesContent />;
      case 'settings': return <SettingsContent />;
      case 'library-db': return <LibraryDBContent />;
      case 'advising': return <AdvisingContent />;
      case 'campus-map': return <CampusMapContent />;
      case 'dining-plan': return <DiningPlanContent />;
      default: return <DashboardContent setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar (Desktop) */}
      <aside className="hidden lg:flex flex-col w-72 bg-royal-navy text-white fixed h-full z-20">
        <div className="p-6 flex items-center gap-3 border-b border-white/10">
          <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center shadow-lg">
            <span className="text-royal-navy font-serif font-bold text-xl">R</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-tight leading-none">ROYAL IMPERIAL</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-royal-gold font-bold">Student Portal</span>
          </div>
        </div>

        <div className="p-6 flex items-center gap-4 border-b border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" 
            alt="Student Profile" 
            className="w-12 h-12 rounded-full border-2 border-royal-gold object-cover"
            referrerPolicy="no-referrer"
          />
          <div>
            <h3 className="font-bold text-sm">Alexander Wright</h3>
            <p className="text-xs text-white/60">ID: RI-2024-8921</p>
            <span className="inline-block mt-1 px-2 py-0.5 bg-royal-gold/20 text-royal-gold text-[10px] rounded-full font-medium border border-royal-gold/30">
              Senior • Computer Science
            </span>
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-royal-gold/10 text-royal-gold border border-royal-gold/20' 
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-3 px-4 py-3 w-full rounded-xl transition-all ${
              activeTab === 'settings' 
                ? 'bg-white/10 text-white font-bold' 
                : 'text-white/70 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Settings size={18} />
            <span className="text-sm font-medium">Settings</span>
          </button>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-400/10 transition-all mt-1"
          >
            <LogOut size={18} />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-royal-navy text-white z-30 px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 gold-gradient rounded-sm flex items-center justify-center">
            <span className="text-royal-navy font-serif font-bold text-lg">R</span>
          </div>
          <span className="font-serif font-bold text-lg tracking-tight">PORTAL</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsSearchOpen(true)} className="text-white">
            <Search size={24} />
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-20 bg-royal-navy pt-20 px-6 pb-6 overflow-y-auto"
          >
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${
                    activeTab === item.id ? 'bg-royal-gold/10 text-royal-gold' : 'text-white/70'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <button 
                onClick={() => {
                  setActiveTab('settings');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-4 px-4 py-4 w-full rounded-xl mt-4 ${
                  activeTab === 'settings'
                    ? 'bg-white/10 text-white font-bold'
                    : 'text-white/70'
                }`}
              >
                <Settings size={20} />
                <span className="font-medium">Settings</span>
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-4 px-4 py-4 w-full rounded-xl text-red-400 mt-4"
              >
                <LogOut size={20} />
                <span className="font-medium">Log Out</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 pt-20 lg:pt-0 min-h-screen flex flex-col">
        {/* Topbar */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10 hidden lg:flex">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search courses, people, or resources..." 
              onClick={() => setIsSearchOpen(true)}
              readOnly
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 transition-all outline-none cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative text-slate-500 hover:text-royal-navy transition-colors p-2 rounded-full hover:bg-slate-100"
              >
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                    {unreadCount}
                  </span>
                )}
              </button>
              
              <AnimatePresence>
                {showNotifications && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50"
                  >
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                      <h3 className="font-bold text-royal-navy">Notifications</h3>
                      {unreadCount > 0 && (
                        <button onClick={markAllRead} className="text-xs font-bold text-royal-gold hover:text-royal-navy transition-colors">
                          Mark all as read
                        </button>
                      )}
                    </div>
                    <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                      {notifications.length === 0 ? (
                        <div className="p-6 text-center text-slate-500 text-sm">No notifications</div>
                      ) : (
                        notifications.map(notif => (
                          <div key={notif.id} className={`p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer ${notif.unread ? 'bg-blue-50/30' : ''}`}>
                            <div className="flex gap-3">
                              <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${notif.unread ? 'bg-royal-gold' : 'bg-transparent'}`} />
                              <div>
                                <p className={`text-sm ${notif.unread ? 'font-bold text-royal-navy' : 'text-slate-600'}`}>{notif.text}</p>
                                <p className="text-xs text-slate-400 mt-1">{notif.time}</p>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    <div className="p-3 border-t border-slate-100 text-center bg-slate-50">
                      <button className="text-xs font-bold text-royal-navy hover:text-royal-gold transition-colors">
                        View All Notifications
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right">
                <p className="text-sm font-bold text-royal-navy group-hover:text-royal-gold transition-colors">Alexander W.</p>
                <p className="text-xs text-slate-500">Student</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
          
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
          
          {/* Footer inside dashboard */}
          <div className="mt-12 pt-6 border-t border-slate-200 text-center text-sm text-slate-500 pb-6">
            <p>© 2026 Royal Imperial College. Student Information System.</p>
          </div>

        </div>
      </main>
      
      {/* Search Overlay */}
      <StudentSearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSelectTab={setActiveTab} />
    </div>
  );
}
