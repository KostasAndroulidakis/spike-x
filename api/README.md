# spike-x API Server

This API server provides endpoints to access neural network component definitions from the spike-x library. It parses C++ header files to extract definitions of neurons, synapses, axons, and dendrites.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

## Available Endpoints

The server runs on port 3030 by default and provides the following endpoints:

- `GET /api/health` - Health check endpoint
- `GET /api/models/neurons` - List all available neuron models
- `GET /api/models/synapses` - List all available synapse models
- `GET /api/models/axons` - List all available axon models
- `GET /api/models/dendrites` - List all available dendrite models

## How It Works

The API server parses the C++ header files in the `lib/core` directory to extract model definitions. For example:

```cpp
// From lib/core/neurons/models.hpp
static const NeuronModel MODELS[] = {
    {"lif", "Leaky Integrate-and-Fire (LIF)"},
    {"izhikevich", "Izhikevich"},
    {"hodgkin_huxley", "Hodgkin-Huxley"}
};
```

The server extracts these definitions and returns them as JSON:

```json
{
  "models": [
    {"id": "lif", "name": "Leaky Integrate-and-Fire (LIF)"},
    {"id": "izhikevich", "name": "Izhikevich"},
    {"id": "hodgkin_huxley", "name": "Hodgkin-Huxley"}
  ]
}
```

## Integration with Frontend

The frontend connects to this API server to display the available component models in the Library page. If the API server is not running, the frontend will fall back to using mock data.