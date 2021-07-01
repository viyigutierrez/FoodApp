//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
/* const { API_KEY } = process.env;; */


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });

  /* const allDiets = async () => {

    try {
        const recipes= await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=e3e59c63201a4c9494cdf188e4a2ac6c&addRecipeInformation=true&number=100`);
        
        for(let i of recipes.data.results) {
            if (i.diets){
              console.log(diets)
                for(let j of diets){
                    await Diet.findOrCreate({where:{name: j}})
                }
            }
          
         }     
    }catch(err){
        console.log(err);
    }
  }
  allDiets(); */

});
