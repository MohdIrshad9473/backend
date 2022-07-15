const mongooes = require('mongoose');
const festivalSchema = new mongooes.Schema({
    date1:{type:Number},
    festival: {type:String}
     
});

module.exports = mongooes.model("festival", festivalSchema);