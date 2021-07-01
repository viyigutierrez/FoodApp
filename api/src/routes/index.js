const { Router } = require('express');
const recipeRoutes = require('./Recipe');
const recipesRoutes = require('./Recipes');
const typeRoutes = require('./Type');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipe', recipeRoutes);
router.use('/recipes', recipesRoutes);
router.use('/type', typeRoutes);


module.exports = router;
