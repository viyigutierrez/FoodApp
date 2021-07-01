const axios = require('axios');
const { getAllRecipes, getRecipeDetail } = require('../controllers/Recipes');
const router = require('express') .Router();

router.get('/', getAllRecipes);
router.get('/:idrecipe', getRecipeDetail);

module.exports = router;