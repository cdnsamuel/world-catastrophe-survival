const tables = require("../tables");

const checkUserExist = async (req, res, next) => {
  try {
    const [[user]] = await tables.user.getOneByEmail(req.body.email);

    if (!user.id) throw new Error("This user doesn't exist");

    req.user = user;

    next();
  } catch (error) {
    console.warn(error);
    res.status(404).send(error);
  }
};

module.exports = checkUserExist;
