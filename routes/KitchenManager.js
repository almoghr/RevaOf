// const verifyUser = require('../middleware/verifyUser');

const {
  getKitchenManagerDetails,
  addKitchenManager,
  removeKitchenManager,
  editKitchenManager
} = require('../controllers/KitchenManager');

module.exports = function (app) {
  app
    .get('/api/KitchenManager/:KitchenManagerId',  getKitchenManagerDetails)
    .post('/api/KitchenManager', addKitchenManager)
    .put('/api/KitchenManager', editKitchenManager)
    .delete('/api/KitchenManager/:KitchenManagerId', removeKitchenManager)
};
