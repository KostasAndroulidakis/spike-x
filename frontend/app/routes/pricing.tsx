import LandingLayout from "~/layouts/LandingLayout";
import { Link } from "@remix-run/react";
import { Check, ArrowRight, Users, GraduationCap, Building2 } from "lucide-react";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";
import { useState } from "react";

export default function Pricing() {
  const theme = useMarketingTheme();
  const [activeTab, setActiveTab] = useState('individual');

  const tabs = [
    { id: 'individual', label: 'Individual', icon: Users },
    { id: 'business', label: 'Business', icon: Building2 },
    { id: 'educational', label: 'Educational', icon: GraduationCap }
  ];

  const individualPlans = [
    {
      name: "Free",
      price: "0",
      period: "month",
      description: "Perfect for students and hobbyists exploring SPIKE-X",
      features: [
        "Access to lab.spikex.com",
        "3-5 private models",
        "1-5 GB private dataset storage",
        "Basic Neural Component Library",
        "Local CPU training support",
        "Basic 2D/3D visualization",
        "Community support",
        "Watermark on exports"
      ],
      buttonText: "Get Started",
      buttonStyle: "secondary",
      popular: false
    },
    {
      name: "Professional",
      price: "22",
      period: "month",
      description: "For individual researchers and power users",
      features: [
        "Everything in Free, plus:",
        "20-50 private models",
        "10-25 GB private dataset storage",
        "Full Neural Component Library access",
        "Local GPU training support",
        "Advanced visualization options",
        "Model export (config, weights)",
        "Email support",
        "No watermarks",
        "Basic cloud compute integration"
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "primary",
      popular: true
    },
    {
      name: "Premium",
      price: "49",
      period: "month",
      description: "For highly active researchers needing maximum resources",
      features: [
        "Everything in Professional, plus:",
        "Unlimited private models",
        "50-100 GB private dataset storage",
        "Priority email support",
        "Advanced debugging tools",
        "Early access to new features",
        "Advanced cloud compute integration",
        "Advanced export options (ONNX, full packages)"
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "secondary",
      popular: false
    }
  ];

  const businessPlans = [
    {
      name: "Team",
      price: "35",
      period: "user/month",
      minUsers: "Min. 2-3 users",
      description: "For small research labs and startups",
      features: [
        "Professional features per user",
        "Shared workspace for models & datasets",
        "Team-based private storage (50GB + 10GB/user)",
        "Model sharing with view/edit rights",
        "User roles & permissions (Admin, Member)",
        "Centralized billing",
        "Team-private Neural Component Library section"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "secondary"
    },
    {
      name: "Enterprise",
      price: "62",
      period: "user/month",
      minUsers: "Min. 5-10 users",
      description: "For larger research groups and mid-sized companies",
      features: [
        "Everything in Team, plus:",
        "Larger pooled storage (200GB + 20GB/user)",
        "Advanced collaboration (versioning, comments, audit logs)",
        "Admin dashboard for user management",
        "Priority support with faster response",
        "Dedicated cloud resource pools (optional)",
        "API access for automation",
        "SSO integration (SAML, OAuth)"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "primary",
      popular: true
    },
    {
      name: "Organization",
      price: "Custom",
      period: "quote",
      minUsers: "Enterprise scale",
      description: "For large enterprises with specific compliance needs",
      features: [
        "Everything in Enterprise, plus:",
        "Tailored resource quotas",
        "Service Level Agreements (SLAs)",
        "Dedicated Account Manager",
        "Custom integrations & feature development",
        "Advanced security & compliance",
        "On-premise deployment options",
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "secondary"
    }
  ];

  const educationalPlans = [
    {
      name: "Student",
      price: "Free",
      period: "",
      description: "For individual students with .edu verification",
      features: [
        "Similar to Individual Free",
        "Higher limits for coursework",
        "Educational tutorials access",
        "Curated educational datasets",
        "Join educator classrooms",
        "Student verification required"
      ],
      buttonText: "Verify Student Status",
      buttonStyle: "secondary"
    },
    {
      name: "Educator",
      price: "7",
      period: "month",
      description: "For teachers, lecturers, and professors",
      features: [
        "Professional features",
        "Student group/classroom management",
        "Assignment creation & tracking",
        "Educator-specific resources",
        "Custom component libraries for students",
        "Curriculum materials access",
        "Educator verification required"
      ],
      buttonText: "Verify Educator Status",
      buttonStyle: "primary",
      popular: true
    },
    {
      name: "University/Institution",
      price: "Custom",
      period: "site license",
      description: "Campus-wide access for entire institutions",
      features: [
        "Campus-wide student & faculty access",
        "Tiered access levels by role",
        "Institutional admin dashboard",
        "LMS integration (Moodle, Canvas)",
        "Dedicated institutional support",
        "Institution-specific branding"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "secondary"
    }
  ];

  const PlanCard = ({ plan, showMinUsers = false }) => (
    <div className={`${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder} ${plan.popular ? 'ring-2 ring-blue-500' : ''} relative`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <h3 className={`text-2xl font-bold ${theme.page.text} mb-2`}>{plan.name}</h3>
      <p className={`${theme.content.textSecondary} text-sm mb-6`}>{plan.description}</p>

      <div className="mb-6">
        {plan.price === "Custom" ? (
          <span className={`text-4xl font-bold ${theme.page.text}`}>Custom</span>
        ) : plan.price === "Free" ? (
          <span className={`text-4xl font-bold ${theme.page.text}`}>Free</span>
        ) : (
          <>
            <span className={`text-4xl font-bold ${theme.page.text}`}>${plan.price}</span>
            <span className={`${theme.content.textSecondary}`}>/{plan.period}</span>
          </>
        )}
        {showMinUsers && plan.minUsers && (
          <p className={`text-sm ${theme.content.textSecondary} mt-1`}>{plan.minUsers}</p>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to={plan.buttonText.includes('Contact') ? '/contact' : '/console/signup'}
        className={`w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-all ${
          plan.buttonStyle === 'primary'
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : `${theme.content.buttonSecondary}`
        }`}
      >
        {plan.buttonText}
        {!plan.buttonText.includes('Contact') && <ArrowRight size={20} className="ml-2" />}
      </Link>
    </div>
  );

  return (
    <LandingLayout>
      <div className={`min-h-screen ${theme.page.bg} ${theme.page.text}`}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h1 className={`text-5xl font-bold ${theme.page.text} mb-4`}>
              Pricing Plans
            </h1>
            <p className={`text-xl ${theme.content.textSecondary} max-w-3xl mx-auto mb-8`}>
              Choose the plan that fits your research needs, from individual exploration to enterprise-scale neural network development
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className={`inline-flex rounded-xl ${theme.content.cardBg} border ${theme.content.cardBorder} p-1 shadow-sm`}>
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all text-sm ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white shadow-sm'
                          : `${theme.content.textSecondary} hover:text-[var(--text)] hover:bg-gray-50 dark:hover:bg-gray-800`
                      }`}
                    >
                      <Icon size={18} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tab-specific description */}
          <div className="text-center mb-16">
            {activeTab === 'individual' && (
              <p className={`text-lg ${theme.content.textSecondary} max-w-2xl mx-auto`}>
                Perfect for personal projects, learning, and individual research
              </p>
            )}
            {activeTab === 'business' && (
              <p className={`text-lg ${theme.content.textSecondary} max-w-2xl mx-auto`}>
                Built for collaboration, shared resources, and organizational needs
              </p>
            )}
            {activeTab === 'educational' && (
              <p className={`text-lg ${theme.content.textSecondary} max-w-2xl mx-auto`}>
                Special pricing for learning, teaching, and academic research
              </p>
            )}
          </div>

          {/* Individual Plans */}
          {activeTab === 'individual' && (
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {individualPlans.map((plan, index) => (
                <PlanCard key={index} plan={plan} />
              ))}
            </div>
          )}

          {/* Business Plans */}
          {activeTab === 'business' && (
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {businessPlans.map((plan, index) => (
                <PlanCard key={index} plan={plan} showMinUsers={true} />
              ))}
            </div>
          )}

          {/* Educational Plans */}
          {activeTab === 'educational' && (
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {educationalPlans.map((plan, index) => (
                <PlanCard key={index} plan={plan} />
              ))}
            </div>
          )}

          {/* FAQ Section */}
          <div className={`${theme.content.cardBg} rounded-3xl p-12 border ${theme.content.cardBorder} mb-16`}>
            <h2 className={`text-3xl font-bold ${theme.page.text} mb-8 text-center`}>
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-xl font-semibold ${theme.page.text} mb-3`}>
                  Can I switch between plans?
                </h3>
                <p className={`${theme.content.textSecondary}`}>
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll pro-rate any billing adjustments.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${theme.page.text} mb-3`}>
                  What compute resources are included?
                </h3>
                <p className={`${theme.content.textSecondary}`}>
                  Individual plans include local compute. Professional and higher plans include cloud compute integration where you can use your own cloud credentials.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${theme.page.text} mb-3`}>
                  How does educational verification work?
                </h3>
                <p className={`${theme.content.textSecondary}`}>
                  Students need a valid .edu email address. Educators require institutional verification. Contact our education team for details.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${theme.page.text} mb-3`}>
                  Is there a free trial?
                </h3>
                <p className={`${theme.content.textSecondary}`}>
                  Yes! All paid plans include a 14-day free trial. No credit card required to start exploring SPIKE-X.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className={`text-3xl font-bold ${theme.page.text} mb-4`}>
              Ready to accelerate your neural network research?
            </h2>
            <p className={`text-xl ${theme.content.textSecondary} mb-8`}>
              Start with our free plan or try any paid plan free for 14 days
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/console/signup"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center ${theme.content.buttonSecondary} text-lg px-8 py-4 rounded-lg font-semibold transition-all`}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}
