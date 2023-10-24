const AbstractManager = require("./AbstractManager");

class BasketItemManager extends AbstractManager {
  constructor() {
    super({ table: "basket_item" });
  }
}

module.exports = BasketItemManager;
