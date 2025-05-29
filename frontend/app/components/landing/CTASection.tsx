// File: app/components/landing/CTASection.tsx
import React from "react";
import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";
import { CTA_CONTENT } from "./constants";

/**
 * Call-to-action section component for landing page
 * Follows SRP: Only responsible for displaying final CTA section
 */
export function CTASection() {
  const theme = useMarketingTheme();
  
  return (
    <div className={`text-center ${theme.content.cardBg} border ${theme.content.cardBorder} rounded-3xl p-12`}>
      <h2 className={`text-3xl font-bold ${theme.page.text} mb-4`}>
        {CTA_CONTENT.title}
      </h2>
      
      <p className={`text-xl ${theme.content.textSecondary} mb-8 max-w-2xl mx-auto`}>
        {CTA_CONTENT.subtitle}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/console/login"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all"
        >
          {CTA_CONTENT.primaryCTA}
          <ArrowRight size={20} />
        </Link>
        
        <Link
          to="/features"
          className={`inline-flex items-center ${theme.content.buttonSecondary} text-lg px-8 py-4 rounded-lg font-semibold transition-all`}
        >
          {CTA_CONTENT.secondaryCTA}
        </Link>
      </div>
    </div>
  );
}
