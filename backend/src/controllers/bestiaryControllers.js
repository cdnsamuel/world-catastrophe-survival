const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const [beasts] = await tables.bestiary.getAll();

    res.json(beasts);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const [beast] = await tables.bestiary.getOne(req.params.id);

    if (beast == null) {
      res.sendStatus(404);
    } else {
      res.json(beast);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
