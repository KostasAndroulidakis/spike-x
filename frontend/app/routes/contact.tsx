import LandingLayout from "~/layouts/LandingLayout";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";

export default function Contact() {
  const theme = useMarketingTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    planInterest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement actual form submission
    console.log("Contact form submission:", formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your interest! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        planInterest: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <LandingLayout>
      <div className={`min-h-screen ${theme.page.bg} ${theme.page.text}`}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className={`text-5xl font-bold ${theme.page.text} mb-4`}>
              Contact Sales
            </h1>
            <p className={`text-xl ${theme.content.textSecondary} max-w-3xl mx-auto`}>
              Ready to accelerate your neural network research? Let's discuss how SPIKE-X can meet your specific needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder}`}>
              <h2 className={`text-2xl font-bold ${theme.page.text} mb-6`}>
                Get in Touch
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium ${theme.page.text} mb-2`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--input-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium ${theme.page.text} mb-2`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--input-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className={`block text-sm font-medium ${theme.page.text} mb-2`}>
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[var(--input-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company or institution"
                  />
                </div>
                
                <div>
                  <label htmlFor="planInterest" className={`block text-sm font-medium ${theme.page.text} mb-2`}>
                    Plan of Interest
                  </label>
                  <select
                    id="planInterest"
                    name="planInterest"
                    value={formData.planInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[var(--input-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a plan</option>
                    <option value="team">Team Plan</option>
                    <option value="enterprise">Enterprise Plan</option>
                    <option value="organization">Organization Plan</option>
                    <option value="university">University/Institution Plan</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${theme.page.text} mb-2`}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-[var(--input-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Tell us about your research needs, team size, or any specific requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className={`text-2xl font-bold ${theme.page.text} mb-6`}>
                  Why Choose SPIKE-X?
                </h2>
                <div className="space-y-4">
                  <div className={`${theme.content.cardBg} rounded-lg p-6 border ${theme.content.cardBorder}`}>
                    <h3 className={`text-lg font-semibold ${theme.page.text} mb-2`}>
                      🚀 Accelerate Research
                    </h3>
                    <p className={`${theme.content.textSecondary}`}>
                      From traditional ANNs to cutting-edge SNNs, build and train models faster than ever.
                    </p>
                  </div>
                  
                  <div className={`${theme.content.cardBg} rounded-lg p-6 border ${theme.content.cardBorder}`}>
                    <h3 className={`text-lg font-semibold ${theme.page.text} mb-2`}>
                      🔬 Advanced Visualization
                    </h3>
                    <p className={`${theme.content.textSecondary}`}>
                      Real-time 3D network visualization and comprehensive analysis tools.
                    </p>
                  </div>
                  
                  <div className={`${theme.content.cardBg} rounded-lg p-6 border ${theme.content.cardBorder}`}>
                    <h3 className={`text-lg font-semibold ${theme.page.text} mb-2`}>
                      ⚡ Flexible Compute
                    </h3>
                    <p className={`${theme.content.textSecondary}`}>
                      Local, cloud, or hybrid compute resources to match your research needs.
                    </p>
                  </div>
                  
                  <div className={`${theme.content.cardBg} rounded-lg p-6 border ${theme.content.cardBorder}`}>
                    <h3 className={`text-lg font-semibold ${theme.page.text} mb-2`}>
                      👥 Team Collaboration
                    </h3>
                    <p className={`${theme.content.textSecondary}`}>
                      Built-in collaboration tools for research teams and institutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${theme.content.cardBg} rounded-lg p-6 border ${theme.content.cardBorder}`}>
                <h3 className={`text-lg font-semibold ${theme.page.text} mb-4`}>
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-blue-600" />
                    <span className={`${theme.content.textSecondary}`}>
                      sales@spikex.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-blue-600" />
                    <span className={`${theme.content.textSecondary}`}>
                      +1 (555) 123-SPIKE
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-blue-600" />
                    <span className={`${theme.content.textSecondary}`}>
                      San Francisco, CA
                    </span>
                  </div>
                </div>
              </div>

              <div className={`${theme.content.cardBg} rounded-lg p-6 border ${theme.content.cardBorder}`}>
                <h3 className={`text-lg font-semibold ${theme.page.text} mb-4`}>
                  Enterprise Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className={`${theme.content.textSecondary}`}>Custom SLA agreements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className={`${theme.content.textSecondary}`}>Dedicated account management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className={`${theme.content.textSecondary}`}>Custom integrations & features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className={`${theme.content.textSecondary}`}>Advanced security & compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className={`${theme.content.textSecondary}`}>On-premise deployment options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}
