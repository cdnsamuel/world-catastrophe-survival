const AbstractManager = require("./AbstractManager");

class BestiaryManager extends AbstractManager {
  constructor() {
    super({ table: "bestiary" });
  }
}

module.exports = BestiaryManager;
