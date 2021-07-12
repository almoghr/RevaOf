// const verifyUser = require('../middleware/verifyUser');

const {
  getHallOwnerDetails,
  addHallOwner,
  removeHallOwner,
  editHallOwner
} = require('../controllers/HallOwner');

module.exports = function (app) {
  app
    .get('/api/HallOwner/:HallOwnerId',  getHallOwnerDetails)
    .post('/api/HallOwner', addHallOwner)
    .put('/api/HallOwner', editHallOwner)
    .delete('/api/HallOwner/:HallOwnerId', removeHallOwner)
};
