const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const [bookedTrainings] = await tables.booked_training.getAll();

    res.json(bookedTrainings);
  } catch (err) {
    next(err);
  }
};

const browseByUser = async (req, res, next) => {
  try {
    const [bookedTrainings] = await tables.booked_training.getAllByUser(
      req.params.id
    );
    res.json(bookedTrainings);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const [bookedTraining] = await tables.booked_training.getOne(req.params.id);

    if (bookedTraining == null) {
      res.sendStatus(404);
    } else {
      res.json(bookedTraining);
    }
  } catch (err) {
    next(err);
  }
};

const book = async (req, res, next) => {
  try {
    const [result] = await tables.booked_training.createOne(req.body);
    if (result.affectedRows) {
      res.status(201).send({ id: result.insertId, ...req.body });
    } else {
      res.sendStatus(500);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, book, browseByUser };
