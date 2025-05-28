// File: app/components/navbar/LabNavbar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "@remix-run/react";
import {
  File,
  Brain,
  Activity,
  Eye,
  ChartScatter,
  ChevronDown,
  Save,
  Download,
  X
} from "lucide-react";

interface LabNavbarProps {
  modelName?: string;
}

export default function LabNavbar({ modelName = "Untitled Model" }: LabNavbarProps) {
  const location = useLocation();
  const [fileMenuOpen, setFileMenuOpen] = useState(false);

  const menuItems = [
    { icon: File, text: "File", path: "/lab/file", hasDropdown: true },
    { icon: Brain, text: "Architecture", path: "/lab/architecture" },
    { icon: Activity, text: "Training", path: "/lab/training" },
    { icon: Eye, text: "Visualization", path: "/lab/visualization" },
    { icon: ChartScatter, text: "Evaluation", path: "/lab/evaluation" },
  ];

  const fileMenuItems = [
    { icon: Save, text: "Save", action: "save" },
    { icon: Save, text: "Save As", action: "save-as" },
    { icon: Download, text: "Export Model", action: "export" },
    { icon: X, text: "Close Model", action: "close" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleFileAction = (action: string) => {
    setFileMenuOpen(false);
    // TODO: Implement file actions
    console.log(`File action: ${action}`);
  };

  return (
    <nav className="bg-[var(--nav-bg)] border-b border-[var(--border)] px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Menu items */}
        <div className="flex items-center space-x-1">
          {menuItems.map(({ icon: Icon, text, path, hasDropdown }) => (
            <div key={text} className="relative">
              {hasDropdown ? (
                <button
                  onClick={() => setFileMenuOpen(!fileMenuOpen)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-[var(--text)] hover:bg-[var(--nav-hover)]`}
                >
                  <Icon size={18} />
                  <span>{text}</span>
                  <ChevronDown size={14} />
                </button>
              ) : (
                <Link
                  to={path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                    isActive(path)
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--text)] hover:bg-[var(--nav-hover)]'
                  }`}
                >
                  <Icon size={18} />
                  <span>{text}</span>
                </Link>
              )}

              {/* File dropdown menu */}
              {hasDropdown && fileMenuOpen && (
                <div className="absolute top-full left-0 mt-1 bg-[var(--menu-bg)] border border-[var(--border)] rounded-md shadow-lg min-w-48 z-50">
                  {fileMenuItems.map(({ icon: ItemIcon, text, action }) => (
                    <button
                      key={action}
                      onClick={() => handleFileAction(action)}
                      className="w-full flex items-center gap-2 px-3 py-2 text-left text-[var(--text)] hover:bg-[var(--menu-hover)] first:rounded-t-md last:rounded-b-md"
                    >
                      <ItemIcon size={16} />
                      <span>{text}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Center - Model name */}
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold text-[var(--text)]">{modelName}</h1>
        </div>

        {/* Right side - User menu or additional actions */}
        <div className="flex items-center">
          <Link
            to="/console/dashboard"
            className="px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--nav-hover)] rounded-md transition-colors"
          >
            Back to Console
          </Link>
        </div>
      </div>

      {/* Overlay to close dropdown */}
      {fileMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setFileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
