const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from root directory
app.use(express.static(path.join(__dirname)));

// Clean URL routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/intake', (req, res) => {
  res.sendFile(path.join(__dirname, 'intake.html'));
});

app.get('/education', (req, res) => {
  res.sendFile(path.join(__dirname, 'education.html'));
});

// Fallback
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🌸 Garden Girlies Co. running on port ${PORT}`);
});
