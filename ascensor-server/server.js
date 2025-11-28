const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');

function readCSV(relative) {
  const filePath = path.join(DATA_DIR, relative);
  const csv = fs.readFileSync(filePath, 'utf8');
  const parsed = Papa.parse(csv, { header: true, dynamicTyping: true });
  return parsed.data;
}

// Ejemplo de endpoints:
app.get('/api/movilidad', (req, res) => {
  const data = readCSV('atlas_preparado/movilidad_nacional_curva.csv');
  res.json(data);
});

app.get('/api/ranking', (req, res) => {
  const data = readCSV('atlas_preparado/ranking_ccaa_centil_padres_20.csv');
  res.json(data);
});

app.get('/api/quintiles', (req, res) => {
  const data = readCSV('atlas_preparado/distribucion_quintiles_nacional_pivot.csv');
  res.json(data);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`API en http://localhost:${PORT}`));
