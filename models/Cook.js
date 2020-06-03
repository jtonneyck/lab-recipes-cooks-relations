const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cookSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, default: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/The_Swedish_Chef.jpg/220px-The_Swedish_Chef.jpg' },
});
cookSchema.index({'$**': 'text'});

const Cook = mongoose.model('Cook', cookSchema);


module.exports = Cook;
