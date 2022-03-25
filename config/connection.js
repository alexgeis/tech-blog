// const Sequelize = require("sequelize");
// require("dotenv").config();

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(
//       process.env.DB_NAME,
//       process.env.DB_USER,
//       process.env.DB_PASSWORD,
//       {
//         host: "localhost",
//         dialect: "mysql",
//         port: 3306,
//       }
//     );

// module.exports = sequelize;

//JAWSDB CONNECT - TAKE 2
const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

// console.log(process.env.JAWSDB_URL);
//JAWSDB URL will be undefined on localhost!!
// create connection to our db
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
