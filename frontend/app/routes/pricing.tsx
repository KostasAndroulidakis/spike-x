import LandingLayout from "~/layouts/LandingLayout";
import { Link } from "@remix-run/react";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <LandingLayout>
      <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[var(--text)] mb-4">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the plan that fits your research needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Student</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--text)]">Free</span>
                <span className="text-gray-600 dark:text-gray-300">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span>Basic neural components</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span>Community library access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span>Local compute only</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="w-full inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-3 px-6 rounded-lg font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Researcher</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--text)]">$29</span>
                <span className="text-gray-600 dark:text-gray-300">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span>Advanced neural components</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span>Cloud compute access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span>Collaboration tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all"
              >
                Start Free Trial
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--text)]">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span>Unlimited everything</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span>SLA guarantees</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="w-full inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-3 px-6 rounded-lg font-semibold transition-all"
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