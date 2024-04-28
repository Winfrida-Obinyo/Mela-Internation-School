const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt')

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'user1', // Your MySQL username
  password: 'root123', // Your MySQL password
  database: 'meladb' // Your MySQL database name
});

// Connect
db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySQL Connected...');
  });

// User authentication for adminpage

app.post('/api/signup', (req, res) => {
  const { first_name, last_name, phone_number, email, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
          return res.status(500).json({ error: 'Failed to hash password' });
      }      

      // Insert user into the database
      const query = 'INSERT INTO Users (first_name, last_name, phone_number, email, password) VALUES (?, ?, ?, ?, ?)';
      db.query(query, [first_name, last_name, phone_number, email, hashedPassword], (error, results) => {
          if (error) {
              return res.status(500).json({ error: 'Failed to create user' });
          }

          console.log('User added to database');
          return res.status(201).json({ message: 'User created successfully' });
      });
  });
});

// user login route

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Fetch user from the database
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (error, results) => {
      if (error) {
          console.log(error);
          return res.status(500).json({ error: 'Failed to authenticate' });
      }

      if (results.length === 0) {
          return res.status(401).json({ error: 'Invalid credentials' });
      }

      const user = results[0];

      // Compare hashed password
      bcrypt.compare(password, user.password, (err, result) => {
          if (err || !result) {
              return res.status(401).json({ error: 'Invalid credentials' });
          }

          console.log('Login successful');

          // You can generate a JWT token and send it to the client here
          return res.status(200).json({ message: 'Login successful' });

          // Generate JWT token and send it to the client
          // Here you can use a JWT library like jsonwebtoken
      });
  });
});



// Create user data
app.post('/api/user', (req, res) => {
    const { first_name, last_name, email_address, phone_number, date_of_birth, class_level, former_school, start_month, location, additional_comments } = req.body;
    const INSERT_USER_QUERY = `INSERT INTO Admission (first_name, last_name, email_address, phone_number, date_of_birth, class_level, former_school, start_month, location, additional_comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(INSERT_USER_QUERY, [first_name, last_name, email_address, phone_number, date_of_birth, class_level, former_school, start_month, location, additional_comments], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error saving user');
        return;
      }
      console.log('User added to database');
      res.status(200).send('User added successfully');
    });

  });

  app.post('/api/enrollment', (req, res) => {

    const { full_name, email, phone, program, enrollment_date, message  } = req.body;
    const USER_QUERY = `INSERT INTO enrollment (full_name, email, phone, program, enrollment_date, message) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(USER_QUERY, [full_name, email, phone, program, enrollment_date, message], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error saving user');
        return;
      }
      console.log('User added to database');
      res.status(200).send('User added successfully');
    });

  });

  const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});