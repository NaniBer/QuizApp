// models/user.js
const { DataTypes } = require("sequelize");
const connection = require("../dbConnection");
const User = connection.define(
  "userlist",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    // Model options
    tableName: "userlist", // Specify the table name explicitly
    timestamps: false, // If your table doesn't have timestamps
  }
);

// Test the connection and synchronize the model with the database
connection
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = User;
