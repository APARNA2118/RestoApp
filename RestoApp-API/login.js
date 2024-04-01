const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ulogin = new Schema({
    user_name:{type: String, required: true}, 
    user_email:{type: String, required: true},
    user_phone:{type: String, required: true},
    user_pswd:{type: String, required: true}
    

});

module.exports = mongoose.model("Login",Ulogin);