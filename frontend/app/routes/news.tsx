import LandingLayout from "~/layouts/LandingLayout";
import { Link } from "@remix-run/react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";

export default function News() {
  const theme = useMarketingTheme();
  
  return (
    <LandingLayout>
      <div className={`min-h-screen ${theme.page.bg} ${theme.page.text}`}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className={`text-5xl font-bold ${theme.page.text} mb-8`}>
            SPIKE-X News & Updates
          </h1>
          
          <p className={`text-xl ${theme.content.textSecondary} mb-12`}>
            Stay up to date with the latest developments in neural networks, 
            platform updates, and research breakthroughs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className={`${theme.content.cardBg} rounded-2xl p-6 border ${theme.content.cardBorder} hover:shadow-xl transition-all duration-300`}>
              <div className={`flex items-center gap-2 text-sm ${theme.content.textSecondary} mb-4`}>
                <Calendar size={16} />
                <span>December 15, 2024</span>
                <User size={16} />
                <span>SPIKE-X Team</span>
              </div>
              <h3 className={`text-xl font-bold ${theme.page.text} mb-3`}>
                SPIKE-X 2.0 Released with Enhanced Visualization
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                Major update brings real-time 3D network visualization, improved performance, 
                and new collaboration features for researchers worldwide.
              </p>
              <Link 
                to="#"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Read More
                <ArrowRight size={16} />
              </Link>
            </article>
            
            <article className={`${theme.content.cardBg} rounded-2xl p-6 border ${theme.content.cardBorder} hover:shadow-xl transition-all duration-300`}>
              <div className={`flex items-center gap-2 text-sm ${theme.content.textSecondary} mb-4`}>
                <Calendar size={16} />
                <span>December 8, 2024</span>
                <User size={16} />
                <span>Research Team</span>
              </div>
              <h3 className={`text-xl font-bold ${theme.page.text} mb-3`}>
                New Neuromorphic Hardware Support
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                SPIKE-X now supports Intel Loihi 2 and SpiNNaker 2 chips, 
                enabling ultra-low power neural network deployment.
              </p>
              <Link 
                to="#"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Read More
                <ArrowRight size={16} />
              </Link>
            </article>
            
            <article className={`${theme.content.cardBg} rounded-2xl p-6 border ${theme.content.cardBorder} hover:shadow-xl transition-all duration-300`}>
              <div className={`flex items-center gap-2 text-sm ${theme.content.textSecondary} mb-4`}>
                <Calendar size={16} />
                <span>November 28, 2024</span>
                <User size={16} />
                <span>Community</span>
              </div>
              <h3 className={`text-xl font-bold ${theme.page.text} mb-3`}>
                Community Spotlight: 10,000 Models Shared
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                The SPIKE-X community has reached a milestone of 10,000 shared neural network 
                models, accelerating research globally.
              </p>
              <Link 
                to="#"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Read More
                <ArrowRight size={16} />
              </Link>
            </article>
            
            <article className={`${theme.content.cardBg} rounded-2xl p-6 border ${theme.content.cardBorder} hover:shadow-xl transition-all duration-300`}>
              <div className={`flex items-center gap-2 text-sm ${theme.content.textSecondary} mb-4`}>
                <Calendar size={16} />
                <span>November 15, 2024</span>
                <User size={16} />
                <span>Product Team</span>
              </div>
              <h3 className={`text-xl font-bold ${theme.page.text} mb-3`}>
                New Training Algorithms: STDP and BCM
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                Latest update includes Spike-Timing-Dependent Plasticity (STDP) and 
                Bienenstock-Cooper-Munro (BCM) learning rules.
              </p>
              <Link 
                to="#"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Read More
                <ArrowRight size={16} />
              </Link>
            </article>
            
            <article className={`${theme.content.cardBg} rounded-2xl p-6 border ${theme.content.cardBorder} hover:shadow-xl transition-all duration-300`}>
              <div className={`flex items-center gap-2 text-sm ${theme.content.textSecondary} mb-4`}>
                <Calendar size={16} />
                <span>October 30, 2024</span>
                <User size={16} />
                <span>Research Team</span>
              </div>
              <h3 className={`text-xl font-bold ${theme.page.text} mb-3`}>
                Partnership with Top Universities
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                SPIKE-X announces partnerships with MIT, Stanford, and ETH Zurich 
                for advancing neuromorphic computing research.
              </p>
              <Link 
                to="#"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Read More
                <ArrowRight size={16} />
              </Link>
            </article>
            
            <article className={`${theme.content.cardBg} rounded-2xl p-6 border ${theme.content.cardBorder} hover:shadow-xl transition-all duration-300`}>
              <div className={`flex items-center gap-2 text-sm ${theme.content.textSecondary} mb-4`}>
                <Calendar size={16} />
                <span>October 15, 2024</span>
                <User size={16} />
                <span>SPIKE-X Team</span>
              </div>
              <h3 className={`text-xl font-bold ${theme.page.text} mb-3`}>
                SPIKE-X Platform Launch
              </h3>
              <p className={`${theme.content.textSecondary} mb-4`}>
                We're excited to announce the official launch of SPIKE-X, 
                the comprehensive neural network research and development platform.
              </p>
              <Link 
                to="#"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Read More
                <ArrowRight size={16} />
              </Link>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Subscribe for Updates
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}