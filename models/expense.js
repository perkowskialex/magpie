let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let expenseSchema = new Schema({
    id: String,
    value: {
        type: Number,
        required: true
    },
    type: String,
    date: {type: Date, required: true},
    location: String,
    method: String
})

module.exports = mongoose.model('Expense', expenseSchema)
