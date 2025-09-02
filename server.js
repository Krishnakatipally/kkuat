const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Serve React build static files
app.use(express.static(path.join(__dirname, 'client/build')));

// Send React app for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
