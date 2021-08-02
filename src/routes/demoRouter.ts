const router = require('express').Router();
const {demo: demoHandler} = require('../controllers/demoController.ts');

router.get('/', demoHandler);

module.exports = router;
