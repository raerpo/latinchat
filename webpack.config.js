const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'dist', 'app.js'),
  output: {
    filename: 'bundle.js'
  }
}