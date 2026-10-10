const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/health', (_, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/',(_,res)=>res.send("hello"))

module.exports = app;