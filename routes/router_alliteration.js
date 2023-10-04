const { Router } = require('express');
const router_alliteration = require('express');

// Local Modules
const alliteration = require('../controllers/alliteration');
  
// Initialization
const router = Router();
  
// Requests 
router.get('/', myController.method1);
router.post('/', myController.method2);
  
module.exports = router;