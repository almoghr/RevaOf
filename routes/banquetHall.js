// const verifyUser = require('../middleware/verifyUser');

const {
  getBanquetHallDetails,
  addBanquetHall,
  removeABanquetHall,
  editBanquetHall
} = require('../controllers/banquetHall');

module.exports = function (app) {
  app
    .get('/api/banquetHall/:banquetHallId', getBanquetHallDetails)
    .post('/api/banquetHall', addBanquetHall)
    .put('/api/banquetHall', editBanquetHall)
    .delete('/api/banquetHall/:banquetHallId', removeABanquetHall)
};
