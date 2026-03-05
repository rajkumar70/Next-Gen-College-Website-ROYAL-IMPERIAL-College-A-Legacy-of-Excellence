import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ChevronRight } from 'lucide-react';

export default function Sitemap() {
  const sitemapData = [
    {
      category: "Main",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
      ]
    },
    {
      category: "Academics",
      links: [
        { name: "Departments", path: "/departments" },
        { name: "Fee Structure", path: "/fee-structure" },
      ]
    },
    {
      category: "Student Life",
      links: [
        { name: "Campus Life", path: "/campus-life" },
        { name: "Placements", path: "/placements" },
      ]
    },
    {
      category: "Compliance & Legal",
      links: [
        { name: "Mandatory Disclosures (AICTE/UGC)", path: "/disclosures" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Sitemap", path: "/sitemap" },
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-6">
            <div className="w-12 h-12 bg-royal-blue/10 rounded-xl flex items-center justify-center text-royal-blue">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-royal-blue">Sitemap</h1>
              <p className="text-slate-500 mt-1">Navigate through Anand Engineering College</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {sitemapData.map((section, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h2 className="text-xl font-bold text-royal-blue mb-4 pb-2 border-b border-slate-200">
                  {section.category}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path}
                        className="flex items-center text-slate-600 hover:text-royal-gold transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-slate-400 group-hover:text-royal-gold transition-colors" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
