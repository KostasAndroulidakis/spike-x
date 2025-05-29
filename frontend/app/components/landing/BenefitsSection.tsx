// File: app/components/landing/BenefitsSection.tsx
import React from "react";
import { CheckCircle } from "lucide-react";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";
import { BENEFITS, BENEFITS_CONTENT } from "./constants";

/**
 * Benefits section component for landing page
 * Follows SRP: Only responsible for displaying benefits checklist
 */
export function BenefitsSection() {
  const theme = useMarketingTheme();
  
  return (
    <div className={`bg-gradient-to-br ${theme.content.gradientFrom} ${theme.content.gradientTo} rounded-3xl p-12 mb-20`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${theme.page.text} mb-4`}>
            {BENEFITS_CONTENT.title}
          </h2>
          <p className={`text-xl ${theme.content.textSecondary}`}>
            {BENEFITS_CONTENT.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {BENEFITS.map((benefit) => (
            <div key={benefit.text} className="flex items-center gap-3">
              <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
              <span className={`${theme.page.text} font-medium`}>
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
