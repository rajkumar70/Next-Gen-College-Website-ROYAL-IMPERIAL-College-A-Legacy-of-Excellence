import React from 'react';
import Marquee from 'react-fast-marquee';
import { Megaphone } from 'lucide-react';

const announcements = [
  "Admissions open for Academic Year 2026-27. Apply before March 31st.",
  "Royal Imperial College ranked #1 in Innovation by NIRF 2025.",
  "International Conference on Sustainable Technology to be held on April 15th.",
  "Placement drive: 45+ Fortune 500 companies visiting campus this week.",
  "New Research Wing inaugurated by the Minister of Education."
];

export default function AnnouncementBar() {
  return (
    <div className="bg-royal-gold text-royal-navy py-2 flex items-center overflow-hidden border-y border-royal-gold-light/30">
      <div className="bg-royal-navy text-royal-gold px-4 py-1 flex items-center gap-2 font-bold text-xs tracking-widest uppercase z-10 shadow-xl">
        <Megaphone size={14} />
        Updates
      </div>
      <Marquee gradient={false} speed={50} pauseOnHover className="font-medium text-sm">
        {announcements.map((text, i) => (
          <span key={i} className="mx-12 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-royal-navy rounded-full" />
            {text}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
