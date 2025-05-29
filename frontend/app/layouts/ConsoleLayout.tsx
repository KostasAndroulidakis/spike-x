// File: app/layouts/ConsoleLayout.tsx - REFACTORED VERSION
// Following SRP: Only responsible for layout composition
import React from "react";
import { Outlet } from "@remix-run/react";
import { useSidebarNavigation } from "~/hooks/useSidebarNavigation";
import { SidebarMenu } from "~/components/navigation";

/**
 * Console layout component - handles only layout structure
 * Follows SRP: Only responsible for layout composition
 * 
 * Responsibilities moved to:
 * - useSidebarNavigation: navigation state and logic
 * - SidebarMenu: menu rendering and interactions
 */
export default function ConsoleLayout() {
  const { collapsed, menuItems, isActive, toggle } = useSidebarNavigation();

  return (
    <div className="flex h-screen bg-[var(--background)]">
      <SidebarMenu 
        collapsed={collapsed}
        menuItems={menuItems}
        isActive={isActive}
        onToggle={toggle}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
