import LandingLayout from "~/layouts/LandingLayout";
import { Brain, Zap, Eye, Users, Database, Cloud } from "lucide-react";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";

export default function Features() {
  const theme = useMarketingTheme();
  
  return (
    <LandingLayout>
      <div className={`min-h-screen ${theme.page.bg} ${theme.page.text}`}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className={`text-5xl font-bold ${theme.page.text} mb-8`}>
            Platform Features
          </h1>
          
          <p className={`text-xl ${theme.content.textSecondary} mb-12`}>
            Discover the comprehensive tools and capabilities that make SPIKE-X 
            the premier platform for neural network research and development.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder}`}>
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Brain size={32} className="text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${theme.page.text} mb-4`}>
                Visual Model Builder
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                Drag-and-drop interface for creating complex neural network architectures. 
                Support for everything from simple perceptrons to advanced spiking networks.
              </p>
              <ul className={`list-disc list-inside ${theme.content.textSecondary} space-y-2`}>
                <li>Intuitive component library</li>
                <li>Real-time architecture validation</li>
                <li>Custom layer definitions</li>
              </ul>
            </div>
            
            <div className={`${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder}`}>
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${theme.page.text} mb-4`}>
                Advanced Training Engine
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                Comprehensive training system with support for various learning algorithms 
                and optimization techniques.
              </p>
              <ul className={`list-disc list-inside ${theme.content.textSecondary} space-y-2`}>
                <li>Backpropagation and STDP support</li>
                <li>Distributed training capabilities</li>
                <li>Real-time monitoring</li>
              </ul>
            </div>
            
            <div className={`${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder}`}>
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${theme.page.text} mb-4`}>
                3D Visualization
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                Interactive 3D visualization of network topology, activity patterns, 
                and training dynamics.
              </p>
              <ul className={`list-disc list-inside ${theme.content.textSecondary} space-y-2`}>
                <li>Real-time network graphs</li>
                <li>Spiking activity visualization</li>
                <li>Training replay functionality</li>
              </ul>
            </div>
            
            <div className={`${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder}`}>
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${theme.page.text} mb-4`}>
                Research Collaboration
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                Built-in tools for sharing models, collaborating on research, 
                and contributing to the global neural network community.
              </p>
              <ul className={`list-disc list-inside ${theme.content.textSecondary} space-y-2`}>
                <li>Model sharing and versioning</li>
                <li>Community library access</li>
                <li>Research paper integration</li>
              </ul>
            </div>
            
            <div className={`${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder}`}>
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <Database size={32} className="text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${theme.page.text} mb-4`}>
                Extensive Component Library
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                Comprehensive collection of neural components, from basic neurons 
                to complex learning algorithms.
              </p>
              <ul className={`list-disc list-inside ${theme.content.textSecondary} space-y-2`}>
                <li>Pre-built neuron models</li>
                <li>Synapse implementations</li>
                <li>Learning rule library</li>
              </ul>
            </div>
            
            <div className={`${theme.content.cardBg} rounded-2xl p-8 border ${theme.content.cardBorder}`}>
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Cloud size={32} className="text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${theme.page.text} mb-4`}>
                Flexible Compute Resources
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                Support for various compute targets including local machines, 
                cloud providers, and specialized hardware.
              </p>
              <ul className={`list-disc list-inside ${theme.content.textSecondary} space-y-2`}>
                <li>CPU, GPU, TPU support</li>
                <li>Cloud integration</li>
                <li>Remote server connections</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}