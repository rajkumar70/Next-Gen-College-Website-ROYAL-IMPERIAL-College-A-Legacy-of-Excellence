import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, ExternalLink, BookOpen, Filter, Download, FileText, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { researchItems } from '../data/researchData';

export default function Research() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const filteredPapers = useMemo(() => {
    return researchItems.filter(paper => 
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredPapers.length / itemsPerPage);
  const currentItems = filteredPapers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Research & Publications</span>
          <h1 className="text-4xl md:text-5xl font-serif text-royal-navy mb-6">Academic Publications</h1>
          <p className="text-royal-navy/60 text-lg max-w-3xl mx-auto">
            Explore our repository of high-impact research papers, journal articles, and conference proceedings published by our faculty and research scholars.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by title, author, or keyword..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-lg text-royal-navy font-medium hover:bg-gray-50 transition-colors flex-1 md:flex-none">
              <Filter size={18} />
              Filter
            </button>
          </div>
        </div>

        {/* Papers List */}
        <div className="space-y-6">
          <div className="text-sm text-gray-500 mb-4">
            Showing {filteredPapers.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to {Math.min(currentPage * itemsPerPage, filteredPapers.length)} of {filteredPapers.length} publications
          </div>
          {currentItems.length > 0 ? (
            currentItems.map((paper, index) => (
              <motion.div 
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % itemsPerPage) * 0.05 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${paper.type === 'Book' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}`}>
                        {paper.type}
                      </span>
                      {paper.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-royal-navy/5 text-royal-navy text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-serif text-royal-navy mb-2 group-hover:text-royal-gold transition-colors">
                      {paper.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 font-medium">
                      {paper.authors}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        {paper.type === 'Book' ? <BookOpen size={14} /> : <FileText size={14} />} 
                        {paper.venue}
                      </span>
                      <span>•</span>
                      <span>{paper.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                      {paper.abstract}
                    </p>
                  </div>
                  <div className="flex md:flex-col gap-3 shrink-0">
                    <a 
                      href={paper.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-royal-navy text-white rounded-lg font-medium hover:bg-royal-navy/90 transition-colors flex-1 md:flex-none"
                    >
                      <ExternalLink size={18} />
                      {paper.type === 'Book' ? 'View Book' : 'Read Paper'}
                    </a>
                    {paper.type === 'Paper' && (
                      <a 
                        href={`${paper.link}.pdf`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-royal-navy rounded-lg font-medium hover:bg-gray-50 transition-colors flex-1 md:flex-none"
                      >
                        <Download size={18} />
                        Download PDF
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
              <BookOpen className="mx-auto text-gray-300 mb-4" size={48} />
              <h3 className="text-xl font-serif text-royal-navy mb-2">No publications found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {[...Array(Math.min(5, totalPages))].map((_, idx) => {
                  // Show pages around current page
                  let pageNum = currentPage;
                  if (currentPage <= 3) {
                    pageNum = idx + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + idx;
                  } else {
                    pageNum = currentPage - 2 + idx;
                  }
                  
                  // Ensure pageNum is valid
                  if (pageNum > 0 && pageNum <= totalPages) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                          currentPage === pageNum 
                            ? 'bg-royal-navy text-white' 
                            : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  }
                  return null;
                })}
              </div>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Compliance Section */}
        <div className="mt-20 bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <ShieldCheck className="w-12 h-12 text-royal-gold mx-auto mb-4" />
          <h2 className="text-2xl font-serif text-royal-navy mb-3">Research Integrity & Compliance</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            All research activities at Royal Imperial College strictly adhere to the ethical guidelines and regulations set forth by the UGC and AICTE.
          </p>
          <Link to="/disclosures" className="inline-flex items-center gap-2 px-6 py-3 border border-royal-navy text-royal-navy font-bold rounded-sm hover:bg-royal-navy hover:text-white transition-all">
            VIEW RESEARCH POLICIES & DISCLOSURES
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
