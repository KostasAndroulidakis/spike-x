// Root index route - serves as marketing homepage
import LandingLayout from "~/layouts/LandingLayout";
import { Link } from "@remix-run/react";
import { Brain, Zap, Eye, Users, ArrowRight, CheckCircle } from "lucide-react";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";

export default function Index() {
  const theme = useMarketingTheme();
  console.log("Landing page component loaded!");
  
  return (
    <LandingLayout>
      <div className={`min-h-screen ${theme.page.bg} ${theme.page.text}`}>
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
                🚀 Introducing the future of neural networks
              </span>
            </div>
            <h1 className={`text-6xl md:text-7xl font-bold ${theme.page.text} mb-6 tracking-tight`}>
              SPIKE-X
            </h1>
            <p className={`text-2xl md:text-3xl ${theme.content.textSecondary} mb-8 max-w-4xl mx-auto leading-relaxed`}>
              The comprehensive R&D ecosystem for building, training, and deploying neural networks—from simple perceptrons to complex spiking networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/console/login"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className={`inline-flex items-center ${theme.content.buttonSecondary} text-lg px-8 py-4 rounded-lg font-semibold transition-all`}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className={`group ${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain size={32} className="text-white" />
              </div>
              <h3 className={`text-xl font-bold ${theme.page.text} mb-3`}>
                Neural Network Design
              </h3>
              <p className={`${theme.content.textSecondary} leading-relaxed`}>
                Visual model builder with drag-and-drop interface for creating complex architectures from simple perceptrons to advanced spiking networks.
              </p>
            </div>
            
            <div className={`group ${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className={`text-xl font-bold ${theme.page.text} mb-3`}>
                Advanced Training
              </h3>
              <p className={`${theme.content.textSecondary} leading-relaxed`}>
                Comprehensive training engine with support for various learning algorithms, from traditional backpropagation to STDP.
              </p>
            </div>
            
            <div className={`group ${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className={`text-xl font-bold ${theme.page.text} mb-3`}>
                3D Visualization
              </h3>
              <p className={`${theme.content.textSecondary} leading-relaxed`}>
                Real-time 3D visualization of network topology, spiking activity, and training dynamics with interactive exploration.
              </p>
            </div>
            
            <div className={`group ${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users size={32} className="text-white" />
              </div>
              <h3 className={`text-xl font-bold ${theme.page.text} mb-3`}>
                Research Community
              </h3>
              <p className={`${theme.content.textSecondary} leading-relaxed`}>
                Collaborate with researchers worldwide, share models, and contribute to the global neural network research ecosystem.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className={`bg-gradient-to-br ${theme.content.gradientFrom} ${theme.content.gradientTo} rounded-3xl p-12 mb-20`}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className={`text-4xl font-bold ${theme.page.text} mb-4`}>
                  Everything you need for neural network research
                </h2>
                <p className={`text-xl ${theme.content.textSecondary}`}>
                  SPIKE-X provides researchers with powerful tools to accelerate discovery and innovation.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className={`${theme.page.text} font-medium`}>Complete neural network spectrum support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className={`${theme.page.text} font-medium`}>Visual model building interface</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className={`${theme.page.text} font-medium`}>Flexible compute resources (CPU, GPU, TPU)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className={`${theme.page.text} font-medium`}>Extensive component library</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className={`${theme.page.text} font-medium`}>Real-time collaboration tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                  <span className={`${theme.page.text} font-medium`}>Advanced analytics and evaluation</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center ${theme.content.cardBg} border ${theme.content.cardBorder} rounded-3xl p-12`}>
            <h2 className={`text-3xl font-bold ${theme.page.text} mb-4`}>
              Ready to revolutionize your research?
            </h2>
            <p className={`text-xl ${theme.content.textSecondary} mb-8 max-w-2xl mx-auto`}>
              Join thousands of researchers who are using SPIKE-X to push the boundaries 
              of neural network research and neuromorphic computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/console/login"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/features"
                className={`inline-flex items-center ${theme.content.buttonSecondary} text-lg px-8 py-4 rounded-lg font-semibold transition-all`}
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