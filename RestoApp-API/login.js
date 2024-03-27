const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ulogin = new Schema({
    uname:{type: String},
    pswd:{type: String},
    

});

module.exports = mongoose.model("Login",Ulogin);