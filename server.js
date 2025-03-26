// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS
const bcrypt = require('bcrypt');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use CORS middleware to allow all origins (or you can configure specific origins)
app.use(cors());  // Allow all origins for now

// Set up the MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'minatozak1',
  database: 'users_db'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Endpoint to handle user registration (Already existing)
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password before storing it in the database
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).send('Error hashing password');
    }

    // Insert the user data (with hashed password) into the database
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        return res.status(500).send('Error registering user');
      } else {
        res.status(200).send('User registered successfully');
      }
    });
  });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, result) => {
    if (err) {
      return res.status(500).send('Error querying the database');
    }
    
    if (result.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = result[0];

    // Compare password with hashed password stored in database
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).send('Error comparing password');
      }

      if (isMatch) {
        // Password is correct
        res.status(200).json({ message: 'Login successful' });
      } else {
        // Incorrect password
        res.status(400).json({ message: 'Incorrect password' });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});