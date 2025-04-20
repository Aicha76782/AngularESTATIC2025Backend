const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = Schema({
    
    level: String,
    name: String,
  
})
module.exports = mongoose.model('Student',StudentSchema)
