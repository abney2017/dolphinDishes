const mongoose = require('mongoose');
const env = require('./environment/environment');

mongoose.Promise = global.Promise;


const mongoUri = 'mongodb://react-cosmos-db-42285.documents.azure.com:10255/?ssl=true'

function connect() {
  return mongoose.connect(mongoUri, {
    auth: {
      user: 'react-cosmos-db-42285',
      password: 'MfWSkd6Ca8AnKLHD0iZ54JUHsho7sOjj4eHkxxpzNSuNVUS6WBPghszRYSh9QpvPtrXfSFvspqutej2VQlcUBg=='
    }
  }).then(() => console.log('connection successful'))
  .catch((err) => console.error(err));;
}


module.exports = {
  connect,
  mongoose
};