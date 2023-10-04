

// Alliteration function
function alliteration()
  {
    const date = new Date()
    var day = date.toString().substring(0,3);
    const weekday = new Map()
      .set('Sun', 'Sonorific Sunday, Bwellian!')
      .set('Mon', 'Matchless Monday, Bwellian!')
      .set('Tue', 'Tubular Tuesday, Bwellian!')
      .set('Wed', 'Wondiferous Wednesday, Bwellian!')
      .set('Thu', 'Thuriferous Thursday, Bwellian!')
      .set('Fri', 'Friendly Friday, Bwellian!')
      .set('Sat', 'Satiny Saturday, Bwellian!');

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
  