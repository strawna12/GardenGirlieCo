const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Clean URL routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/intake', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'intake.html'));
});

app.get('/education', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'education.html'));
});

// Fallback 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🌸 Garden Girlies Co. running on port ${PORT}`);
});
