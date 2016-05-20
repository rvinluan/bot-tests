var CronJob = require('cron').CronJob;

var LikeHashtags = require('./LikeHashtags');

new CronJob('00 00 12 * * *', function() {
  LikeHashtags.run();
}, null, true, 'America/Los_Angeles');
