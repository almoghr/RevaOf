const {
  getBanquetHall,
  createBanquetHall,
  updateBanquetHall,
  removeBanquetHall,
} = require('../services/BanquetHall-services');

const serverResponse = require('../utils/serverResponse');

const getBanquetHallDetails = async (req, res) => {
  try {
    const banquetHall = await getBanquetHall(req.params.banquetHallId);

    if (!banquetHall) {
      return serverResponse(res, 404, { message: "banquetHall doesn't exist" });
    }

    return serverResponse(res, 200, banquetHall);
  } catch (e) {
    return serverResponse(res, 500, {
      message: 'Internal error while trying to get banquetHall details'
    });
  }
};


const addBanquetHall = async (req, res) => {
  try {

    const banquetHall = {
      ...req.body,
    };

    const newBanquetHall = createBanquetHall(banquetHall)

    return serverResponse(res, 200, newBanquetHall);
  } catch (error) {
    return serverResponse(res, 500, {
      message: 'Internal error while trying to create a banquetHall'
    });
  }
};

const removeABanquetHall = async (req, res) => {
  try {
    const getABanquetHall = await getBanquetHall(req.params.banquetHallId);

    if (!getABanquetHall) {
      return serverResponse(res, 404, { message: "BanquetHall doesn't exist" });
    }

    const deletedBanquetHall = await removeBanquetHall(req.params.banquetHallId);


    // if (!requesterIsAuthenticatedUser(req.user.sub, getAComment.user)) {
    //   return serverResponse(res, 400, {
    //     message: 'Unauthorized!'
    //   });
    // }

    //todo : when all of the models will exist:
    //todo : delete all related refs (banquetHallowner ... )

    // const [comment] = await Promise.all([removeComment(req.params.commentId),
    //   removeLikesFromComment(req.params.commentId),
    //   removeAllCommentReplies(req.params.commentId),
    //   removeLikesFromComment(req.params.commentId),
    //   ...removeLikesFromReplyPromises,
    //   post.save()]);

      return serverResponse(res, 200, deletedBanquetHall);
  } catch (error) {
    return serverResponse(res, 500, {
      message: 'Internal error while trying to remove a banquetHall'
    });
  }
};

const editBanquetHall = async (req, res) => {
  try {
    const getAbanquetHall = await getBanquetHall(req.params.banquetHallId);

    if (!getAbanquetHall) {
      return serverResponse(res, 404, { message: "banquetHall doesn't exist" });
    }

    //todo : later with authentication

    // if (!requesterIsAuthenticatedUser(req.user.sub, getAComment.user)) {
    //   return serverResponse(res, 400, {
    //     message: 'Unauthorized!'
    //   });
    // }

    const newBanquetHall = await updateBanquetHall(req.params.banquetHallId, req.body);

    return serverResponse(res, 200, newBanquetHall);
  } catch (error) {
    return serverResponse(res, 500, {
      message: 'Internal error while trying to edit a banquetHall'
    });
  }
};

module.exports = {
  getBanquetHallDetails,
  addBanquetHall,
  removeABanquetHall,
  editBanquetHall
};
