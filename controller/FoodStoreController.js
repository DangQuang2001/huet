const foodStore = require("../model/food_store");

class FoodStoreController {
  Add(req, res, next) {
    const store = new foodStore(req.body);

    foodStore.findOne({ id: req.body.id }, function (err, doc) {
      // this will print on console , working fine
      if (err) return callback(err, false);
      if (doc === null) {
        store
          .save()
          .then((store) => res.status(200).send({ store }))
          .catch((error) =>
            res.status(403).json({
              message: "Error",
            })
          );
      } else {
        foodStore
          .updateOne({ id: req.body.id }, { $set: { categories: ["1", "2"] } })
          .then((data) => res.status(200).json(data))
          .catch((error) => res.status(400).json({ message: "cc" })); // this will return undefined to the controller
      }
    });
  }
  All(req, res, next) {
    foodStore
      .find({})
      .then((data) => res.json(data))
      .catch((error) => res.status(400).json({ message: "cc" }));
  }
  //Tim top san pham rating cao
  getTop(req, res, next) {
    foodStore
      .find({ $where: "this.menu.length > 10" }, null, { limit: 10 })
      .then((data) => res.json(data))
      .catch((error) => res.status(400).json({ message: "cc" }));
  }
  search(req, res, next) {
    foodStore
      .find({ categories: [req.params.category] })
      .limit(20)
      .then((data) => res.json(data))
      .catch((error) => res.status(400).json({ message: "cc" }));
  }

  Delete(req, res, next) {
    foodStore
      .deleteOne({ id: req.params.id })
      .then(() => res.status(200).send({ status: 1, message: "Deleted" }))
      .catch((error) => res.status(400).json({ message: "Failed to delete" }));
  }
  Update(req, res, next) {
    foodStore
      .updateOne({ id: req.body.id }, { $set: { menu: req.body.menu } })
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(400).json({ message: "cc" }));
  }
}

module.exports = new FoodStoreController();
