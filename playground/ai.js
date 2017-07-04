var unirest = require('unirest');

unirest.get("https://duckduckgo-duckduckgo-zero-click-info.p.mashape.com/?callback=process_duckduckgo&format=json&no_html=1&no_redirect=1&q=DuckDuckGo&skip_disambig=1")
.header("X-Mashape-Key", "JZNlDnsblYmsh6Mkg25NjKaFccwkp1muibyjsnCNy2qpg63Vwj")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
