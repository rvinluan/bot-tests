var Twit = require('twit');
var T = new Twit(require('./config.js'));


function run() {
  console.log('hi');
}

module.exports = {
  run: run
}