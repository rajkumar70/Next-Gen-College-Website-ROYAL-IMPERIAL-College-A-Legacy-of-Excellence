import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ChevronRight, FileText } from 'lucide-react';

// Simple search index for student portal
const searchIndex = [
  { title: 'Dashboard', id: 'dashboard', description: 'Overview of your academic progress and schedule.', category: 'General' },
  { title: 'My Courses', id: 'courses', description: 'View your current courses, syllabus, and materials.', category: 'Academics' },
  { title: 'Grades & Transcripts', id: 'grades', description: 'Check your grades, GPA, and request transcripts.', category: 'Academics' },
  { title: 'Registration', id: 'registration', description: 'Register for upcoming semester courses and exams.', category: 'Enrollment' },
  { title: 'Financial Account', id: 'financial', description: 'View fee details, make payments, and check balances.', category: 'Finance' },
  { title: 'Library Services', id: 'library', description: 'Access library resources, study rooms, and borrowed items.', category: 'Resources' },
  { title: 'Library DB', id: 'library-db', description: 'Search the comprehensive library database for books and journals.', category: 'Resources' },
  { title: 'Career Center', id: 'career', description: 'Resume review, job postings, and interview prep.', category: 'Career' },
  { title: 'Certificates', id: 'certificates', description: 'Request bonafide, provisional, and other certificates.', category: 'Documents' },
  { title: 'Settings', id: 'settings', description: 'Manage your profile, security, and preferences.', category: 'Account' },
  { title: 'Advising', id: 'advising', description: 'Schedule appointments with your academic advisor.', category: 'Support' },
  { title: 'Campus Map', id: 'campus-map', description: 'Interactive map of the university campus.', category: 'Campus' },
  { title: 'Dining Plan', id: 'dining-plan', description: 'Manage your meal plan and check dining hall menus.', category: 'Campus' },
];

interface StudentSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tabId: string) => void;
}

export default function StudentSearchOverlay({ isOpen, onClose, onSelectTab }: StudentSearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(searchIndex);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      const lowercaseQuery = query.toLowerCase();
      const filtered = searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(lowercaseQuery) ||
          item.description.toLowerCase().includes(lowercaseQuery) ||
          item.category.toLowerCase().includes(lowercaseQuery)
      );
      setResults(filtered);
    }
  }, [query]);

  const handleResultClick = (id: string) => {
    onClose();
    onSelectTab(id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-royal-navy/50 backdrop-blur-3xl flex flex-col pt-32 px-4 sm:px-6 lg:px-8"
        >
          <div className="absolute top-6 right-6 lg:top-10 lg:right-10">
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-white/50" />
              </div>
              <input
                ref={inputRef}
                type="text"
                className="block w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-royal-gold focus:border-transparent transition-all"
                placeholder="Search student portal..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </motion.div>

            {query.trim() !== '' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[60vh] overflow-y-auto"
              >
                {results.length > 0 ? (
                  <ul className="divide-y divide-slate-100">
                    {results.map((result, index) => (
                      <motion.li
                        key={result.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <button
                          onClick={() => handleResultClick(result.id)}
                          className="w-full text-left px-6 py-4 hover:bg-slate-50 transition-colors flex items-center justify-between group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-slate-100 text-slate-500 rounded-lg group-hover:bg-royal-gold/20 group-hover:text-royal-gold transition-colors">
                              <FileText size={20} />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-royal-navy group-hover:text-royal-gold transition-colors">
                                {result.title}
                              </h4>
                              <p className="text-sm text-slate-500 mt-1">{result.description}</p>
                              <span className="inline-block mt-2 text-xs font-medium px-2 py-1 bg-slate-100 text-slate-500 rounded-md">
                                {result.category}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="text-slate-300 group-hover:text-royal-gold transition-colors" />
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-12 text-center text-slate-500">
                    <Search className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                    <p className="text-lg font-medium text-slate-900">No results found</p>
                    <p>We couldn't find anything matching "{query}"</p>
                  </div>
                )}
              </motion.div>
            )}

            {query.trim() === '' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <div className="col-span-full mb-2">
                  <h3 className="text-white/70 text-sm font-medium uppercase tracking-wider">Quick Links</h3>
                </div>
                {[
                  { title: 'My Courses', id: 'courses' },
                  { title: 'Grades', id: 'grades' },
                  { title: 'Registration', id: 'registration' },
                  { title: 'Library', id: 'library' },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleResultClick(link.id)}
                    className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-medium transition-colors text-left"
                  >
                    {link.title}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
