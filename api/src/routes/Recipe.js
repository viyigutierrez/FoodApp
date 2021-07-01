const router = require('express') .Router();
const { newRecipe } = require('../controllers/Recipe')

router.post('/', newRecipe);

module.exports = router;
