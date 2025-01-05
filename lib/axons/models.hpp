#ifndef AXON_MODELS_HPP
#define AXON_MODELS_HPP

namespace spike {
namespace axons {

struct AxonModel {
    const char* id;
    const char* name;
};

static const AxonModel MODELS[] = {
    {"passive", "Passive Propagation"},
    {"hh_axon", "Hodgkin-Huxley Axon"},
    {"cable", "Cable Theory"},
    {"myelinated", "Myelinated Axon"},
    {"adaptive", "Adaptive Conduction"}
};

} // namespace axons
} // namespace spike

#endif // AXON_MODELS_HPP