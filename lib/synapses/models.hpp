#ifndef SYNAPSE_MODELS_HPP
#define SYNAPSE_MODELS_HPP

namespace spike {
namespace synapses {

struct SynapseModel {
    const char* id;
    const char* name;
};

static const SynapseModel MODELS[] = {
    {"lif", "Leaky Integrate-and-Fire (LIF)"},
    {"stdp", "Spike-Timing-Dependent Plasticity (STDP)"},
    {"rstdp", "Reward-Modulated STDP (R-STDP)"},
    {"hodgkin_huxley", "Hodgkin-Huxley"},
    {"adex", "AdEx"},
    {"static", "Static Synapse"},
    {"dynamic", "Dynamic Synapse"},
    {"hebbian", "Hebbian Learning"},
    {"srm", "SRM"},
    {"ampa", "AMPA Receptor"},
    {"nmda", "NMDA Receptor"},
    {"gap_jun", "Gap Junction"},
    {"chem", "Chemical Synapse"},
    {"electr", "Electrical Synapse"},
};

} // namespace synapses
} // namespace spike

#endif // SYNAPSE_MODELS_HPP