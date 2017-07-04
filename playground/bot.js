const Twit = require('twit');
const yargs = require('yargs');
const random = require('random-name');

var name = random();
console.log('the bot is starting !!');

var args = yargs.argv;

//console.log(args);


var T = new Twit({
  consumer_key:         '2JL1lKFwShn1HkMsDFrRFJL5I',
  consumer_secret:      'qGKtQrr0i2doeap3ePsbSC0jMz0LCKeKErQdLXawHia6ldZEBC',
  access_token:         '765993328563421184-gGHVPKJ8SH3kWQiKsvEf9sloaWneCV1',
  access_token_secret:  'j8MddctLuAOgeEkyRxv3N8Kvox6yL9qfT9xBtpjfNnpZ6',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});



if(args.tweet){
setTimeout(
T.post('statuses/update', { status: `Hi @${name} this is gonna be your lucky day !!` }, function(err, data, response) {
  console.log(data)
}),2000);
}




 if (args.search) {

 T.get('search/tweets', { q: args.search, count: 3 }, function(err, data, response) {
  //  console.log(data);
  for (i = 0; i < data.statuses.length; i++) {
      console.log(`Tweet${i+1}: \n${data.statuses[i].text}\n\n`);
}
 });
 };



//this functionality does'nt seem to be of much use for not
// it gets you all the followers of the screen_name and lists their ids
// T.get('followers/ids', { screen_name: 'tolga_tezel' },  function (err, data, response) {
//   console.log(data)
// });

if(args.slug){
  T.get('users/suggestions/:slug', { slug: args.slug }, function (err, data, response) {
  console.log(data)
})
};
