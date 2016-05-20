var CronJob = require('cron').CronJob;

var LikeHashtags = require('./LikeHashtags');

new CronJob('* * * * * *', function() {
  LikeHashtags.run();
}, null, true, 'America/Los_Angeles');
