// File: app/layouts/ConsoleLayout.tsx
import React, { useState } from "react";
import { Outlet, Link, useLocation } from "@remix-run/react";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Brain,
  Library,
  FileText,
  Settings,
  User,
  ExternalLink
} from "lucide-react";

export default function ConsoleLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, text: "Dashboard", path: "/console/dashboard" },
    { icon: Brain, text: "Models", path: "/console/models" },
    { icon: Library, text: "Library", path: "/console/library" },
    { icon: FileText, text: "Documentation", path: "https://docs.spikex.com", external: true },
    { icon: Settings, text: "Settings", path: "/console/settings" },
    { icon: User, text: "User Account", path: "/console/account" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-[var(--background)]">
      {/* Sidebar */}
      <div className={`bg-[var(--nav-bg)] transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} border-r border-[var(--border)]`}>
        {/* Header */}
        <div className="p-4 border-b border-[var(--border)] flex items-center justify-between">
          {!collapsed && (
            <h1 className="text-xl font-bold text-[var(--text)]">SPIKE-X</h1>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-md hover:bg-[var(--nav-hover)] text-[var(--text)] transition-colors"
            title={collapsed ? "Expand" : "Collapse"}
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-2">
          {menuItems.map(({ icon: Icon, text, path, external }) => (
            external ? (
              <a
                key={text}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-md transition-colors text-[var(--text)] hover:bg-[var(--nav-hover)] mb-1`}
              >
                <Icon size={20} />
                {!collapsed && (
                  <>
                    <span>{text}</span>
                    <ExternalLink size={14} className="ml-auto" />
                  </>
                )}
              </a>
            ) : (
              <Link
                key={text}
                to={path}
                className={`flex items-center gap-3 p-3 rounded-md transition-colors mb-1 ${
                  isActive(path)
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--text)] hover:bg-[var(--nav-hover)]'
                }`}
              >
                <Icon size={20} />
                {!collapsed && <span>{text}</span>}
              </Link>
            )
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
