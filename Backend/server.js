const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

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