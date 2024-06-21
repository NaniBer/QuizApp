const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const User = require("./models/user");
require("dotenv").config();
const connection = require("./dbConnection");

const app = express();
app.use(express.json());
app.use(cors());
// Test database connection
async function testConnection() {
  try {
    await connection.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // Exit process if unable to connect
  }
}

testConnection();

// Example route to fetch all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username);

  try {
    // Find user by username
    const user = await User.findOne({
      where: {
        username: username,
      },
    });
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if passwords match
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Generate token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.status(200).json({
        message: "Login successful",
        user: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          username: user.username,
        },
        token: token,
      });
    } else {
      res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, username, password } = req.body;

  try {
    const existingUser = await User.findOne({
      where: {
        username: username,
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      username: username,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
      token: token,
    });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Example route to create a new user
app.post("/users", async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;
  try {
    const newUser = await User.create({
      firstname,
      lastname,
      username,
      email,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
