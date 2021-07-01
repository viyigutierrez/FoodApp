const { Recipe, Diet } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');

async function newRecipe (req, res) {
    const { name, resume, rating, healthy, steps, diets } = req.body;


    const addRecipe = await Recipe.create({
        id: uuidv4(),
        name,
        resume,
        rating,
        healthy,
        steps,
    })
            
    diets.forEach(async  d=>{ 
        const dietdb = await Diet.findOne({
            where:{name: { [Op.like]: `%${d}%`}}
        })
        addRecipe.addDiet(dietdb)
    })
    res.send('Recipe added to database');
              
}
    


module.exports = {
    newRecipe
};