const AbstractManager = require("./AbstractManager");

class TrainingManager extends AbstractManager {
  constructor() {
    super({ table: "training" });
  }

  getTraining() {
    return this.database.query(
      `SELECT teacher.id AS teacherId, ${this.table}.id AS trainingId, title, description, category, difficulty, firstname, lastname, can_visual, can_auditive, can_motor, can_cognitive, profilepicture FROM ${this.table} JOIN teacher ON ${this.table}.teacher_id=teacher.id`
    );
  }
}

module.exports = TrainingManager;
