import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ChevronRight, FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Simple search index
const searchIndex = [
  { title: 'About Us', path: '/about', description: 'Learn about our history, mission, and vision.', category: 'General' },
  { title: 'Academics', path: '/academics', description: 'Explore our academic programs and departments.', category: 'Academics' },
  { title: 'Admissions', path: '/admissions', description: 'Information on how to apply, requirements, and deadlines.', category: 'Admissions' },
  { title: 'Research', path: '/research', description: 'Discover our research initiatives and centers.', category: 'Research' },
  { title: 'Student Life', path: '/student-life', description: 'Campus life, clubs, and student organizations.', category: 'Campus' },
  { title: 'Quick Links', path: '/quick-links', description: 'Important links for students and staff.', category: 'General' },
  { title: 'Academic Calendar', path: '/academic-calendar', description: 'Important dates and schedules for the academic year.', category: 'Academics' },
  { title: 'Examination Results', path: '/examination-results', description: 'Check your latest examination results.', category: 'Academics' },
  { title: 'Library Resources', path: '/library-resources', description: 'Access our extensive library collections and databases.', category: 'Resources' },
  { title: 'Hostel Facilities', path: '/hostel-facilities', description: 'Information about student accommodation and dining.', category: 'Campus' },
  { title: 'Alumni Association', path: '/alumni-association', description: 'Connect with our global alumni network.', category: 'Community' },
  { title: 'Fee Structure', path: '/fee-structure', description: 'Detailed breakdown of tuition and other fees.', category: 'Admissions' },
  { title: 'Scholarships', path: '/scholarships', description: 'Financial aid and scholarship opportunities.', category: 'Admissions' },
  { title: 'Mandatory Disclosures', path: '/disclosures', description: 'Statutory compliance and mandatory disclosures.', category: 'Compliance' },
  { title: 'Undergraduate Programs', path: '/undergraduate-programs', description: 'Bachelor degree programs across various disciplines.', category: 'Academics' },
  { title: 'Postgraduate Programs', path: '/postgraduate-programs', description: 'Master degree programs and specializations.', category: 'Academics' },
  { title: 'Ph.D. Research', path: '/phd-research', description: 'Doctoral programs and research opportunities.', category: 'Research' },
  { title: 'Student Portal', path: '/portal', description: 'Login to access student services and information.', category: 'Resources' },
];

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(searchIndex);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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

  const handleResultClick = (path: string) => {
    onClose();
    navigate(path);
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
                <Search className="h-8 w-8 text-royal-gold" />
              </div>
              <input
                ref={inputRef}
                type="text"
                className="block w-full pl-16 pr-4 py-6 bg-white/10 border border-white/20 rounded-2xl text-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-royal-gold focus:border-transparent transition-all"
                placeholder="Search for programs, admissions, resources..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar"
            >
              {query.trim() === '' ? (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-white/20 mx-auto mb-4" />
                  <p className="text-white/50 text-lg">Type to start searching...</p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <span className="text-sm text-white/40 uppercase tracking-wider w-full mb-2">Popular Searches</span>
                    {['Admissions', 'Scholarships', 'Research', 'Hostel'].map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors text-sm"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length > 0 ? (
                <div className="grid gap-4">
                  {results.map((result, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={result.path}
                      onClick={() => handleResultClick(result.path)}
                      className="group flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-royal-gold/50 cursor-pointer transition-all"
                    >
                      <div className="p-3 rounded-lg bg-royal-gold/10 text-royal-gold group-hover:bg-royal-gold group-hover:text-royal-navy transition-colors">
                        <FileText size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-xl font-serif text-white group-hover:text-royal-gold transition-colors">
                            {result.title}
                          </h3>
                          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/70">
                            {result.category}
                          </span>
                        </div>
                        <p className="text-white/60 text-sm">{result.description}</p>
                      </div>
                      <div className="self-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all">
                        <ChevronRight className="text-royal-gold" size={24} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-white/50 text-lg">No results found for "{query}"</p>
                  <p className="text-white/40 mt-2">Try checking your spelling or using more general terms.</p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
