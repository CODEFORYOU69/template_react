const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.connection.query(
      `select id, firstname, lastname, email, country, userRole, img from  ${this.table} where id = ?`,
      [id]
    );
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, firstname, lastname, email, country, userRole from  ${this.table}`
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email, country, userRole, hashedPassword) values (?,?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.country,
        user.userRole,
        user.hashedPassword,
      ]
    );
  }

  update(user, img) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, country = ?, userRole = ?, img = ? where id = ?`,
      [user.firstname, user.lastname, user.country, user.userRole, img, user.id]
    );
  }
}

module.exports = UserManager;
