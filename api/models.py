from flask import Flask, jsonify
from flask_cors import CORS
import re
import os

app = Flask(__name__)
CORS(app)

def read_cpp_models(filepath):
    """Read model definitions from C++ header files."""
    models = []
    try:
        with open(filepath, 'r') as file:
            content = file.read()
            # Find all model definitions using regex
            pattern = r'{\s*"([^"]+)",\s*"([^"]+)"\s*}'
            matches = re.finditer(pattern, content)
            for match in matches:
                id_, name = match.groups()
                models.append({"id": id_, "name": name})
    except FileNotFoundError:
        print(f"Warning: {filepath} not found")
        return []
    return models

def get_models(category):
    """Get models for a specific category."""
    base_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'lib')
    filepath = os.path.join(base_path, category, 'models.hpp')
    return {"models": read_cpp_models(filepath)}

@app.route('/api/models/neurons', methods=['GET'])
def get_neuron_models():
    return jsonify(get_models('neurons'))

@app.route('/api/models/synapses', methods=['GET'])
def get_synapse_models():
    return jsonify(get_models('synapses'))

@app.route('/api/models/axons', methods=['GET'])
def get_axon_models():
    return jsonify(get_models('axons'))

@app.route('/api/models/dendrites', methods=['GET'])
def get_dendrite_models():
    return jsonify(get_models('dendrites'))

if __name__ == '__main__':
    app.run(port=5173, debug=True)