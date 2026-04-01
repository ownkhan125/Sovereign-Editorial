"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/issues", label: "Issues" },
    { href: "/complain", label: "Complaints" },
    { href: "/shop", label: "Shop" },
    { href: "/news", label: "News" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href) =>
    pathname === href || pathname?.startsWith(href + "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition ${
          scrolled ? "bg-white/95 backdrop-blur border-b shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-primary"
            >
              The Sovereign
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition ${
                    isActive(link.href)
                      ? "text-secondary border-b-2 border-secondary pb-1"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/volunteer"
                className="px-4 py-2 text-sm border rounded hover:bg-gray-100 transition"
              >
                Join
              </Link>
              <Link
                href="/donation"
                className="px-4 py-2 text-sm bg-primary text-white rounded hover:bg-secondary transition"
              >
                Donate
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-2xl"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed top-16 left-0 w-full bg-white border-t shadow-md z-40">
          <div className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm font-medium ${
                  isActive(link.href) ? "text-secondary" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/volunteer"
              className="mt-3 px-4 py-2 border rounded text-center"
            >
              Join
            </Link>

            <Link
              href="/donation"
              className="px-4 py-2 bg-primary text-white rounded text-center"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
