import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import SearchOverlay from './SearchOverlay';

const navLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Research', href: '/research' },
  { name: 'Student Life', href: '/student-life' },
  { 
    name: 'Quick Links', 
    href: '/quick-links',
    dropdown: [
      { name: 'Academic Calendar', href: '/academic-calendar' },
      { name: 'Examination Results', href: '/examination-results' },
      { name: 'Library Resources', href: '/library-resources' },
      { name: 'Hostel Facilities', href: '/hostel-facilities' },
      { name: 'Alumni Association', href: '/alumni-association' },
      { name: 'Fee Structure', href: '/fee-structure' },
      { name: 'Scholarships', href: '/scholarships' },
    ]
  },
  { name: 'Disclosures', href: '/disclosures' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 glass-nav py-3'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 gold-gradient rounded-sm flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="text-royal-navy font-serif font-bold text-2xl">R</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl tracking-tight leading-none text-white transition-colors">
              ROYAL IMPERIAL
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-royal-gold font-bold">
              College of Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.href}
                className="text-white/80 hover:text-royal-gold text-sm font-medium tracking-wide transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 gold-gradient transition-all duration-300 group-hover:w-full" />
              </Link>
              
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-4 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                  <div className="py-2">
                    {link.dropdown.map((dropLink) => (
                      <Link
                        key={dropLink.name}
                        to={dropLink.href}
                        className="block px-4 py-2 text-sm text-royal-navy hover:bg-gray-50 hover:text-royal-gold transition-colors"
                      >
                        {dropLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <button 
            className="text-white/80 hover:text-royal-gold transition-colors"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={20} />
          </button>
          <Link
            to="/portal"
            className="flex items-center gap-2 px-5 py-2.5 rounded-sm gold-gradient text-royal-navy font-bold text-sm hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all active:scale-95"
          >
            <User size={16} />
            PORTAL LOGIN
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            className="text-white/80 hover:text-royal-gold transition-colors"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={24} />
          </button>
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-royal-navy z-40 lg:hidden flex flex-col items-center justify-center gap-6 transition-transform duration-500 overflow-y-auto py-20",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <div key={link.name} className="flex flex-col items-center w-full">
            <Link
              to={link.href}
              className="text-white text-2xl font-serif hover:text-royal-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
            {link.dropdown && (
              <div className="flex flex-col items-center mt-4 space-y-3">
                {link.dropdown.map((dropLink) => (
                  <Link
                    key={dropLink.name}
                    to={dropLink.href}
                    className="text-white/60 text-lg hover:text-royal-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {dropLink.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link
          to="/portal"
          className="mt-8 px-8 py-4 gold-gradient text-royal-navy font-bold rounded-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          PORTAL LOGIN
        </Link>
      </div>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
}
