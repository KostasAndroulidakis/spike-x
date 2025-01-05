from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Placeholder model definitions
NEURON_MODELS = {
    "models": [
        {"id": "lif", "name": "Leaky Integrate-and-Fire (LIF)"},
        {"id": "izhikevich", "name": "Izhikevich"},
        {"id": "hodgkin_huxley", "name": "Hodgkin-Huxley"},
        {"id": "adaptive_lif", "name": "Adaptive LIF"},
        {"id": "qif", "name": "Quadratic Integrate-and-Fire"},
    ]
}

SYNAPSE_MODELS = {
    "models": [
        {"id": "stdp", "name": "Spike-Timing-Dependent Plasticity (STDP)"},
        {"id": "rstdp", "name": "Reward-Modulated STDP (R-STDP)"},
        {"id": "static", "name": "Static Synapse"},
        {"id": "dynamic", "name": "Dynamic Synapse"},
        {"id": "hebbian", "name": "Hebbian Learning"},
    ]
}

AXON_MODELS = {
    "models": [
        {"id": "passive", "name": "Passive Propagation"},
        {"id": "hh_axon", "name": "Hodgkin-Huxley Axon"},
        {"id": "cable", "name": "Cable Theory"},
        {"id": "myelinated", "name": "Myelinated Axon"},
        {"id": "adaptive", "name": "Adaptive Conduction"},
    ]
}

DENDRITE_MODELS = {
    "models": [
        {"id": "passive", "name": "Passive Dendrite"},
        {"id": "active", "name": "Active Dendrite"},
        {"id": "compartmental", "name": "Multi-Compartment"},
        {"id": "branch_specific", "name": "Branch-Specific"},
        {"id": "calcium", "name": "Calcium Dynamics"},
    ]
}

@app.route('/api/models/neurons', methods=['GET'])
def get_neuron_models():
    return jsonify(NEURON_MODELS)

@app.route('/api/models/synapses', methods=['GET'])
def get_synapse_models():
    return jsonify(SYNAPSE_MODELS)

@app.route('/api/models/axons', methods=['GET'])
def get_axon_models():
    return jsonify(AXON_MODELS)

@app.route('/api/models/dendrites', methods=['GET'])
def get_dendrite_models():
    return jsonify(DENDRITE_MODELS)

if __name__ == '__main__':
    app.run(port=5173, debug=True)