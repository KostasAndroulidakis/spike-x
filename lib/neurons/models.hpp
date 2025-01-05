#ifndef NEURON_MODELS_HPP
#define NEURON_MODELS_HPP

namespace spike {
namespace neurons {

// Model IDs and Names
struct NeuronModel {
    const char* id;
    const char* name;
};

static const NeuronModel MODELS[] = {
    {"lif", "Leaky Integrate-and-Fire (LIF)"},
    {"izhikevich", "Izhikevich"},
    {"hodgkin_huxley", "Hodgkin-Huxley"},
    {"adaptive_lif", "Adaptive LIF"},
    {"qif", "Quadratic Integrate-and-Fire"}
};

} // namespace neurons
} // namespace spike

#endif // NEURON_MODELS_HPP