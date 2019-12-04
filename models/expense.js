let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let expenseSchema = new Schema({
    value: {
        type: String,
    },
    category: String,
    date: {
        type: Date,
        default: function () {
            return new Date().getDate();
      }
    },
    location: String,
    method: String,
    description: String
})

module.exports = mongoose.model('Expense', expenseSchema)