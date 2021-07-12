// const verifyUser = require('../middleware/verifyUser');

const {
  getEventOwnerDetails,
  addEventOwner,
  removeEventOwner,
  editEventOwner
} = require('../controllers/EventOwner');

module.exports = function (app) {
  app
    .get('/api/EventOwner/:EventOwnerId', getEventOwnerDetails)
    .post('/api/EventOwner', addEventOwner)
    .put('/api/EventOwner', editEventOwner)
    .delete('/api/EventOwner/:EventOwnerId', removeEventOwner)
};
