// File: app/components/landing/HeroSection.tsx
import React from "react";
import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";
import { HERO_CONTENT } from "./constants";

/**
 * Hero section component for landing page
 * Follows SRP: Only responsible for hero section display
 */
export function HeroSection() {
  const theme = useMarketingTheme();
  
  return (
    <div className="text-center mb-16">
      <div className="mb-6">
        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
          {HERO_CONTENT.badge}
        </span>
      </div>
      
      <h1 className={`text-6xl md:text-7xl font-bold ${theme.page.text} mb-6 tracking-tight`}>
        {HERO_CONTENT.title}
      </h1>
      
      <p className={`text-2xl md:text-3xl ${theme.content.textSecondary} mb-8 max-w-4xl mx-auto leading-relaxed`}>
        {HERO_CONTENT.subtitle}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          to="/console/login"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all"
        >
          {HERO_CONTENT.primaryCTA}
          <ArrowRight size={20} />
        </Link>
        
        <Link
          to="/about"
          className={`inline-flex items-center ${theme.content.buttonSecondary} text-lg px-8 py-4 rounded-lg font-semibold transition-all`}
        >
          {HERO_CONTENT.secondaryCTA}
        </Link>
      </div>
    </div>
  );
}
