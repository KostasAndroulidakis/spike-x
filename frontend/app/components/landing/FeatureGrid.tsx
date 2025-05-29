// File: app/components/landing/FeatureGrid.tsx
import React from "react";
import { FeatureCard } from "./FeatureCard";
import { FEATURES } from "./constants";

/**
 * Feature grid component for landing page
 * Follows SRP: Only responsible for displaying the grid of features
 */
export function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {FEATURES.map((feature) => (
        <FeatureCard 
          key={feature.title} 
          {...feature} 
        />
      ))}
    </div>
  );
}
