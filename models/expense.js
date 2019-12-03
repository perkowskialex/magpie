let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let expenseSchema = new Schema({
    value: {
        type: Number,
        required: true
    },
    category: String,
    date: {
        type: Date,
        required: true,    
        default: function () {
            return new Date().getDate();
      }},
    location: String,
    method: String,
    description: String
})

module.exports = mongoose.model('Expense', expenseSchema)