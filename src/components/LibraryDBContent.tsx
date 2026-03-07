import React, { useState } from 'react';
import { Search, BookOpen, Filter, Download, Star, Clock, CheckCircle } from 'lucide-react';

const books = [
  { id: 1, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', category: 'Computer Science', status: 'Available', rating: 4.8, year: 2009 },
  { id: 2, title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell', category: 'AI', status: 'Checked Out', rating: 4.9, year: 2020 },
  { id: 3, title: 'Clean Code', author: 'Robert C. Martin', category: 'Software Engineering', status: 'Available', rating: 4.7, year: 2008 },
  { id: 4, title: 'Design Patterns', author: 'Erich Gamma', category: 'Software Engineering', status: 'Reserved', rating: 4.6, year: 1994 },
  { id: 5, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', category: 'Software Engineering', status: 'Available', rating: 4.8, year: 1999 },
  { id: 6, title: 'Deep Learning', author: 'Ian Goodfellow', category: 'AI', status: 'Available', rating: 4.9, year: 2016 },
];

export default function LibraryDBContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Computer Science', 'AI', 'Software Engineering', 'Mathematics', 'Physics'];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || book.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-royal-navy">Library Database</h1>
          <p className="text-slate-600">Search and reserve books, journals, and research papers.</p>
        </div>
        <button className="px-4 py-2 bg-royal-navy text-white text-sm font-bold rounded-lg shadow-md hover:bg-royal-navy/90 transition-colors flex items-center gap-2">
          <BookOpen size={16} />
          My Borrowed Items
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search by title, author, or ISBN..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-royal-navy focus:ring-1 focus:ring-royal-navy transition-all"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
          <Filter className="text-slate-400 shrink-0" size={20} />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
                activeCategory === cat 
                  ? 'bg-royal-navy text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredBooks.map(book => (
          <div key={book.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1 ${
                book.status === 'Available' ? 'bg-emerald-50 text-emerald-600' :
                book.status === 'Checked Out' ? 'bg-amber-50 text-amber-600' :
                'bg-blue-50 text-blue-600'
              }`}>
                {book.status === 'Available' ? <CheckCircle size={12} /> : <Clock size={12} />}
                {book.status}
              </span>
              <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                <Star size={14} fill="currentColor" />
                {book.rating}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-royal-navy mb-1 group-hover:text-royal-gold transition-colors line-clamp-2">{book.title}</h3>
            <p className="text-slate-500 font-medium mb-4">{book.author}</p>
            
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="text-xs text-slate-400 font-medium">
                {book.category} • {book.year}
              </div>
              <button 
                disabled={book.status !== 'Available'}
                className="px-4 py-2 bg-royal-navy text-white text-sm font-bold rounded-lg hover:bg-royal-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {book.status === 'Available' ? 'Reserve' : 'Join Waitlist'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <BookOpen className="mx-auto text-slate-300 mb-4" size={48} />
          <h3 className="text-xl font-bold text-royal-navy mb-2">No books found</h3>
          <p className="text-slate-500">Try adjusting your search or category filter.</p>
        </div>
      )}
    </div>
  );
}
