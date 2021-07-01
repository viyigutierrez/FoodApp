const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');
const { v4: uuidv4 } = require('uuid');


describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: false }));
    describe('name', () => {
      it('Debe crear una nueva receta llamada Lulada', () => {
        Recipe.create({id:uuidv4(),name:'Lulada', resume: 'lulo con hielo',rating:'82',healthy:'42',steps:'cortar lulo en pedazos'})
      })
        it('La receta Lulada debe estar creada', ()=>{
         Recipe.findOne({
            where: { name: 'Lulada' }
          })
        });
      });
    });
  });
