// File: app/components/common/Logo.tsx
import React from "react";
import { Link } from "@remix-run/react";

interface LogoProps {
  className?: string;
  to?: string;
  onClick?: () => void;
}

/**
 * Reusable SPIKE-X logo component
 * Can be used as a link or as a simple text element
 */
export default function Logo({ className = "", to = "/", onClick }: LogoProps) {
  const logoClasses = `text-2xl font-bold ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={logoClasses} onClick={onClick}>
        SPIKE-X
      </Link>
    );
  }
  
  return (
    <span className={logoClasses} onClick={onClick}>
      SPIKE-X
    </span>
  );
}
