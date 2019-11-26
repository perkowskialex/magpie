let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let budgetSchema = new Schema({
    id: String,
    income: Number,
    name: String,
    expenses: {
        type: Schema.Types.ObjectId,
        ref: 'Expense'
    }
}, {
    timestamps: true
});

let userSchema = new Schema({
    id: String,
    googleId: String,
    email: String,
    name: String,
    budget: [budgetSchema]
}, {
    timestamps: true
});

mongoose.exports = mongoose.model('User', userSchema)