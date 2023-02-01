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
      `select id, firstname, lastname, sex , country, category, weightCat, age from  ${this.table}`
    );
  }

  insert(fighter) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, sex , country, category, weightCat, age) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        fighter.firstname,
        fighter.lastname,
        fighter.sex,
        fighter.country,
        fighter.category,
        fighter.weightCat,
        fighter.age,
      ]
    );
  }

  update(fighter) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, sex = ?, country = ?, category = ?, weightCat = ?, age = ?  where id = ?`,
      [
        fighter.firstname,
        fighter.lastname,
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
