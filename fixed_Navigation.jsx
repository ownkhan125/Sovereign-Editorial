"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/issues", label: "Issues" },
    { href: "/complain", label: "Complaints" },
    { href: "/shop", label: "Shop" },
    { href: "/news", label: "News" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/donation", label: "Donate" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href) => {
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm dark:shadow-none border-b border-slate-200 dark:border-slate-800">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex max-w-screen-2xl mx-auto justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-serif italic text-[#04072E] dark:text-white tracking-tight hover:opacity-80 transition-opacity w-auto flex-shrink-0"
          >
            The Sovereign Editorial
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 sm:gap-2 lg:gap-4 xl:gap-6 items-center flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-xs sm:text-sm uppercase tracking-wider font-medium transition-colors duration-300 px-2 sm:px-3 py-1.5 sm:py-2 rounded-sm ${
                  isActive(link.href)
                    ? "text-[#04072E] dark:text-white border-b-2 border-red-700 pb-1 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-red-700 dark:hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-3">
            <Link
              href="/volunteer"
              className="px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-on-surface hover:text-red-700 hover:scale-105 transition-all duration-300"
            >
              Join Us
            </Link>
            <Link
              href="/donation"
              className="bg-gradient-to-tr from-primary to-primary-container text-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest rounded-sm hover:translate-y-[-2px] transition-all duration-300 shadow-lg shadow-primary/10 whitespace-nowrap"
            >
              Donate
            </Link>
          </div>

          {/* Mobile CTAs + Menu */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/donation"
              className="bg-gradient-to-tr from-primary to-primary-container text-white px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm hover:translate-y-[-1px] transition-all duration-300 shadow-md shadow-primary/20 whitespace-nowrap flex-shrink-0"
            >
              Donate
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl text-[#04072E] dark:text-white">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700 px-4 pb-4">
            <div className="space-y-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-r-4 border-red-500 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-red-700 dark:hover:text-red-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/volunteer"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-semibold text-[#04072E] dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border-r-4 border-transparent hover:border-secondary"
              >
                Join the Movement
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
