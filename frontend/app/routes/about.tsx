import LandingLayout from "~/layouts/LandingLayout";

export default function About() {
  return (
    <LandingLayout>
      <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold text-[var(--text)] mb-8">
            About SPIKE-X
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              SPIKE-X is a comprehensive Research and Development ecosystem designed for building, 
              training, analyzing, and deploying a wide spectrum of Neural Networks.
            </p>
            
            <h2 className="text-3xl font-bold text-[var(--text)] mt-12 mb-6">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We aim to provide a seamless and intuitive experience, enabling users to progress 
              from simple perceptron models and classic Artificial Neural Networks (ANNs), such as 
              Convolutional Neural Networks (CNNs), to complex Spiking Neural Networks (SNNs), 
              including those optimized for neuromorphic computing hardware.
            </p>
            
            <h2 className="text-3xl font-bold text-[var(--text)] mt-12 mb-6">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-[var(--text)] mb-3">Students & Beginners</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Accessible platform to learn and experiment with machine learning fundamentals
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-[var(--text)] mb-3">Researchers</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced tools for computational neuroscience and neural network research
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-[var(--text)] mb-3">Engineers</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Professional tools for real-world neural network applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}