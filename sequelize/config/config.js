require('dotenv').config({path: __dirname + '/../../.env'})

const {DATABASE_URL} = process.env
// console.log(DATABASE_URL);

module.exports = {
  "development": {
    "url": DATABASE_URL,
    "dialect": 'postgres',
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": false,
      },
    },
  },
  "test": {
    "url": '127.0.0.1',
    "dialect": 'postgres',
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": false,
      },
    },
  },
  "production": {
    "url": DATABASE_URL,
    "dialect": 'postgres',
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": false,
      },
    },
  }
}
