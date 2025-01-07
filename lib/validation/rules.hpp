#ifndef RULES_HPP
#define RULES_HPP

#include <string>
#include <vector>
#include <unordered_map>
#include <stdexcept>

namespace spike {
namespace validation {

class CompatibilityRules {
public:
    struct Compatibility {
        std::vector<std::string> compatible_synapses;
        std::vector<std::string> compatible_dendrites;
        std::vector<std::string> compatible_axons;
    };

    CompatibilityRules() {
        compatibility_map = {
            {"lif", {{"lif", "stdp", "rstdp", "dynamic"}, {"passive", "active"}, {"unmyelinated", "myelinated", "cable"}}},
            {"izhikevich", {{"stdp", "hebbian", "nmda"}, {"compartmental", "spine", "theta"}, {"adaptive", "unmyelinated"}}},
            {"hodgkin_huxley", {{"hodgkin_huxley", "gap_jun", "chem"}, {"calcium", "branch_specific"}, {"myelinated", "unmyelinated"}}}
        };
    }

    bool isCompatible(
        const std::string& neuron_type,
        const std::string& synapse_type,
        const std::string& dendrite_type,
        const std::string& axon_type
    ) {
        if (compatibility_map.find(neuron_type) == compatibility_map.end()) {
            throw std::invalid_argument("Unknown neuron type: " + neuron_type);
        }

        const Compatibility& rules = compatibility_map.at(neuron_type);
        return (
            std::find(rules.compatible_synapses.begin(), rules.compatible_synapses.end(), synapse_type) != rules.compatible_synapses.end() &&
            std::find(rules.compatible_dendrites.begin(), rules.compatible_dendrites.end(), dendrite_type) != rules.compatible_dendrites.end() &&
            std::find(rules.compatible_axons.begin(), rules.compatible_axons.end(), axon_type) != rules.compatible_axons.end()
        );
    }

private:
    std::unordered_map<std::string, Compatibility> compatibility_map;
};

} // namespace validation
} // namespace spike

#endif // RULES_HPP
