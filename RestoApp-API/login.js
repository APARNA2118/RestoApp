const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ulogin = new Schema({
    uname:{type: String, required: true}, 
    pswd:{type: String, required: true}
    

});

module.exports = mongoose.model("Login",Ulogin);