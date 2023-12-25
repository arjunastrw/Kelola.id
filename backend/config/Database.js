import { Sequelize } from "sequelize";

const db = new Sequelize("kelola_id", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
