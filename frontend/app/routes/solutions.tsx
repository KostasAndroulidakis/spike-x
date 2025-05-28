import LandingLayout from "~/layouts/LandingLayout";
import { Link } from "@remix-run/react";
import { Brain, Zap, Eye, Users, Cpu, Cloud } from "lucide-react";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";

export default function Solutions() {
  const theme = useMarketingTheme();
  
  return (
    <LandingLayout>
      <div className={`min-h-screen ${theme.page.bg} ${theme.page.text}`}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className={`text-5xl font-bold ${theme.page.text} mb-8`}>
            Solutions for Every Neural Network Need
          </h1>
          
          <p className={`text-xl ${theme.content.textSecondary} mb-12`}>
            From research to production, SPIKE-X provides comprehensive solutions for neural network 
            development across industries and use cases.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder}`}>
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Brain size={32} className="text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${theme.page.text} mb-4`}>
                Academic Research
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                Complete ecosystem for computational neuroscience research, from modeling 
                to publication-ready visualizations.
              </p>
              <ul className={`list-disc list-inside ${theme.content.textSecondary} space-y-2`}>
                <li>Advanced spiking neural network models</li>
                <li>Collaborative research tools</li>
                <li>Publication-quality visualizations</li>
                <li>Peer review and sharing capabilities</li>
              </ul>
            </div>
            
            <div className={`${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder}`}>
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${theme.page.text} mb-4`}>
                Enterprise AI
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                Production-ready neural network solutions for enterprise applications 
                with scalability and reliability.
              </p>
              <ul className={`list-disc list-inside ${theme.content.textSecondary} space-y-2`}>
                <li>Scalable deployment pipelines</li>
                <li>Enterprise security compliance</li>
                <li>Custom model architectures</li>
                <li>24/7 support and monitoring</li>
              </ul>
            </div>
            
            <div className={`${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder}`}>
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Cpu size={32} className="text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${theme.page.text} mb-4`}>
                Neuromorphic Computing
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                Specialized solutions for neuromorphic hardware and edge computing 
                with ultra-low power requirements.
              </p>
              <ul className={`list-disc list-inside ${theme.content.textSecondary} space-y-2`}>
                <li>Intel Loihi and SpiNNaker support</li>
                <li>Real-time spike processing</li>
                <li>Edge deployment optimization</li>
                <li>Power-efficient algorithms</li>
              </ul>
            </div>
            
            <div className={`${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder}`}>
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${theme.page.text} mb-4`}>
                Computer Vision
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                Advanced computer vision solutions using both traditional CNNs 
                and cutting-edge spiking networks.
              </p>
              <ul className={`list-disc list-inside ${theme.content.textSecondary} space-y-2`}>
                <li>Real-time object detection</li>
                <li>Event-based vision processing</li>
                <li>Medical imaging analysis</li>
                <li>Autonomous vehicle perception</li>
              </ul>
            </div>
          </div>
          
          <div className={`bg-gradient-to-br ${theme.content.gradientFrom} ${theme.content.gradientTo} rounded-3xl p-12 text-center`}>
            <h2 className={`text-3xl font-bold ${theme.page.text} mb-4`}>
              Need a Custom Solution?
            </h2>
            <p className={`text-xl ${theme.content.textSecondary} mb-8 max-w-2xl mx-auto`}>
              Our team of experts can help you design and implement custom neural network 
              solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Start Your Project
              </Link>
              <Link
                to="/about"
                className={`inline-flex items-center ${theme.content.buttonSecondary} text-lg px-8 py-4 rounded-lg font-semibold transition-all`}
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}