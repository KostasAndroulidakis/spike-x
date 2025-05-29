// File: app/components/navbar/LandingNavbar.tsx
import React from "react";
import { Link } from "@remix-run/react";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";
import { Logo } from "~/components/common";

export default function LandingNavbar() {
  const theme = useMarketingTheme();
  const menuItems = [
    { text: "About", path: "/about" },
    { text: "Features", path: "/features" },
    { text: "Solutions", path: "/solutions" },
    { text: "Pricing", path: "/pricing" },
    { text: "News", path: "/news" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${theme.navbar.bg} pl-9 pr-7 py-4`}>
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Logo className={theme.navbar.logo} to="/" />
        </div>

        {/* Right side - Menu items and Auth button */}
        <div className="hidden md:flex items-center space-x-1">
          {menuItems.map(({ text, path }) => (
            <Link
              key={text}
              to={path}
              className={`px-4 py-2 ${theme.navbar.text} ${theme.navbar.menuHover} transition-all`}
            >
              {text}
            </Link>
          ))}
          
          <Link
            to="/console/login"
            className={`ml-11 px-4 py-2 ${theme.navbar.button.default} ${theme.navbar.button.hover} rounded-md transition-colors`}
          >
            Try SPIKE-X
          </Link>
        </div>
      </div>

      {/* Mobile menu - TODO: Implement responsive mobile menu */}
    </nav>
  );
}
