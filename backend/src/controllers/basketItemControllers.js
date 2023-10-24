const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const [baskets] = await tables.basket_item.getAll();

    res.json(baskets);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const [basket] = await tables.basket_item.getOne(req.params.id);

    if (basket == null) {
      res.sendStatus(404);
    } else {
      res.json(basket);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read };
