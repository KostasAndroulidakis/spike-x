#ifndef DENDRITE_MODELS_HPP
#define DENDRITE_MODELS_HPP

namespace spike {
namespace dendrites {

struct DendriteModel {
    const char* id;
    const char* name;
};

static const DendriteModel MODELS[] = {
    {"nonlif", "Non-linear Integrate-and-Fire (NLIF)"},
    {"adex", "Adaptive Exponential Integrate-and-Fire"},
    {"passive", "Passive Dendrite"},
    {"active", "Active Dendrite"},
    {"compartmental", "Multi-Compartment"},
    {"branch_specific", "Branch-Specific"},
    {"calcium", "Calcium Dynamics"},
    {"inte", "Dendritic Integration"},
    {"spine", "Dendritic Spine"},
    {"theta", "Theta Neuron"},
};

} // namespace dendrites
} // namespace spike

#endif // DENDRITE_MODELS_HPP