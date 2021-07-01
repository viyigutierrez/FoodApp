const router = require('express') .Router();
const { getAllDiet } = require('../controllers/Type')

router.get('/', getAllDiet);

module.exports = router;