const TouristAttraction = require("../model/tourist_attraction");

class TouristAttractionController {
  getAll(req, res, next) {
    TouristAttraction.find({})
      .then((data) => res.json(data))
      .catch((error) => next(error));
  }
  insert(req, res, next) {
    const touristAttraction = new TouristAttraction(req.body);
    touristAttraction
      .save()
      .then((data) => res.status(200).send({ data }))
      .catch((error) =>
        res.status(403).json({
          message: "Loi",
        })
      );
  }
  filterTourist(req, res, next) {
    TouristAttraction.find({ CategoryId: parseInt(req.params.id) })
      .then((data) => res.json(data))
      .catch((error) => next(error));
  }
  // search(req, res, next) {
  //   TouristAttraction.find({ CategoryId: parseInt(req.params.id) })
  //     .then((data) => res.json(data))
  //     .catch((error) => next(error));
  // }
}

module.exports = new TouristAttractionController();
