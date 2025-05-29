// File: app/hooks/useSidebarNavigation.ts
import { useState } from "react";
import { useLocation } from "@remix-run/react";
import {
  LayoutDashboard,
  Brain,
  Library,
  FileText,
  Settings,
  User,
} from "lucide-react";

export interface MenuItem {
  icon: React.ComponentType<{ size?: number }>;
  text: string;
  path: string;
  external?: boolean;
}

/**
 * Hook for managing sidebar navigation state and logic
 * Follows SRP: Only handles navigation-related state and logic
 */
export function useSidebarNavigation() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { icon: LayoutDashboard, text: "Dashboard", path: "/console/dashboard" },
    { icon: Brain, text: "Models", path: "/console/models" },
    { icon: Library, text: "Library", path: "/console/library" },
    { icon: FileText, text: "Documentation", path: "https://docs.spikex.com", external: true },
    { icon: Settings, text: "Settings", path: "/console/settings" },
    { icon: User, text: "User Account", path: "/console/account" },
  ];

  const isActive = (path: string): boolean => location.pathname === path;
  
  const toggle = (): void => setCollapsed(!collapsed);

  return {
    collapsed,
    menuItems,
    isActive,
    toggle,
  };
}
