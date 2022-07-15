const mongooes = require('mongoose');
const loginSchema = new mongooes.Schema({
    username:{type:String},
    password: {type:String}
     
});

module.exports = mongooes.model("login", loginSchema);