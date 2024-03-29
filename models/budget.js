let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let budgetSchema = new Schema({
    income: Number,
    budgetName: String,
    expenses: [{
        type: Schema.Types.ObjectId,
        ref: 'Expense'
    }]
}, {
    timestamps: true
});


module.exports = mongoose.model('Budget', budgetSchema) 