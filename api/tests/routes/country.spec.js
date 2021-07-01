/* eslint-disable import/no-extraneous-dependencies */
const {Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { v4: uuidv4 } = require('uuid');

const agent = session(app);
const recipe = {
  name: 'Lulada',
  id: uuidv4(),
  resume: 'lulo con hielo',
  rating:'82',
  healthy:'42',
  steps:'cortar lulo en pedazos'
};

describe('recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }))
  beforeEach(() => Recipe.sync({ force: false})
    .then(() => Recipe.findOne({
      where: {
        name : recipe.name
      }
    })));
  describe('GET /recipes', () => {
    it('Debe retornar un 200 si encuentran recetas que incluyan la letras "lul"', () =>
      agent.get('/recipes?name=lul').expect(200)
    )
  })
})