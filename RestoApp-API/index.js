const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = new express();
app.use(cors());
app.use(bodyParser.json());

let Login = require('./student.model');

mongoose.connect("mongodb+srv://tsaparna2020:aparna@MONGODB2111@cluster0.yl5hcmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const connection = mongoose.connection;

connection.once("open",() => {
    console.log("MongoDB connection established successfully");
})