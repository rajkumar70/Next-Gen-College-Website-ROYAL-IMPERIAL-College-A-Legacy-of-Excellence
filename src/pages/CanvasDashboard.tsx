import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  User, 
  Monitor, 
  Book, 
  Users, 
  Calendar, 
  Inbox, 
  Clock, 
  HelpCircle,
  MoreVertical,
  Megaphone,
  FileText,
  MessageSquare,
  Folder,
  CheckCircle,
  X,
  LogOut,
  Settings,
  Edit3,
  Eye,
  Bell,
  ChevronRight,
  Search,
  Plus
} from 'lucide-react';

const COURSES = [
  {
    id: 1,
    name: 'Introduction to Computer Science',
    code: 'CS101',
    term: 'Fall 2026',
    color: 'bg-[#0055a5]',
    announcements: 2,
    assignments: 1,
    discussions: 5,
    files: true
  },
  {
    id: 2,
    name: 'Advanced Mathematics',
    code: 'MATH201',
    term: 'Fall 2026',
    color: 'bg-[#007a33]',
    announcements: 0,
    assignments: 3,
    discussions: 1,
    files: true
  },
  {
    id: 3,
    name: 'World History: Modern Era',
    code: 'HIST105',
    term: 'Fall 2026',
    color: 'bg-[#c41230]',
    announcements: 1,
    assignments: 0,
    discussions: 12,
    files: true
  },
  {
    id: 4,
    name: 'Physics I: Mechanics',
    code: 'PHYS101',
    term: 'Fall 2026',
    color: 'bg-[#5c068c]',
    announcements: 0,
    assignments: 2,
    discussions: 0,
    files: true
  },
  {
    id: 5,
    name: 'English Composition',
    code: 'ENG101',
    term: 'Fall 2026',
    color: 'bg-[#e03a3e]',
    announcements: 1,
    assignments: 1,
    discussions: 2,
    files: true
  },
  {
    id: 6,
    name: 'Introduction to Psychology',
    code: 'PSY101',
    term: 'Fall 2026',
    color: 'bg-[#f58025]',
    announcements: 3,
    assignments: 0,
    discussions: 8,
    files: true
  }
];

const TODO_ITEMS = [
  { id: 1, title: 'Submit Assignment 3', course: 'CS101', points: 100, due: 'Oct 15 at 11:59pm', icon: FileText },
  { id: 2, title: 'Quiz 2: Derivatives', course: 'MATH201', points: 50, due: 'Oct 16 at 10:00am', icon: Edit3 },
  { id: 3, title: 'Read Chapter 4', course: 'HIST105', points: 0, due: 'Oct 18 at 8:00am', icon: Book },
  { id: 4, title: 'Lab Report 1', course: 'PHYS101', points: 25, due: 'Oct 19 at 11:59pm', icon: FileText }
];

const RECENT_FEEDBACK = [
  { id: 1, title: 'Assignment 2', course: 'CS101', grade: '95', max: '100', icon: CheckCircle },
  { id: 2, title: 'Midterm Exam', course: 'MATH201', grade: '88', max: '100', icon: CheckCircle },
  { id: 3, title: 'Essay Draft', course: 'ENG101', grade: 'A-', max: 'A', icon: CheckCircle }
];

export default function CanvasDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { activeTab?: string };
  const [activeTab, setActiveTab] = useState(state?.activeTab || 'Dashboard');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [courseTab, setCourseTab] = useState('Home');
  const [courseSearchQuery, setCourseSearchQuery] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());

  const navItems = [
    { name: 'Account', icon: User, isProfile: true },
    { name: 'Dashboard', icon: Monitor },
    { name: 'Courses', icon: Book },
    { name: 'Groups', icon: Users },
    { name: 'Calendar', icon: Calendar },
    { name: 'Inbox', icon: Inbox, badge: 3 },
    { name: 'History', icon: Clock },
    { name: 'Help', icon: HelpCircle },
  ];

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    setSelectedCourse(null); // Reset selected course when changing global tabs
  };

  const handleCourseClick = (course: any) => {
    setSelectedCourse(course);
    setCourseTab('Home');
  };

  const renderContent = () => {
    if (selectedCourse) {
      return (
        <div className="flex-1 flex flex-col h-full bg-white">
          {/* Course Header */}
          <div className="border-b border-slate-200 p-6 flex items-center justify-between">
            <div>
              <div className="flex items-center text-sm text-slate-500 mb-2">
                <button onClick={() => setSelectedCourse(null)} className="hover:underline text-[#0055a5]">Courses</button>
                <ChevronRight size={14} className="mx-1" />
                <span>{selectedCourse.code}</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800">{selectedCourse.name}</h1>
              <p className="text-sm text-slate-500">{selectedCourse.term}</p>
            </div>
            <button className="px-4 py-2 border border-slate-300 rounded text-sm font-medium hover:bg-slate-50 flex items-center gap-2">
              <Eye size={16} /> Student View
            </button>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Course Navigation */}
            <div className="w-48 border-r border-slate-200 p-4 overflow-y-auto">
              {['Home', 'Announcements', 'Assignments', 'Discussions', 'Grades', 'People', 'Pages', 'Files', 'Syllabus', 'Modules'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setCourseTab(tab)}
                  className={`w-full text-left px-3 py-2 text-sm rounded mb-1 ${
                    courseTab === tab ? 'bg-slate-100 font-bold text-slate-900 border-l-2 border-[#0055a5]' : 'text-[#0055a5] hover:underline'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Course Content Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-slate-50">
              <h2 className="text-xl font-bold mb-4">{courseTab}</h2>
              
              {courseTab === 'Home' && (
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded shadow-sm border border-slate-200">
                    <h3 className="text-lg font-bold mb-2">Welcome to {selectedCourse.code}!</h3>
                    <p className="text-slate-600 mb-4">This course will introduce you to the fundamental concepts of {selectedCourse.name.toLowerCase()}. Please review the syllabus and get started with Module 1.</p>
                    <div className="flex gap-4">
                      <button className="px-4 py-2 bg-[#0055a5] text-white rounded font-medium hover:bg-blue-700">Start Here</button>
                      <button className="px-4 py-2 border border-slate-300 rounded font-medium hover:bg-slate-50">View Syllabus</button>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded shadow-sm border border-slate-200">
                    <h3 className="text-lg font-bold mb-4 border-b pb-2">Recent Announcements</h3>
                    {selectedCourse.announcements > 0 ? (
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <Megaphone className="text-[#0055a5] mt-1" size={20} />
                          <div>
                            <p className="font-bold text-[#0055a5] hover:underline cursor-pointer">Welcome to Week 1!</p>
                            <p className="text-xs text-slate-500">Posted on Sep 1 at 8:00am</p>
                          </div>
                        </li>
                      </ul>
                    ) : (
                      <p className="text-slate-500 italic">No recent announcements.</p>
                    )}
                  </div>
                </div>
              )}

              {courseTab === 'Assignments' && (
                <div className="bg-white rounded shadow-sm border border-slate-200">
                  <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-100">
                    <h3 className="font-bold">Upcoming Assignments</h3>
                  </div>
                  <ul className="divide-y divide-slate-200">
                    <li className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <FileText className="text-slate-400" size={20} />
                        <div>
                          <p className="font-medium text-[#0055a5]">Assignment 1: Introduction</p>
                          <p className="text-xs text-slate-500">Due Sep 15 at 11:59pm | 100 pts</p>
                        </div>
                      </div>
                    </li>
                    <li className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Edit3 className="text-slate-400" size={20} />
                        <div>
                          <p className="font-medium text-[#0055a5]">Quiz 1</p>
                          <p className="text-xs text-slate-500">Due Sep 20 at 11:59pm | 50 pts</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {courseTab === 'Grades' && (
                <div className="bg-white rounded shadow-sm border border-slate-200 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold">Grades for {selectedCourse.name}</h3>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">Total Grade</p>
                      <p className="text-2xl font-bold text-[#0055a5]">92.5% (A-)</p>
                    </div>
                  </div>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-slate-300">
                        <th className="py-2 font-bold text-slate-700">Name</th>
                        <th className="py-2 font-bold text-slate-700">Due</th>
                        <th className="py-2 font-bold text-slate-700 text-right">Score</th>
                        <th className="py-2 font-bold text-slate-700 text-right">Out of</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="py-3 text-[#0055a5] font-medium">Assignment 1</td>
                        <td className="py-3 text-sm text-slate-600">Sep 15</td>
                        <td className="py-3 text-right font-medium">95</td>
                        <td className="py-3 text-right text-slate-500">100</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="py-3 text-[#0055a5] font-medium">Quiz 1</td>
                        <td className="py-3 text-sm text-slate-600">Sep 20</td>
                        <td className="py-3 text-right font-medium">45</td>
                        <td className="py-3 text-right text-slate-500">50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Placeholder for other tabs */}
              {['Announcements', 'Discussions', 'People', 'Pages', 'Files', 'Syllabus', 'Modules'].includes(courseTab) && (
                <div className="bg-white p-8 rounded shadow-sm border border-slate-200 text-center text-slate-500">
                  <p>Content for {courseTab} goes here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'Dashboard':
        return (
          <div className="flex-1 flex flex-col lg:flex-row h-full overflow-hidden">
            {/* Dashboard Center */}
            <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
              <div className="flex justify-between items-end border-b border-slate-300 pb-4 mb-6">
                <h1 className="text-[32px] font-normal text-slate-800 tracking-tight">Dashboard</h1>
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-slate-200 rounded text-slate-600 transition-colors" title="Dashboard View">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {COURSES.map((course) => (
                  <motion.div 
                    key={course.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => handleCourseClick(course)}
                    className="bg-white rounded shadow-sm overflow-hidden border border-slate-200 hover:shadow-md transition-shadow group cursor-pointer flex flex-col h-[280px]"
                  >
                    {/* Card Header (Color Block) */}
                    <div className={`${course.color} h-[140px] relative`}>
                      <button className="absolute top-3 right-3 text-white/80 hover:text-white p-1" onClick={(e) => e.stopPropagation()}>
                        <MoreVertical size={20} />
                      </button>
                      <button className="absolute top-3 right-10 text-white/80 hover:text-white p-1" onClick={(e) => e.stopPropagation()}>
                        <Edit3 size={18} />
                      </button>
                    </div>
                    
                    {/* Card Body */}
                    <div className="p-4 flex-1 relative bg-white">
                      <h2 className="text-[#0055a5] font-medium text-[15px] leading-tight mb-1 group-hover:underline line-clamp-2">
                        {course.name}
                      </h2>
                      <p className="text-slate-600 text-sm mb-1">{course.code}</p>
                      <p className="text-slate-500 text-xs">{course.term}</p>
                    </div>

                    {/* Card Footer (Icons) */}
                    <div className="px-4 py-3 bg-white flex items-center gap-5 text-slate-500" onClick={(e) => e.stopPropagation()}>
                      <button className="relative hover:text-slate-800 transition-colors" title="Announcements">
                        <Megaphone size={20} strokeWidth={1.5} />
                        {course.announcements > 0 && (
                          <span className="absolute -top-2 -right-2 bg-[#0055a5] text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                            {course.announcements}
                          </span>
                        )}
                      </button>
                      <button className="relative hover:text-slate-800 transition-colors" title="Assignments">
                        <FileText size={20} strokeWidth={1.5} />
                        {course.assignments > 0 && (
                          <span className="absolute -top-2 -right-2 bg-[#0055a5] text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                            {course.assignments}
                          </span>
                        )}
                      </button>
                      <button className="relative hover:text-slate-800 transition-colors" title="Discussions">
                        <MessageSquare size={20} strokeWidth={1.5} />
                        {course.discussions > 0 && (
                          <span className="absolute -top-2 -right-2 bg-[#0055a5] text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                            {course.discussions}
                          </span>
                        )}
                      </button>
                      <button className="relative hover:text-slate-800 transition-colors" title="Files">
                        <Folder size={20} strokeWidth={1.5} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-[300px] bg-white p-6 overflow-y-auto border-l border-slate-200">
              
              {/* To Do Section */}
              <div className="mb-8">
                <div className="flex justify-between items-center border-b border-slate-300 pb-2 mb-4">
                  <h2 className="text-[15px] font-bold text-slate-800">To Do</h2>
                  <span className="text-xs text-[#0055a5] hover:underline cursor-pointer flex items-center">
                    <span className="bg-[#0055a5] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center mr-1">
                      {TODO_ITEMS.length}
                    </span>
                  </span>
                </div>
                
                <ul className="space-y-4">
                  {TODO_ITEMS.map((item) => (
                    <li key={item.id} className="flex gap-3 group">
                      <div className="text-[#0055a5] mt-0.5">
                        <item.icon size={18} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[13px] text-[#0055a5] hover:underline cursor-pointer leading-tight mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-slate-500">{item.course}</p>
                        <p className="text-[11px] text-slate-500">{item.points} points • {item.due}</p>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        <X size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
                <button className="text-[13px] text-[#0055a5] hover:underline mt-4 block">Show All</button>
              </div>

              {/* Recent Feedback Section */}
              <div className="mb-8">
                <div className="flex justify-between items-center border-b border-slate-300 pb-2 mb-4">
                  <h2 className="text-[15px] font-bold text-slate-800">Recent Feedback</h2>
                </div>
                
                <ul className="space-y-4">
                  {RECENT_FEEDBACK.map((item) => (
                    <li key={item.id} className="flex gap-3">
                      <div className="text-slate-500 mt-0.5">
                        <item.icon size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-[13px] text-[#0055a5] hover:underline cursor-pointer leading-tight mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-slate-500">{item.course}</p>
                        <p className="text-[12px] text-slate-700 font-medium mt-0.5">
                          {item.grade} / {item.max}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* View Grades Button */}
              <button className="w-full py-2 px-4 bg-white hover:bg-slate-100 text-slate-700 text-[13px] font-medium rounded border border-slate-300 transition-colors shadow-sm">
                View Grades
              </button>
            </div>
          </div>
        );
      
      case 'Courses':
        const filteredCourses = COURSES.filter(course => 
          course.name.toLowerCase().includes(courseSearchQuery.toLowerCase()) || 
          course.code.toLowerCase().includes(courseSearchQuery.toLowerCase())
        );

        return (
          <div className="flex-1 p-8 overflow-y-auto bg-white">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h1 className="text-3xl font-normal text-slate-800">All Courses</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search courses..." 
                  value={courseSearchQuery}
                  onChange={(e) => setCourseSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0055a5] focus:border-transparent w-64"
                />
              </div>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="py-2 font-bold text-slate-700">Course</th>
                  <th className="py-2 font-bold text-slate-700">Term</th>
                  <th className="py-2 font-bold text-slate-700">Enrolled as</th>
                  <th className="py-2 font-bold text-slate-700">Published</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.length > 0 ? (
                  filteredCourses.map(course => (
                    <tr key={course.id} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="py-3">
                        <button onClick={() => handleCourseClick(course)} className="text-[#0055a5] hover:underline font-medium">
                          {course.name}
                        </button>
                      </td>
                      <td className="py-3 text-slate-600">{course.term}</td>
                      <td className="py-3 text-slate-600">Student</td>
                      <td className="py-3 text-slate-600">Yes</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-slate-500">
                      No courses found matching "{courseSearchQuery}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );

      case 'Calendar':
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        const days = [];
        for (let i = 0; i < firstDay; i++) {
          days.push(<div key={`empty-${i}`} className="p-2 border-b border-r border-slate-200 bg-slate-50 min-h-[100px]"></div>);
        }
        for (let i = 1; i <= daysInMonth; i++) {
          const isToday = new Date().getDate() === i && new Date().getMonth() === month && new Date().getFullYear() === year;
          
          // Mock events based on date
          let event = null;
          if (i === 15 && month === 9) { // Oct 15
            event = <div className="mt-1 text-xs bg-[#0055a5] text-white p-1 rounded truncate">CS101: Assignment 3</div>;
          } else if (i === 16 && month === 9) { // Oct 16
            event = <div className="mt-1 text-xs bg-[#007a33] text-white p-1 rounded truncate">MATH201: Quiz 2</div>;
          } else if (i === 18 && month === 9) { // Oct 18
            event = <div className="mt-1 text-xs bg-[#c41230] text-white p-1 rounded truncate">HIST105: Read Chapter 4</div>;
          } else if (i === 19 && month === 9) { // Oct 19
            event = <div className="mt-1 text-xs bg-[#5c068c] text-white p-1 rounded truncate">PHYS101: Lab Report 1</div>;
          }

          days.push(
            <div key={`day-${i}`} className={`p-2 border-b border-r border-slate-200 min-h-[100px] ${isToday ? 'bg-blue-50/30' : 'bg-white'}`}>
              <div className={`text-sm font-medium w-6 h-6 flex items-center justify-center rounded-full ${isToday ? 'bg-[#0055a5] text-white' : 'text-slate-700'}`}>
                {i}
              </div>
              {event}
            </div>
          );
        }

        return (
          <div className="flex-1 p-8 overflow-y-auto bg-white flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-normal text-slate-800">Calendar</h1>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50">Week</button>
                <button className="px-3 py-1 border border-[#0055a5] text-[#0055a5] bg-blue-50 rounded font-medium">Month</button>
                <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50">Agenda</button>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-800">{monthNames[month]} {year}</h2>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
                    className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 font-medium"
                  >
                    &lt;
                  </button>
                  <button 
                    onClick={() => setCurrentDate(new Date())}
                    className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 text-sm font-medium"
                  >
                    Today
                  </button>
                  <button 
                    onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
                    className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 font-medium"
                  >
                    &gt;
                  </button>
                </div>
              </div>
              <div className="border-t border-l border-slate-200 rounded-lg overflow-hidden flex-1 flex flex-col">
                <div className="grid grid-cols-7 bg-slate-100">
                  {dayNames.map(day => (
                    <div key={day} className="p-2 border-b border-r border-slate-200 font-bold text-sm text-center text-slate-700">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 flex-1">
                  {days}
                </div>
              </div>
            </div>
          </div>
        );

      case 'Inbox':
        return (
          <div className="flex-1 flex flex-col h-full bg-white">
            <div className="border-b border-slate-300 p-4 flex justify-between items-center bg-slate-50">
              <div className="flex items-center gap-4">
                <select className="border border-slate-300 rounded p-1 text-sm">
                  <option>All Courses</option>
                  {COURSES.map(c => <option key={c.id}>{c.name}</option>)}
                </select>
                <select className="border border-slate-300 rounded p-1 text-sm">
                  <option>Inbox</option>
                  <option>Unread</option>
                  <option>Starred</option>
                  <option>Sent</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-slate-300 rounded hover:bg-slate-100" title="Compose a new message">
                  <Edit3 size={16} />
                </button>
              </div>
            </div>
            <div className="flex flex-1 overflow-hidden">
              <div className="w-1/3 border-r border-slate-300 overflow-y-auto">
                <div className="p-4 border-b border-slate-200 hover:bg-slate-50 cursor-pointer bg-blue-50 border-l-4 border-l-[#0055a5]">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-sm">Prof. Smith</span>
                    <span className="text-xs text-slate-500">10:30 AM</span>
                  </div>
                  <p className="font-medium text-sm mb-1">Assignment 3 Extension</p>
                  <p className="text-xs text-slate-600 truncate">I have extended the deadline for Assignment 3 to...</p>
                </div>
                <div className="p-4 border-b border-slate-200 hover:bg-slate-50 cursor-pointer">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-sm">Canvas Support</span>
                    <span className="text-xs text-slate-500">Yesterday</span>
                  </div>
                  <p className="font-medium text-sm mb-1">System Maintenance</p>
                  <p className="text-xs text-slate-600 truncate">Canvas will be down for maintenance on Sunday...</p>
                </div>
              </div>
              <div className="flex-1 p-8 flex flex-col">
                <div className="border-b border-slate-200 pb-4 mb-4">
                  <h2 className="text-xl font-bold mb-2">Assignment 3 Extension</h2>
                  <p className="text-sm text-slate-600">From: <strong>Prof. Smith</strong> (CS101)</p>
                  <p className="text-sm text-slate-600">To: You</p>
                </div>
                <div className="flex-1 text-slate-800">
                  <p className="mb-4">Hi Student,</p>
                  <p className="mb-4">I have extended the deadline for Assignment 3 to Friday at 11:59 PM. Please make sure to submit your work by then.</p>
                  <p>Best,<br/>Prof. Smith</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <textarea className="w-full border border-slate-300 rounded p-3 text-sm h-24" placeholder="Reply to this message..."></textarea>
                  <div className="flex justify-end mt-2">
                    <button className="px-4 py-2 bg-[#0055a5] text-white rounded font-medium hover:bg-blue-700">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Account':
        return (
          <div className="flex-1 p-8 overflow-y-auto bg-white">
            <h1 className="text-3xl font-normal text-slate-800 mb-6 border-b pb-4">Account Settings</h1>
            <div className="flex gap-8">
              <div className="w-64">
                <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <button className="text-sm text-[#0055a5] hover:underline">Change Profile Picture</button>
                </div>
              </div>
              <div className="flex-1 max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                    <input type="text" className="w-full border border-slate-300 rounded p-2" value="John Doe" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Display Name</label>
                    <input type="text" className="w-full border border-slate-300 rounded p-2" value="John Doe" />
                    <p className="text-xs text-slate-500 mt-1">People will see this name in discussions, messages and comments.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Pronouns</label>
                    <select className="w-full border border-slate-300 rounded p-2">
                      <option>None</option>
                      <option>He/Him</option>
                      <option>She/Her</option>
                      <option>They/Them</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Language</label>
                    <select className="w-full border border-slate-300 rounded p-2">
                      <option>System Default (English (US))</option>
                      <option>English (UK)</option>
                      <option>Spanish</option>
                    </select>
                  </div>
                  <button className="px-4 py-2 bg-[#0055a5] text-white rounded font-medium hover:bg-blue-700">Update Settings</button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex-1 flex items-center justify-center bg-slate-50">
            <div className="text-center text-slate-500">
              <h2 className="text-2xl font-bold mb-2">{activeTab}</h2>
              <p>This section is currently under development.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex font-sans text-slate-800 h-screen overflow-hidden">
      {/* Global Navigation (Left Sidebar) */}
      <div className="w-[84px] bg-[#2D3B45] flex flex-col items-center py-4 z-20 flex-shrink-0 shadow-xl">
        <div 
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 cursor-pointer overflow-hidden border-2 border-transparent hover:border-white transition-all"
          onClick={() => handleTabClick('Account')}
        >
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1 w-full flex flex-col gap-1 overflow-y-auto no-scrollbar">
          {navItems.map((item) => {
            if (item.isProfile) return null;
            const isActive = activeTab === item.name && !selectedCourse;
            return (
              <button
                key={item.name}
                onClick={() => handleTabClick(item.name)}
                className={`w-full flex flex-col items-center justify-center py-3 gap-1 relative transition-colors ${
                  isActive ? 'bg-white text-[#0055a5]' : 'text-white hover:bg-black/20'
                }`}
              >
                <div className="relative">
                  <item.icon size={26} strokeWidth={isActive ? 2.5 : 1.5} />
                  {item.badge && (
                    <span className="absolute -top-1 -right-2 bg-[#e03a3e] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#2D3B45]">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className={`text-[11px] font-medium mt-1 ${isActive ? 'text-[#0055a5]' : 'text-white'}`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        <button 
          onClick={() => navigate('/student-dashboard')}
          className="mt-auto w-full flex flex-col items-center justify-center py-3 gap-1 text-white hover:bg-black/20 transition-colors"
        >
          <LogOut size={26} strokeWidth={1.5} />
          <span className="text-[11px] font-medium text-center mt-1">Portal</span>
        </button>
      </div>

      {/* Main Content Area */}
      {renderContent()}
    </div>
  );
}
