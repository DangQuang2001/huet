const Event = require("../model/event");

class EventController {
  addEvent(req, res, next) {
    const event = new Event(req.body);
    event
      .save()
      .then((event) => res.status(200).send({ event }))
      .catch((error) =>
        res.status(403).json({
          message: "Loi",
        })
      );
  }

  getAllEvent(req, res, next) {
    Event.find({})
      .then((event) => res.json(event))
      .catch((error) => next(error));
  }
  getEventThisMonth(req, res, next) {
    let now = new Date();
    Event.find({
      begin: {
        $gte: new Date(`2022-${now.getMonth() + 1}-01T00:00:00.000Z`),
        $lte: new Date(
          `${
            now.getMonth() == 11 ? now.getFullYear() + 1 : now.getFullYear()
          }-${
            now.getMonth() == 11 ? "01" : now.getMonth() + 1
          }-20T00:00:00.000Z`
        ),
      },
    })
      .then((event) => res.json(event))
      .catch((error) => next(error));
  }
  getEventNextMonth(req, res, next) {
    let now = new Date();
    Event.find({
      begin: {
        $gte: new Date(
          `${
            now.getMonth() == 11 ? now.getFullYear() + 1 : now.getFullYear()
          }-${
            now.getMonth() == 11 ? "01" : now.getMonth() + 2
          }-01T00:00:00.000Z`
        ),
        $lte: new Date(
          `${
            now.getMonth() == 11 ? now.getFullYear() + 1 : now.getFullYear()
          }-${
            now.getMonth() == 11 ? "02" : now.getMonth() + 2
          }-20T00:00:00.000Z`
        ),
      },
    })
      .then((event) => res.json(event))
      .catch((error) => next(error));
  }
}

module.exports = new EventController();
