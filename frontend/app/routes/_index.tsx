// Root index route - serves as marketing homepage
// REFACTORED VERSION - Following SRP: Only responsible for page composition
import LandingLayout from "~/layouts/LandingLayout";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";
import { 
  HeroSection, 
  FeatureGrid, 
  BenefitsSection, 
  CTASection 
} from "~/components/landing";

/**
 * Landing page component - handles only page composition
 * Follows SRP: Only responsible for composing landing page sections
 * 
 * Responsibilities moved to:
 * - HeroSection: hero area display
 * - FeatureGrid: feature cards display
 * - BenefitsSection: benefits checklist display
 * - CTASection: call-to-action display
 * - constants: content configuration
 */
export default function Index() {
  const theme = useMarketingTheme();
  
  return (
    <LandingLayout>
      <div className={`min-h-screen ${theme.page.bg} ${theme.page.text}`}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <HeroSection />
          <FeatureGrid />
          <BenefitsSection />
          <CTASection />
        </div>
      </div>
    </LandingLayout>
  );
}
