// const verifyUser = require('../middleware/verifyUser');

const {
  getHallDetails,
  addHall,
  removeHall,
  editHall
} = require('../controllers/Hall');

module.exports = function (app) {
  app
    .get('/api/Hall/:HallId', getHallDetails)
    .post('/api/Hall', addHall)
    .put('/api/Hall', editHall)
    .delete('/api/Hall/:HallId', removeHall)
};
