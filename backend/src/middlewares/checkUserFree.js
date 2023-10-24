const tables = require("../tables");

const checkUserFree = async (req, res, next) => {
  try {
    const [user] = await tables.user.getOneByEmail(req.body.email);

    if (user.length) throw new Error("This user already exist");

    next();
  } catch (error) {
    console.warn(error);
    res.status(403).send(error);
  }
};
module.exports = checkUserFree;
