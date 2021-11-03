const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the 6-14 homepage.');
  }

  if (req.url === '/about') {
    res.end('This is the About page');
  }

  res.end(`
  <h1>Uh-oh!</h1>
  <p>We can't find the page.</p>
  <a href = "/">Back to the homepage</a>`);
});

server.listen(5000);
