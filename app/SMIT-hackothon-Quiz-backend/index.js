const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require("dotenv");
const connectDB = require("./db");
const bodyParser = require('body-parser');

// Load environment variables from .env file
dotenv.config();

//Routes import
const userRoutes = require("./Src/Routes/UserRoutes");

// MongoDB connection
connectDB();

// Initialize express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use(morgan('dev'));

// Routes
app.use("/api/v1/user", userRoutes);

app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Validation logic
  const errors = {};

  if (!name || name.trim() === '') {
      errors.name = 'Name should not be empty';
  }

  if (!email || email.trim() === '') {
      errors.email = 'Email should not be empty';
  } else if (!emailPattern.test(email)) {
      errors.email = "Email did not match the pattern";
  }

  if (!password || password.trim() === '') {
      errors.password = 'Password should not be empty';
  } else if (!passwordPattern.test(password)) {
      errors.password = 'Password did not match the pattern';
  }

  if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
      return res.status(400).json({ message: 'User already exists'});
  }

  // Create new user
  const newUser = new User({ name, email, password });
  await newUser.save();

  res.status(201).json({ message: 'User created successfully' });
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
  
    res.status(200).json({ message: 'Login successful' });
  });
  
// Port 
const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
  console.log(`server running on ${process.env.DEV_MODE} port no ${PORT}`)
});
  





