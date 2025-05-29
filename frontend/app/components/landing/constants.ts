// File: app/components/landing/constants.ts
import { Brain, Zap, Eye, Users, CheckCircle } from "lucide-react";

/**
 * Landing page content constants
 * Follows SRP: Only responsible for content configuration
 */

export interface Feature {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  colorClass: string;
}

export interface Benefit {
  text: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Brain,
    title: "Neural Network Design",
    description: "Visual model builder with drag-and-drop interface for creating complex architectures from simple perceptrons to advanced spiking networks.",
    colorClass: "bg-orange-500"
  },
  {
    icon: Zap,
    title: "Advanced Training",
    description: "Comprehensive training engine with support for various learning algorithms, from traditional backpropagation to STDP.",
    colorClass: "bg-blue-500"
  },
  {
    icon: Eye,
    title: "3D Visualization",
    description: "Real-time 3D visualization of network topology, spiking activity, and training dynamics with interactive exploration.",
    colorClass: "bg-purple-500"
  },
  {
    icon: Users,
    title: "Research Community",
    description: "Collaborate with researchers worldwide, share models, and contribute to the global neural network research ecosystem.",
    colorClass: "bg-green-500"
  }
];

export const BENEFITS: Benefit[] = [
  { text: "Complete neural network spectrum support" },
  { text: "Visual model building interface" },
  { text: "Flexible compute resources (CPU, GPU, TPU)" },
  { text: "Extensive component library" },
  { text: "Real-time collaboration tools" },
  { text: "Advanced analytics and evaluation" }
];

export const HERO_CONTENT = {
  badge: "🚀 Introducing the future of neural networks",
  title: "SPIKE-X",
  subtitle: "The comprehensive R&D ecosystem for building, training, and deploying neural networks—from simple perceptrons to complex spiking networks.",
  primaryCTA: "Get Started",
  secondaryCTA: "Learn More"
} as const;

export const CTA_CONTENT = {
  title: "Ready to revolutionize your research?",
  subtitle: "Join thousands of researchers who are using SPIKE-X to push the boundaries of neural network research and neuromorphic computing.",
  primaryCTA: "Start Free Trial",
  secondaryCTA: "Explore Features"
} as const;

export const BENEFITS_CONTENT = {
  title: "Everything you need for neural network research",
  subtitle: "SPIKE-X provides researchers with powerful tools to accelerate discovery and innovation."
} as const;
