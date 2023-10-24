const AbstractManager = require("./AbstractManager");

class BasketManager extends AbstractManager {
  constructor() {
    super({ table: "basket" });
  }
}

module.exports = BasketManager;
