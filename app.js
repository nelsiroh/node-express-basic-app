const express = require('express');
require('dotenv/config')
const pinoHTTP = require('pino-http');
// const logger = require('./logger');
const logGenerator = require('./test/logGenerator.js');

// Local Modules
const healthz = require('./routes/router_healthz.js');
const echo = require('./routes/router_echo.js');
const alliteration = require('./controllers/router_alliteration.js');

// Server Initialization
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Routes will be written here
app.use('/route/healthz', healthz);
app.use('/route/echo', echo);
app.use('/route/alliteration', alliteration);

// invoke pino
app.use(
    pinoHTTP({
      logGenerator,
    })
  );

app.listen(PORT, () => 
    {
        if(!error)
            console.log("Server is successfully running and App is listening on port"+ PORT)
        else
            console.log("Error occured, server failed to start", error);
    }

);
  
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
