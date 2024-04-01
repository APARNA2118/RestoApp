const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = new express();
app.use(cors());
app.use(bodyParser.json());


let Ulogin = require('./login')


mongoose.connect('mongodb+srv://tsaparna2020:aparna@MONGODB2111@cluster0.yl5hcmi.mongodb.net/restaurant?retryWrites=true&w=majority&appName=Cluster0');
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB connection established successfully");
})

app.get('/logins', async (req, res) => {
  console.log('students requet received');
  let data = await Ulogin.find().catch(err => {
      res.json("Error loading data");
      //res.json([{name: 'Tony', age:'20', dept:'CSE'},{name: 'Bruce', age:'20', dept:'CSE'},{name: 'Maria', age:'20', dept:'CSE'}]);
  })
  res.json(data);

});

app.get('/logins/:id', async (req, res) => {
  let id = req.params.id;
  let data = await Ulogin.findById(id).catch(err => {
  res.json("Error finding Student");
  });
  if(!data) {
      res.json("Not Found")
  }
  else{
      res.json(data);
  }
});

//To delete selected students from database
app.delete("/logins/:id", async(req, res) => {
  let id = req.params.id;
  await  Ulogin.findByIdAndDelete(id)
  .then(() => {
      res.json("Data removed successfully")
  })
  .catch((err) => {
      res.json("Failed deleting data")
  });

});


app.post('/logins', (req, res) => {
  console.log(req.body);
  let login = new Ulogin(req.body);
  login
      .save()
      .then(() => {
          res.json("Saved successfully");
      })
      .catch(err => {
          res.json("error"+err);
      })
});



app.listen('3000', () => {
  console.log('Started server on 3000')
});