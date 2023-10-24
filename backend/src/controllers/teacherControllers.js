const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const [teachers] = await tables.teacher.getAll();

    res.json(teachers);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const [teacher] = await tables.teacher.getOne(req.params.id);

    if (teacher == null) {
      res.sendStatus(404);
    } else {
      res.json(teacher);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
