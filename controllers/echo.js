


// GET /public/echo?message=Hello+World
app.get('/public/echo', (req, res) => {
    const message = req.query.message || 'Hello World!';
    res.send(`${message}`);
  });