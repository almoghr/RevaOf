// const verifyUser = require('../middleware/verifyUser');

const {
  getKitchenDetails,
  addKitchen,
  removeKitchen,
  editKitchen
} = require('../controllers/Kitchen');

module.exports = function (app) {
  app
    .get('/api/Kitchen/:KitchenId',  getKitchenDetails)
    .post('/api/Kitchen', addKitchen)
    .put('/api/Kitchen', editKitchen)
    .delete('/api/Kitchen/:KitchenId', removeKitchen)
};
