// File: app/components/navbar/LandingNavbar.tsx
import React from "react";
import { Link } from "@remix-run/react";

export default function LandingNavbar() {
  const menuItems = [
    { text: "About", path: "/about" },
    { text: "Features", path: "/features" },
    { text: "Solutions", path: "/solutions" },
    { text: "Pricing", path: "/pricing" },
    { text: "News", path: "/news" },
  ];

  return (
    <nav className="bg-[var(--nav-bg)] border-b border-[var(--border)] pl-9 pr-7 py-4">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-[var(--text)]">
            SPIKE-X
          </Link>
        </div>

        {/* Right side - Menu items and Auth button */}
        <div className="hidden md:flex items-center space-x-1">
          {menuItems.map(({ text, path }) => (
            <Link
              key={text}
              to={path}
              className="px-4 py-2 text-[var(--text)] hover:underline transition-all"
            >
              {text}
            </Link>
          ))}
          
          <Link
            to="/login"
            className="ml-11 px-4 py-2 bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] rounded-md transition-colors"
          >
            Try SPIKE-X
          </Link>
        </div>
      </div>

      {/* Mobile menu - TODO: Implement responsive mobile menu */}
    </nav>
  );
}
