const { Recipe, Diet } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;


async function getAllDiet(req, res) {
    let results = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      );
      results.data.results.forEach((diet) => {
        diet.diets.forEach(async (diet) => {
          await Diet.findOrCreate({
            where: {
              name: diet,
            },
          })
        })
      })
      let aux = await Diet.findAll();
      let allDiets = aux.map((e) => {
        return e.dataValues;
    
  });
      res.send(allDiets);

};

module.exports = {
    getAllDiet
}