const axios = require("axios");
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_DETAILS = "GET_DETAILS";
export const GET_DIETS = "GET_DIETS";

export function searchByName(title) {
  if (title) {
    return async function (dispatch) {
      let resp = await axios.get("http://localhost:3001/recipes?name=" + title);
      dispatch({
        type: "SEARCH_BY_NAME",
        payload: resp.data.map((recipe) => {
          if (recipe.flag) {
            return {
              name: recipe.title,
              img: recipe.img,
              id: recipe.id,
              score: recipe.score,
              dishTypes: recipe.dishTypes,
              diets: recipe.diets.join(", "),
            };
          } else {
            let array = [];
            array = [];
            recipe.diets.forEach((diet) => {
              array.push(diet.name);
            });
            return {
              name: recipe.name,
              id: recipe.id,
              score: recipe.rating,
              diets: array.join(", "),
            };
          }
        }),
      });
    };
  } else {
    return async function (dispatch) {
      let array = [];
      let resp = await axios.get(`http://localhost:3001/recipes`);
      dispatch({
        type: "SEARCH_BY_NAME",
        payload: resp.data.map((recipe) => {
          if (recipe.flag) {
            return {
              name: recipe.title,
              img: recipe.img,
              id: recipe.id,
              score: recipe.score,
              pricePerServing: recipe.pricePerServing,
              diets: recipe.diets.join(", "),
            };
          } else {
            array = [];
            recipe.diets.forEach((diet) => {
              array.push(diet.name);
            });
            return {
              name: recipe.name,
              id: recipe.id,
              score: recipe.rating,
              pricePerServing: recipe.pricePerServing,
              diets: array.join(", "),

            };
          }
        }),
      });
    };
  }
}

export function getDetails(id) {
  return async function (dispatch) {
    let array = [];
    let resp = await axios.get(`http://localhost:3001/recipes/` + id);
    console.log('id,', id)
    console.log('ggg', resp.data)
      dispatch({
        type: "GET_DETAILS",
        payload: resp.data.map((detail) => {

          if (detail) {
            return {
              name: detail.title,
              img: detail.img,
              id: detail.id,
              dishTypes: detail.dishTypes,
              diets: detail.diets.join(", "),
              summary: detail.summary,
              healthy: detail.healthy,
              instructions: detail.instructions,
              pricePerServing: '100',
              score: detail.score,
            };
          } else {
            array = [];
            resp.data[0].recipe.diets.forEach((diet) => {
              array.push(diet.name);
            });
            return {
              name: resp.data[0].recipe.name,
              id: resp.data[0].recipe.id,
              summary: resp.data[0].recipe.resume,
              healthy: resp.data[0].recipe.healthy,
              pricePerServing: '99',
              instructions: resp.data[0].recipe.steps,
              score: resp.data[0].recipe.rating,
              diets: array.join(", "),
            };
          }
        }),
      });
  }
};


export function getDiets() {
  return async function (dispatch) {
    let resp = await axios.get("http://localhost:3001/type");
      dispatch({
        type: "GET_DIETS",
        payload: resp.data.map((diet) => {
          return {
            name: diet.name,
          };
        }),
      });
  }
};

