// File: app/components/navigation/SidebarMenu.tsx
import React from "react";
import { Link } from "@remix-run/react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import type { MenuItem } from "~/hooks/useSidebarNavigation";

interface SidebarMenuProps {
  collapsed: boolean;
  menuItems: MenuItem[];
  isActive: (path: string) => boolean;
  onToggle: () => void;
}

/**
 * Sidebar menu component - handles only menu rendering
 * Follows SRP: Only responsible for displaying navigation menu
 */
export function SidebarMenu({ collapsed, menuItems, isActive, onToggle }: SidebarMenuProps) {
  return (
    <div className={`bg-[var(--nav-bg)] transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} border-r border-[var(--border)]`}>
      {/* Header */}
      <div className="p-4 border-b border-[var(--border)] flex items-center justify-between">
        {!collapsed && (
          <h1 className="text-xl font-bold text-[var(--text)]">SPIKE-X</h1>
        )}
        <button
          onClick={onToggle}
          className="p-2 rounded-md hover:bg-[var(--nav-hover)] text-[var(--text)] transition-colors"
          title={collapsed ? "Expand" : "Collapse"}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="p-2" role="navigation" aria-label="Console navigation">
        {menuItems.map(({ icon: Icon, text, path, external }) => (
          external ? (
            <a
              key={text}
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-md transition-colors text-[var(--text)] hover:bg-[var(--nav-hover)] mb-1"
              title={collapsed ? text : undefined}
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
              title={collapsed ? text : undefined}
            >
              <Icon size={20} />
              {!collapsed && <span>{text}</span>}
            </Link>
          )
        ))}
      </nav>
    </div>
  );
}
