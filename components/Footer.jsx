'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-opacity duration-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 w-full max-w-screen-2xl mx-auto">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="text-xl font-serif text-[#04072E] dark:text-white hover:opacity-80 transition-opacity"
          >
            The Sovereign Editorial
          </Link>
          <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            A new era of political thought and statesmanship, dedicated to the preservation and progress of the sovereign ideal.
          </p>
        </div>

        {/* Navigate */}
        <div className="flex flex-col gap-4">
          <h5 className="font-headline text-xl italic text-[#04072E] dark:text-white mb-2">Navigate</h5>
          {[
            { href: '/', label: 'Home' },
            { href: '/issues', label: 'Issues' },
            { href: '/complain', label: 'Complaints' },
            { href: '/shop', label: 'Shop' },
            { href: '/news', label: 'News' },
            { href: '/volunteer', label: 'Volunteer' },
            { href: '/donation', label: 'Donate' },
            { href: '/about', label: 'About' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-500 dark:text-slate-400 text-sm font-sans hover:underline decoration-red-700 underline-offset-4 transition-colors hover:text-red-700 dark:hover:text-red-500"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Information */}
        <div className="flex flex-col gap-4">
          <h5 className="font-headline text-xl italic text-[#04072E] dark:text-white mb-2">Information</h5>
          {[
            { href: '#privacy', label: 'Privacy Policy' },
            { href: '#terms', label: 'Terms of Service' },
            { href: '#press', label: 'Press Kit' },
            { href: '#contact', label: 'Contact Us' },
            { href: '#faq', label: 'FAQ' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-500 dark:text-slate-400 text-sm font-sans hover:underline decoration-red-700 underline-offset-4 transition-colors hover:text-red-700 dark:hover:text-red-500"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Briefing */}
        <div className="flex flex-col gap-6">
          <h5 className="font-headline text-xl italic text-[#04072E] dark:text-white mb-2">Briefing</h5>
          <p className="text-sm text-slate-500 dark:text-slate-400">Weekly dispatches from the front lines of sovereignty.</p>
          <div className="relative group">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 py-3 px-0 text-sm focus:outline-none focus:border-red-700 transition-colors placeholder:text-slate-400"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 hover:text-red-700 transition-colors hover:scale-110">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-2xl mx-auto px-12 pb-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-sans text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest text-center md:text-left">
          © 2024 The Sovereign Editorial. All rights reserved. Paid for by the Sovereign Committee.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-red-700 transition-colors hover:scale-110">
            <span className="material-symbols-outlined text-lg">public</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-red-700 transition-colors hover:scale-110">
            <span className="material-symbols-outlined text-lg">share</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-red-700 transition-colors hover:scale-110">
            <span className="material-symbols-outlined text-lg">verified_user</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
