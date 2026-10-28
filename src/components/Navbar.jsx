import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const useDarkMode = savedTheme !== "light";

    setDarkMode(useDarkMode);
    document.documentElement.classList.toggle("dark", useDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;

    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

 const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

  const bookCallUrl =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ03";

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="text-xl font-bold tracking-wider text-slate-900 dark:text-slate-100"
        >
          Rahul <span className="text-cyan-500">Tiwari</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="rounded-xl border border-slate-200 bg-slate-100 p-2.5 text-slate-700 transition-all hover:scale-105 dark:border-slate-800 dark:bg-slate-900 dark:text-cyan-400"
            aria-label="Toggle theme"
            type="button"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <a
            href={bookCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all hover:bg-cyan-400"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-xl border border-slate-200 bg-slate-100 p-2 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-cyan-400"
            aria-label="Toggle theme"
            type="button"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-slate-200 bg-slate-100 p-2 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            type="button"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-20 flex max-h-[calc(100vh-5rem)] flex-col gap-4 overflow-y-auto border-b border-slate-200 bg-white px-6 py-6 shadow-xl dark:border-slate-800 dark:bg-slate-950 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className="text-base font-medium text-slate-700 transition-colors hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href={bookCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="mt-2 w-full rounded-xl bg-cyan-500 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all hover:bg-cyan-400"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
