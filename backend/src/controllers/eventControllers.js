const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const [events] = await tables.event.getAll();

    res.json(events);
  } catch (err) {
    next(err);
  }
};

const browseByUser = async (req, res, next) => {
  try {
    const [events] = await tables.event.getAllByUser(req.params.id);
    res.json(events);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const [event] = await tables.event.getOne(req.params.id);

    if (event == null) {
      res.sendStatus(404);
    } else {
      res.json(event);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, browseByUser };
