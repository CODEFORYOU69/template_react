const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "fighter" });
  }

  find(id) {
    return this.connection.query(
      `select id, firstname, lastname, sex, country, category, weightCat, age from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, firstname, lastname, sex , country, category, weightCat, age, img from  ${this.table}`
    );
  }

  insert(fighters, img) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, sex , country, category, weightCat, age, img) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        fighters.firstname,
        fighters.lastname,
        fighters.sex,
        fighters.country,
        fighters.category,
        fighters.weightCat,
        fighters.age,
        img,
      ]
    );
  }

  update(fighter) {
    return this.connection.query(
      `update ${this.table} set  sex = ?, country = ?, category = ?, weightCat = ?, age = ?  where id = ?`,
      [
        fighter.sex,
        fighter.country,
        fighter.category,
        fighter.weightCat,
        fighter.age,
        fighter.id,
      ]
    );
  }
}

module.exports = UserManager;
