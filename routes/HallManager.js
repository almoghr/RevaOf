// const verifyUser = require('../middleware/verifyUser');

const {
  getHallManagerDetails,
  addHallManager,
  removeHallManager,
  editHallManager
} = require('../controllers/HallManager');

module.exports = function (app) {
  app
    .get('/api/HallManager/:HallManagerId',  getHallManagerDetails)
    .post('/api/HallManager', addHallManager)
    .put('/api/HallManager', editHallManager)
    .delete('/api/HallManager/:HallManagerId', removeHallManager)
};
