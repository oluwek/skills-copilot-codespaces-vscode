// Create web server
// Create a new express app
const express = require('express');
const app = express();
// Create a new route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// Add a new route for comments
app.get('/comments', (req, res) => {
  res.send('This is a list of comments');
});
// Add a new route for comments with a parameter
app.get('/comments/:id', (req, res) => {
  res.send('This is comment ' + req.params.id);
});
// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});