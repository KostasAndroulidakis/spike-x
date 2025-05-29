// File: app/components/landing/FeatureCard.tsx
import React from "react";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";
import type { Feature } from "./constants";

/**
 * Individual feature card component
 * Follows SRP: Only responsible for displaying a single feature
 */
export function FeatureCard({ icon: Icon, title, description, colorClass }: Feature) {
  const theme = useMarketingTheme();
  
  return (
    <div className={`group ${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon size={32} className="text-white" />
      </div>
      
      <h3 className={`text-xl font-bold ${theme.page.text} mb-3`}>
        {title}
      </h3>
      
      <p className={`${theme.content.textSecondary} leading-relaxed`}>
        {description}
      </p>
    </div>
  );
}
