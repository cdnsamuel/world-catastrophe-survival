const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const [tutorials] = await tables.tutorial.getAll();

    res.json(tutorials);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const [tutorial] = await tables.tutorial.getOne(req.params.id);

    if (tutorial == null) {
      res.sendStatus(404);
    } else {
      res.json(tutorial);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
