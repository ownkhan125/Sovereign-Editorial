'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/issues', label: 'Issues' },
    { href: '/complain', label: 'Complaints' },
    { href: '/shop', label: 'Shop' },
    { href: '/news', label: 'News' },
    { href: '/volunteer', label: 'Volunteer' },
    { href: '/donation', label: 'Donate' },
    { href: '/about', label: 'About' },
  ]

  const isActive = (href) => {
    return pathname === href || pathname?.startsWith(href + '/')
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="text-2xl font-serif italic text-[#04072E] dark:text-white tracking-tight hover:opacity-80 transition-opacity"
          >
            The Sovereign Editorial
          </Link>

          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                  isActive(link.href)
                    ? 'text-[#04072E] dark:text-white border-b-2 border-red-700 pb-1 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-red-700 dark:hover:text-red-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/volunteer" className="hidden lg:flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface hover:text-red-700 hover:scale-105 transition-all duration-300 active:scale-95">
            Join Us
          </Link>
          <Link href="/donation" className="bg-gradient-to-tr from-primary to-primary-container text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm hover:translate-y-[-2px] transition-all duration-300 active:scale-95 shadow-lg shadow-primary/10">
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
