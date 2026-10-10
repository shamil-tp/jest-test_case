const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/health', (_, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;