const AbstractManager = require("./AbstractManager");

class TeacherManager extends AbstractManager {
  constructor() {
    super({ table: "teacher" });
  }
}

module.exports = TeacherManager;
