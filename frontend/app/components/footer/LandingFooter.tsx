// File: app/components/footer/LandingFooter.tsx
import React from "react";
import { Link } from "@remix-run/react";
import { Github, Twitter, Linkedin, Youtube, Mail } from "lucide-react";

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { text: "SPIKE-X overview", path: "/" },
        { text: "Neural networks", path: "/features" },
        { text: "Spiking networks", path: "/features" },
        { text: "Model training", path: "/features" },
        { text: "Visualization", path: "/features" },
        { text: "Neuromorphic computing", path: "/features" },
        { text: "Console login", path: "/login" },
      ]
    },
    {
      title: "Research",
      links: [
        { text: "Research overview", path: "/research" },
        { text: "Neural component library", path: "/features" },
        { text: "SNN models", path: "/research" },
        { text: "ANN architectures", path: "/research" },
        { text: "Training algorithms", path: "/research" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { text: "Academic research", path: "/solutions" },
        { text: "Educational tools", path: "/solutions" },
        { text: "Industry applications", path: "/solutions" },
        { text: "Neuromorphic hardware", path: "/solutions" },
      ]
    },
    {
      title: "Learn",
      links: [
        { text: "Documentation", path: "/docs", external: true },
        { text: "Tutorials", path: "/learn" },
        { text: "Getting started", path: "/learn" },
        { text: "Neural network basics", path: "/learn" },
        { text: "Research papers", path: "/research" },
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About us", path: "/about" },
        { text: "News", path: "/news" },
        { text: "Careers", path: "/careers" },
        { text: "Contact", path: "/contact" },
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Help center", path: "/support" },
        { text: "API documentation", path: "/api-docs", external: true },
        { text: "System status", path: "/status" },
        { text: "Community", path: "/community" },
        { text: "Bug reports", path: "/bugs" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/spike-x", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/spikex", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/spike-x", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/@spikex", label: "YouTube" },
    { icon: Mail, href: "mailto:hello@spikex.com", label: "Email" },
  ];

  return (
    <footer className="bg-[var(--footer-bg)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[var(--text)] font-semibold mb-4 text-sm uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm"
                      >
                        {link.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--border)]">
          {/* Copyright */}
          <div className="text-[var(--text-muted)] text-sm mb-4 md:mb-0">
            © {currentYear} SPIKE-X. All rights reserved.
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors p-2 rounded-md hover:bg-[var(--nav-hover)]"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 pt-6 border-t border-[var(--border)] mt-6">
          <Link
            to="/privacy"
            className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm"
          >
            Terms of Service
          </Link>
          <Link
            to="/cookies"
            className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm"
          >
            Cookie Policy
          </Link>
          <Link
            to="/security"
            className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm"
          >
            Security
          </Link>
        </div>
      </div>
    </footer>
  );
}
