import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();
const PORT = 3030;

// Enable CORS for the frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Vite default port
  methods: ['GET'],
  optionsSuccessStatus: 200
}));

// Function to parse models from HPP files
function parseModelsFromHPP(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const models = [];
    
    // RegExp to extract model definitions from HPP files
    // This pattern matches entries like {"model_id", "Model Name"} in the MODELS array
    const modelRegex = /\{\s*"([^"]+)"\s*,\s*"([^"]+)"\s*\}/g;
    let match;
    
    while ((match = modelRegex.exec(content)) !== null) {
      models.push({
        id: match[1],
        name: match[2]
      });
    }
    
    // Log what we found
    console.log(`Found ${models.length} models in ${path.basename(filePath)}`);
    
    return models;
  } catch (error) {
    console.error(`Error parsing HPP file: ${filePath}`, error);
    return [];
  }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API server is running' });
});

// API Routes for neural components
app.get('/api/models/neurons', (req, res) => {
  const modelsPath = path.resolve(__dirname, '../lib/core/neurons/models.hpp');
  const models = parseModelsFromHPP(modelsPath);
  res.json({ models });
});

app.get('/api/models/synapses', (req, res) => {
  const modelsPath = path.resolve(__dirname, '../lib/core/synapses/models.hpp');
  const models = parseModelsFromHPP(modelsPath);
  res.json({ models });
});

app.get('/api/models/axons', (req, res) => {
  const modelsPath = path.resolve(__dirname, '../lib/core/axons/models.hpp');
  const models = parseModelsFromHPP(modelsPath);
  res.json({ models });
});

app.get('/api/models/dendrites', (req, res) => {
  const modelsPath = path.resolve(__dirname, '../lib/core/dendrites/models.hpp');
  const models = parseModelsFromHPP(modelsPath);
  res.json({ models });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Handle 404s
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.url}`
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`\n🚀 spike-x API Server running at http://localhost:${PORT}`);
  console.log('\nAvailable endpoints:');
  console.log(`  - http://localhost:${PORT}/api/health`);
  console.log(`  - http://localhost:${PORT}/api/models/neurons`);
  console.log(`  - http://localhost:${PORT}/api/models/synapses`);
  console.log(`  - http://localhost:${PORT}/api/models/axons`);
  console.log(`  - http://localhost:${PORT}/api/models/dendrites`);
});