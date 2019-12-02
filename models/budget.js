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

let budgetSchema = new Schema({
    income: Number,
    name: String,
    expenses: [expenseSchema]
}, {
    timestamps: true
});

let userSchema = new Schema({
    googleId: String,
    email: String,
    name: String,
    budget: [budgetSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema), mongoose.model('Budget', budgetSchema), mongoose.model('Expense', expenseSchema)