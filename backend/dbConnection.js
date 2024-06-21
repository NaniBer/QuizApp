// Import necessary modules
const { Sequelize } = require("sequelize");

// Create Sequelize instance for database connection
const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Adjust based on your cloud database SSL settings
    },
  },
});

// Export the Sequelize instance for use in other parts of your application
module.exports = sequelize;
