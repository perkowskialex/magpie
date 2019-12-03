let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    googleId: String,
    email: String,
    name: String,
    budgets: [{
        type: Schema.Types.ObjectId,
        ref: 'Budget'
    }]
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema)