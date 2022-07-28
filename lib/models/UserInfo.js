const pool = require('../utils/pool');

module.exports = class UserInfo {
  id;
  first_name;
  last_name;
  email;
  gender;
  ip_address;

  constructor(row) {
    this.id = row.id;
    this.first_name = row.first_name;
    this.last_name = row.last_name;
    this.email = row.email;
    this.gender = row.gender;
    this.ip_address = row.ip_address;  
  }

  static async getAllUsers() {
    const { rows } = await pool.query('SELECT * from mock_data;');
    return rows.map((row) => new UserInfo(row));
  }

  static async getUserById(id) {
    const { rows } = await pool.query('SELECT * from mock_data WHERE is=$1;', [id]);
    if (!rows[0]) return null;

    return new UserInfo(rows[0]);
  }
};
