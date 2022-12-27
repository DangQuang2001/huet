const favourite = require("../model/favourite");

class FavouriteController {
  addFavourite(req, res, next) {
    const Favourite = new favourite(req.body);
    Favourite.save()
      .then((data) => res.status(200).send({ data }))
      .catch((error) =>
        res.status(403).json({
          message: "Loi",
        })
      );
  }
  getAllFavourites(req, res, next) {
    favourite
      .find({})
      .then((data) => res.json(data))
      .catch((error) => next(error));
  }
  deleteFavourite(req, res, next) {
    favourite
      .findOneAndRemove({
        id: req.params.id,
        category: parseInt(req.params.category),
      })
      .then((data) => res.json(data))
      .catch((error) => next(error));
  }
  filterFavourites(req, res, next) {
    favourite
      .find({ category: req.params.category })
      .then((data) => res.json(data))
      .catch((error) => next(error));
  }
}
module.exports = new FavouriteController();
