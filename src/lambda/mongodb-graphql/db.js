const mongoose = require('mongoose');
const URI = process.env.DB_URI;
const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

let cachedDb = null;
module.exports = () => {
  if (cachedDb && cachedDb.readyState === 1) {
    return Promise.resolve(cachedDb);
  }

  mongoose.connect(URI, dbOptions);
  cachedDb = mongoose.connection;
  cachedDb.on(
    'error',
    console.error.bind(console, 'MongoDB connection error:'),
  );
  return cachedDb;
};
