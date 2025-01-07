#ifndef LEARNING_MODELS_HPP
#define LEARNING_MODELS_HPP

namespace spike {
namespace learning {

// Structure to represent a learning method
struct LearningModel {
    const char* id;   // Unique identifier for the learning method
    const char* name; // Human-readable name
};

// Placeholder for learning methods
static const LearningModel MODELS[] = {
    {"hebbian", "Hebbian Learning"},
    {"stdp", "Spike-Timing Dependent Plasticity (STDP)"},
    {"reinforcement", "Reinforcement Learning"},
    {"bcm", "BCM Learning Rule"},
    {"oja", "Oja's Rule"}
};

} // namespace learning
} // namespace spike

#endif // LEARNING_MODELS_HPP
