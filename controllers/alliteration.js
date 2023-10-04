

// Alliteration function
function alliteration()
  {
    const date = new Date()
    var day = date.toString().substring(0,3);
    const weekday = new Map()
      .set('Sun', 'Sonorific Sunday, Human!')
      .set('Mon', 'Matchless Monday, Human!')
      .set('Tue', 'Tubular Tuesday, Human!')
      .set('Wed', 'Wondiferous Wednesday, Human!')
      .set('Thu', 'Thuriferous Thursday, Human!')
      .set('Fri', 'Friendly Friday, Human!')
      .set('Sat', 'Satiny Saturday, Human!');

    return weekday.get(day);
  }

// GET /public/alliteration
app.get('/public/alliteration', (req, res) => {
    const message = alliteration();
    res.send(`${message}`);
  });
  
  // GET /public/alliteration/datetime
  app.get('/public/alliteration/datetime', (req, res) => {
    const message = alliteration();
    const dateTime = new Date();
    res.send(`${message}<br/>Current server time: ${dateTime}`);
  });
  