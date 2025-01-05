#ifndef AXON_MODELS_HPP
#define AXON_MODELS_HPP

namespace spike {
namespace axons {

struct AxonModel {
    const char* id;
    const char* name;
};

static const AxonModel MODELS[] = {
    {"lif", "Leaky Integrate-and-Fire (LIF)"},
    {"passive", "Passive Propagation"},
    {"hh_axon", "Hodgkin-Huxley Axon"},
    {"cable", "Cable Theory"},
    {"myelinated", "Myelinated Axon"},
    {"unmyelinated", "UnMyelinated Axon"},
    {"multi-comp", "Multi-compartment"},
    {"cable", "Cable Model"},
    {"adaptive", "Adaptive Conduction"},
    {"qif", "Quadratic Integrate-and-Fire"},
    {"izhikevich", "Izhikevich"},
    {"srm", "Spike Response Model"},
    {"salta", "Saltatory Conjuction"},
    {"action", "Action Potential"}
};

} // namespace axons
} // namespace spike

#endif // AXON_MODELS_HPP