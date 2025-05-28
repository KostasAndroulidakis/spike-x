// Root index route - serves as marketing homepage
import LandingLayout from "~/layouts/LandingLayout";
import { Link } from "@remix-run/react";
import { Brain, Zap, Eye, Users, ArrowRight, CheckCircle } from "lucide-react";

export default function Index() {
  console.log("Landing page component loaded!");
  
  return (
    <LandingLayout>
      <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                🚀 Introducing the future of neural networks
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-[var(--text)] mb-6 tracking-tight">
              SPIKE-X
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The comprehensive R&D ecosystem for building, training, and deploying neural networks—from simple perceptrons to complex spiking networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/console/dashboard"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-lg px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                Neural Network Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Visual model builder with drag-and-drop interface for creating complex architectures from simple perceptrons to advanced spiking networks.
              </p>
            </div>
            
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                Advanced Training
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Comprehensive training engine with support for various learning algorithms, from traditional backpropagation to STDP.
              </p>
            </div>
            
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                3D Visualization
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Real-time 3D visualization of network topology, spiking activity, and training dynamics with interactive exploration.
              </p>
            </div>
            
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                Research Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Collaborate with researchers worldwide, share models, and contribute to the global neural network research ecosystem.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-3xl p-12 mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[var(--text)] mb-4">
                  Everything you need for neural network research
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  SPIKE-X provides researchers with powerful tools to accelerate discovery and innovation.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className="text-[var(--text)] font-medium">Complete neural network spectrum support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className="text-[var(--text)] font-medium">Visual model building interface</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className="text-[var(--text)] font-medium">Flexible compute resources (CPU, GPU, TPU)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className="text-[var(--text)] font-medium">Extensive component library</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className="text-[var(--text)] font-medium">Real-time collaboration tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className="text-[var(--text)] font-medium">Advanced analytics and evaluation</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-[var(--text)] mb-4">
              Ready to revolutionize your research?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers who are using SPIKE-X to push the boundaries 
              of neural network research and neuromorphic computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-lg px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}