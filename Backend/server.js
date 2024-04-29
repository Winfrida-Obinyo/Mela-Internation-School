const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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


  // API endpoint to fetch data from MySQL database
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM admission';
  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result); // Send the fetched data as JSON response
  });
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
      const query = 'INSERT INTO users (first_name, last_name, phone_number, email, password) VALUES (?, ?, ?, ?, ?)';
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

app.post('/api/login', async (req, res) => {
  const { email, password, } = req.body;
  // Function to query the db for user by email
  function getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
        if (error) {
          return reject(error);
        }
        if (results.length === 0) {
          return resolve(null); // No user found with given email
        }
        resolve(results[0]); // retun the first user found with the given email
      });
    });
  }
  try{
    //Find user by email
    const user =await getUserByEmail(email);

    if (!user) {
      return res.status(401).json({error: 'Invalid Credentials'});
    }
    //Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    if(!passwordMatch) {
      return res.status(401).json({error: 'Invalid Credentials'});
    }
    

    // Passwords match, generate JWT token
    // Function to generate JWT token
function generateToken(user) {
  // Define token payload
  const payload = {
    userId: user.id,
    email: user.email,
    // Set token expiration to 1 hour (3600 seconds)
    expiresIn: '1h'
  };
  // Sign the token with a secret key and return
  return jwt.sign(payload, 'secret_key');
}
    const token = generateToken({ userId: user.id, email: user.email });

    // Send token to the client
    res.json({ token });
  } catch (error){
    console.error('Login failed:', error);
    res.status(500).json({error: 'internal server error'});
    console.log('internal server error');
  }
  
      
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