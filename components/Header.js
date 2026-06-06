"use client";

import { useState, useEffect } from "react";
import { navLinks } from "./data";
import NavIcon from "./NavIcon";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="text-xl font-display font-bold tracking-tight text-brand-deep">
          HomeKey Realty
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-brand"
                >
                  <NavIcon name={link.icon} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[55] bg-ink/50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Mobile slide-in menu (right to left) */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`fixed right-0 top-0 z-[60] flex h-full w-3/4 max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
          <span className="text-lg font-display font-bold text-brand-deep">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-1 p-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-surface-alt hover:text-brand"
              >
                <NavIcon name={link.icon} className="text-brand" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
