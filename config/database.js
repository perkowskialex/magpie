let mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// database connection event
mongoose.connection.on('connected', function () {
  console.log(`Mongoose connected`);
});

module.exports = mongoose;