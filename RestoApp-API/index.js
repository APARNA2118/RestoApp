const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = new express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());

// let Login = require('./login');

 //MongoDB Atlas connection
mongoose.connect('mongodb+srv://tsaparna2020:<password>@login/restaurant?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
//mongoose.connect("mongodb+srv://tsaparna2020:aparna@MONGODB2111@cluster0.yl5hcmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//mongoose.connect('mongodb+srv://tsaparna2020:aparna@MONGODB2111@cluster0.yl5hcmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
  });

// Define schema and model for User
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    password: String
  });
  
  const User = mongoose.model('User', userSchema);
  
  // Signup route
  app.post('/api/signup', async (req, res) => {
    try {
      const { name, email, phoneNumber, password } = req.body;
      const newUser = new User({ name, email, phoneNumber, password });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });