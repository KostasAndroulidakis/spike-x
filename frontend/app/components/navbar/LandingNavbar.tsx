// File: app/components/navbar/LandingNavbar.tsx
import React from "react";
import { Link, useLocation } from "@remix-run/react";
import { Zap, Info, LogIn, UserPlus } from "lucide-react";

export default function LandingNavbar() {
  const location = useLocation();

  const menuItems = [
    { icon: Info, text: "About", path: "/about" },
    { icon: Zap, text: "Features", path: "/features" },
    { text: "Solutions", path: "/solutions" },
    { text: "Pricing", path: "/pricing" },
    { text: "News", path: "/news" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[var(--nav-bg)] border-b border-[var(--border)] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-[var(--text)]">
            SPIKE-X
          </Link>
        </div>

        {/* Center menu */}
        <div className="hidden md:flex items-center space-x-1">
          {menuItems.map(({ icon: Icon, text, path }) => (
            <Link
              key={text}
              to={path}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                isActive(path)
                  ? 'bg-[var(--primary)] text-white'
                  : 'text-[var(--text)] hover:bg-[var(--nav-hover)]'
              }`}
            >
              {Icon && <Icon size={18} />}
              <span>{text}</span>
            </Link>
          ))}
        </div>

        {/* Right side - Auth buttons */}
        <div className="flex items-center space-x-3">
          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-2 text-[var(--text)] hover:bg-[var(--nav-hover)] rounded-md transition-colors"
          >
            <LogIn size={18} />
            <span>Login</span>
          </Link>
          <Link
            to="/signup"
            className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] rounded-md transition-colors"
          >
            <UserPlus size={18} />
            <span>Sign Up</span>
          </Link>
        </div>
      </div>

      {/* Mobile menu - TODO: Implement responsive mobile menu */}
    </nav>
  );
}
