let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let expenseSchema = new Schema({
    id: String,
    value: {
        type: Number,
        required: true
    },
    type: String,
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
