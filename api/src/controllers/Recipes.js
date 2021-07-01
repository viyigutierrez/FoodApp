const { Recipe, Diet } = require('../db');
const axios = require('axios');
const { Op } = require('sequelize');
const { API_KEY } = process.env;

const url = `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&number=50&addRecipeInformation=true`;


async function getAllRecipes (req,res) {
let array = [];
  let resp = await axios.get(url);
  if (req.query.name) {
    for (let i = 0; i < resp.data.results.length; i++) {
      if (
        resp.data.results[i].title.toLowerCase().indexOf(req.query.name) !== -1
      ) {
        array.push({
          flag: true,
          id: resp.data.results[i].id,
          title: resp.data.results[i].title,
          img: resp.data.results[i].image,
          score: resp.data.results[i].spoonacularScore,
          diets: resp.data.results[i].diets,
          pricePerServing: resp.data.results[i].pricePerServing,
        });
      }
    }
    let recipe = await Recipe.findAll({
      where: { name: { [Op.iLike]: `%${req.query.name}%` } },
      include: [Diet],
    });
    if (recipe !== null) {
      array = array.concat(recipe);
    }

    if (array.length > 0) {
      res.send(array);
      array = [];
    } else {
      res.status(404).send("Recipe not found")
    }
  } else {
    for (let i = 0; i < resp.data.results.length; i++) {
      array.push({
        flag: true,
        id: resp.data.results[i].id,
        title: resp.data.results[i].title,
        img: resp.data.results[i].image,
        score: resp.data.results[i].spoonacularScore,
        pricePerServing: resp.data.results[i].pricePerServing,
        dishTypes: resp.data.results.dishTypes,
        diets: resp.data.results[i].diets,
      });
    }
    let respdb = await Recipe.findAll({ include: [Diet] });
    array = array.concat(respdb);
    res.send(array);
  }
};

      
async function getRecipeDetail (req,res,next) {
    try {
      let detail=[]  
      if(req.params.idrecipe.includes('-')) {
           let search = await Recipe.findOne({
               where: {
                   id: req.params.idrecipe,
               },
               include: [Diet]})
         
           res.send(search);
        }else{
            let request = await axios.get(`https://api.spoonacular.com/recipes/${req.params.idrecipe}/information?apiKey=${API_KEY}`);
            
            detail.push( {
                id: request.data.id,
                title: request.data.title,
                dishTypes: request.data.dishTypes,
                summary: request.data.summary,
                score: request.data.spoonacularScore,
                healthy: request.data.healthScore,
                instructions: request.data.instructions,
                pricePerServing: request.data.pricePerServing,
                img: request.data.image,
                diets: request.data.diets
                })
                res.send(detail); 
            }
          
        }
    catch(err){next({status:404, message: 'Id not found'});}  
}


module.exports = {
    getAllRecipes,
    getRecipeDetail
}