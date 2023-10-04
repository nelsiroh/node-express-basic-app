
app.get('/healthz', (req, res) => {
    res.json({
      status: 'ok',
      message: 'Readiness check passed'
    });
  });
