#ifndef DENDRITE_MODELS_HPP
#define DENDRITE_MODELS_HPP

namespace spike {
namespace dendrites {

struct DendriteModel {
    const char* id;
    const char* name;
};

static const DendriteModel MODELS[] = {
    {"passive", "Passive Dendrite"},
    {"active", "Active Dendrite"},
    {"compartmental", "Multi-Compartment"},
    {"branch_specific", "Branch-Specific"},
    {"calcium", "Calcium Dynamics"}
};

} // namespace dendrites
} // namespace spike

#endif // DENDRITE_MODELS_HPP