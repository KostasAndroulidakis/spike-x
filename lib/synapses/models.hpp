#ifndef SYNAPSE_MODELS_HPP
#define SYNAPSE_MODELS_HPP

namespace spike {
namespace synapses {

struct SynapseModel {
    const char* id;
    const char* name;
};

static const SynapseModel MODELS[] = {
    {"stdp", "Spike-Timing-Dependent Plasticity (STDP)"},
    {"rstdp", "Reward-Modulated STDP (R-STDP)"},
    {"static", "Static Synapse"},
    {"dynamic", "Dynamic Synapse"},
    {"hebbian", "Hebbian Learning"}
};

} // namespace synapses
} // namespace spike

#endif // SYNAPSE_MODELS_HPP